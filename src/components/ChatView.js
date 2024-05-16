import React, { useState, useRef, useEffect, useContext } from 'react';
import ChatMessage from './ChatMessage';
import { ChatContext } from '../context/chatContext';
import { MdSend } from 'react-icons/md';
import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip as ReactTooltip } from 'react-tooltip';



/**
 * A chat view component that displays a list of messages and a form for sending new messages.
 */
const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState('');
  const [prompt, setPrompt] = useState('');
  // const [loading, setLoading] = useState(false);
  const [messages, addMessage] = useContext(ChatContext);
  // const [modalOpen, setModalOpen] = useState(false);
  const [modalPromptOpen, setModalPromptOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [streamOutput, setStreamOutput] = useState(""); // State to store streaming data


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
  const updateMessage = (newValue, ai, id) => {
    // 
    console.log(id);
    const newMsg = {
      id: id ,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
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
      const response = await fetch('https://research-project-h4fb.onrender.com/get_prediction_and_QA?email=a&query=' + prompt, options);

      console.log(response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body != null ? response.body.getReader() : null;
      let chunks = ''; // Variable to accumulate chunks of data

      if (reader) {
        reader.read().then(function processText({ done, value }) {
          if (done) {
           
            console.log('Stream completed');
            return;
          }
          let text = new TextDecoder().decode(value);
         
          // Process text chunk
          chunks += text;
          setStreamOutput(chunks);// Accumulate chunks of data
          console.log(text);
          updateMessage(text, true , 12);
          // Read the next chunk
          reader.read().then(processText);
        });
      }


    } catch (error) {
      console.error('Error:', error);
    }
  };

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
      const response = await fetch(`https://arafath10-research-imagegen-api.hf.space/get_image_for_text?email=arafath&query=${encodeURIComponent(prompt)}`,options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      updateMessage(`![Generated Image](${imageUrl})`, true);
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



  const handleUseClicked = () => {
    setFormValue(prompt);
    setModalPromptOpen(false);
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
              // onClick={handleGenerateImage}
            >
              <i className="fas fa-image"></i>
              {/* <span className="tooltip-text">Generate Image</span> */}
            </button>
            {/* <button type="button" className="chatview__btn-generate bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded" onClick={handleGenerateImage}>
              Generate Image
            </button> */}
            <input type="file" onChange={handleFileChange} className="ml-2" />
          </div>
        </div>
      </form>
    
    </div>
  );
};

export default ChatView;
