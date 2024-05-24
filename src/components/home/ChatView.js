import React, { useState, useRef, useEffect, useContext } from 'react';
import ChatMessage from '../home/ChatMessage';
import { ChatContext } from '../../context/chatContext';
import { MdSend } from 'react-icons/md';
import 'react-tooltip/dist/react-tooltip.css';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";



/**
 * A chat view component that displays a list of messages and a form for sending new messages.
 */
const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState('');
  const [messages, addMessage] = useContext(ChatContext);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [userDetails, setUserDetails] = useState(null);


  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;
      if(user){
        const docRef = doc(db, 'users',user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchUserDetails();
  },[]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };


  /**
   * Scrolls the chat area to the bottom.
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Adds a new message to the chat.
   *
   * @param {string} newValue - The text of the new message.
   * @param {boolean} [ai] - Whether the message was sent by an AI or the user.
   * @param {number} [id] - The ID of the new message.
   */
  const updateMessage = (newValue, ai, id,img) => {
    
    // 
    console.log(id);
    const newMsg = {
      id: id ,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      img: img
    };

    addMessage(newMsg);
  };

  
  /**
   * Sends our prompt to our API and get response to our request from openai.
   *
   * @param {Event} e - The submit event of the form.
   */
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue) return;

    const cleanPrompt = formValue.trim();

    const newMsg = cleanPrompt;

    //genarate id
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    
    setFormValue('');
    updateMessage(newMsg, false ,id);
    // Determine which button was clicked
    if (e.nativeEvent.submitter.name === 'sendText') {
      await handleSubmit(newMsg);
    } else if (e.nativeEvent.submitter.name === 'generateImage') {
      await handleGenerateImage(newMsg);
    }
  

  };

  /**
  * Adds a new message to the chat.
  *
  * @param {string} prompt - The text of the new message.
 
  */
  const handleSubmit = async (prompt) => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file, fileName);

    const options = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'X-API-Key': 'your_api_key_here' // Replace with your actual API key
      },
      body: formData
    };

    try {
      const response = await fetch(`https://research-project-h4fb.onrender.com/get_prediction_and_QA?email=${userDetails.email}&query=${encodeURIComponent(prompt)}`, options);
     
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let chunks = '';
  
      const processChunks = async ({ done, value }) => {
        if (done) {
          if (chunks) {
            try {
              const data = JSON.parse(chunks);
              const { id, result } = data;
              updateMessage(result, true, id, false);
            } catch (e) {
              console.error('Error parsing final JSON chunk:', e);
            }
          }
          console.log('Stream completed');
          return;
        }
  
        chunks += decoder.decode(value, { stream: true });
  
        let boundary = chunks.indexOf('}{');
        while (boundary !== -1) {
          const jsonString = chunks.slice(0, boundary + 1);
          chunks = chunks.slice(boundary + 1);
  
          try {
            const data = JSON.parse(jsonString);
            const { id, result } = data;
            updateMessage(result, true, id);
          } catch (e) {
            console.error('Error parsing JSON:', e);
          }
  
          boundary = chunks.indexOf('}{');
        }
  
        reader.read().then(processChunks);
      };
  
      reader.read().then(processChunks);
    } catch (error) {
      console.error('Error:', error);
    }
  };

//   const handleGenerateImage = async () => {
    
//     const prompt = formValue.trim();
    
//     if (!file) {
//       alert('Please select a file first!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file, fileName);

//     const options = {
//       method: 'POST',
//       headers: {
//         'accept': 'application/json',
//         'X-API-Key': 'your_api_key_here' // Replace with your actual API key
//       },
//       body: formData
//     };

//     try {
//       const response = await fetch(`https://arafath10-research-imagegen-api.hf.space/get_image_for_text?email=${userDetails.email}&query=${encodeURIComponent(prompt)}`,options);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       const base64Image = data.image;

//       console.log("image URL",base64Image);
//       console.log("id", data.id);

//       const id = Date.now() + Math.floor(Math.random() * 1000000);
//       const imageMarkdown = `![Generated Image](data:image/jpeg;base64,${base64Image})`;
//       // const imageMarkdown = `![enerated-image](data:image/jpeg;base64,${base64Image})`;
//  // Debug: Log the markdown string
//     console.log('Image Markdown:', imageMarkdown);
//       // updateMessage(`![Generated Image](${imageUrl})`, true);
//       updateMessage(imageMarkdown, true, id);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

const handleGenerateImage = async () => {
  const prompt = formValue.trim();

  if (!file) {
    alert('Please select a file first!');
    return;
  }

  const formData = new FormData();
  formData.append('file', file, fileName);

  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'X-API-Key': 'your_api_key_here' // Replace with your actual API key
    },
    body: formData
  };

  try {
    const response = await fetch(`https://arafath10-research-imagegen-api.hf.space/get_image_for_text?email=${userDetails.email}&query=${encodeURIComponent(prompt)}`, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const base64Image = data.image;

    console.log("image URL", base64Image);
    console.log("id", data.id);

    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const imageMarkdown = `![Generated Image](data:image/jpeg;base64,${base64Image})`;

    // Debug: Log the markdown string
    console.log('Image Markdown:', imageMarkdown);

    updateMessage(imageMarkdown, true, id, true);
  } catch (error) {
    console.error('Error:', error);
  }
};


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // 👇 Get input value
      sendMessage(e);
      inputRef.current.style.height = 'auto';
    }
  };

  const handleChange = (event) => {
    setFormValue(event.target.value);
  };


  /**
   * Scrolls the chat area to the bottom when the messages array is updated.
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /**
   * Focuses the TextArea input to when the component is first rendered.
   */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
  }, [formValue]);

  return (
    <div className="chatview">
      <main className="chatview__chatarea">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={{ ...message }} />
        ))}

        <span ref={messagesEndRef}></span>
      </main>
      <form className="form" onSubmit={sendMessage}>
        <div className="flex items-stretch justify-between w-full">
          <textarea
            ref={inputRef}
            className="chatview__textarea-message"
            rows={1}
            value={formValue}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <div className="flex items-center">
            <button type="submit" name="sendText" className="chatview__btn-send bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" disabled={!formValue}>
              <MdSend size={30} />
            </button>
            <button
              type="submit"
              name="generateImage"
              className="chatview__btn-generate bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded"
            >
              <i className="fas fa-image"></i>
              {/* <span className="tooltip-text">Generate Image</span> */}
            </button>
           
            <input type="file" onChange={handleFileChange} className="ml-2" />
          </div>
        </div>
      </form>
    
    </div>
  );
};

export default ChatView;
