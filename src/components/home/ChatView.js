import React, { useState, useRef, useEffect, useContext } from 'react';
import ChatMessage from '../home/ChatMessage';
import { ChatContext } from '../../context/chatContext';
import { MdImage, MdSend, MdUploadFile } from 'react-icons/md';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { Tooltip, Input, Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [language, setLanguage] = useState('English');


  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchUserDetails();
  }, []);


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
   * @param {boolean} [img] - Whether the message is an image.
   */
  const updateMessage = (newValue, ai, id, img) => {
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      img: img,

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

    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const cleanPrompt = formValue.trim();
    const newMsg = cleanPrompt;
    const id = Date.now() + Math.floor(Math.random() * 1000000);

    setFormValue('');
    updateMessage(newMsg, false, id);

    if (e.nativeEvent.submitter.name === 'sendText') {
      await handleSubmit(newMsg, id);
    } else if (e.nativeEvent.submitter.name === 'generateImage') {
      await handleGenerateImage(newMsg, id);
    }


  };

  /**
  * Adds a new message to the chat.
  *
  * @param {string} prompt - The text of the new message.
  * @param {number} id - The ID of the new message.
 
  */
  const handleSubmit = async (prompt, id) => {
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
      const aiMessageId = id + 1;
      updateMessage("", true, aiMessageId, false);
      console.log("userDetails", userDetails);

      const response = await fetch(`https://research-project-h4fb.onrender.com/get_prediction_and_QA?email=${userDetails.email}&query=${encodeURIComponent(prompt)}`, options);
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let chunks = '';
      let fullText = '';
      const processChunks = async ({ done, value }) => {
        if (done) {
          if (chunks) {
            try {
              const data = JSON.parse(chunks);
              const { id, result } = data;
              fullText += result;
              updateMessage(result, true, aiMessageId, false);

              if (language !== "English") {
                try {
                  const options = {
                    method: 'POST',
                    headers: {
                      'accept': 'application/json',
                      'X-API-Key': 'your_api_key_here' // Replace with your actual API key
                    }
                  };
                  await fetch(` https://arafath10-research-imagegen-api.hf.space/translator?sentence=${fullText}&lang=${language}`, options).then(
                    (response) => response.json().then(data => updateMessage("\n\n" + data, true, aiMessageId, false))).catch((error) => console.log(error));
                } catch (error) {
                  console.error('Error:', error);
                }
              }
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
            fullText += result;
            console.log("fullText", fullText);
            updateMessage(result, true, aiMessageId, false);
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

  const handleGenerateImage = async (prompt, id) => {
    // const prompt = formValue.trim();

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
      const aiMessageId = id + 1;
      updateMessage("", true, aiMessageId, true);
      const response = await fetch(`https://arafath10-research-imagegen-api.hf.space/get_image_for_text?email=${userDetails.email}&query=${encodeURIComponent(prompt)}`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const base64Image = data.image;

      console.log("image URL", base64Image);

      const imageMarkdown = `![Generated Image](data:image/jpeg;base64,${base64Image})`;

      // Debug: Log the markdown string
      console.log('Image Markdown:', imageMarkdown);

      updateMessage(imageMarkdown, true, aiMessageId, true);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     // 👇 Get input value
  //     sendMessage(e);
  //     inputRef.current.style.height = 'auto';
  //   }
  // };

  const handleChange = (event) => {
    setFormValue(event.target.value);
  };

  const handleLangageChange = (event) => {
    setLanguage(event.target.value);
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
            className="chatview__textarea-message placeholder:text-gray-400"
            placeholder="Type a prompt here..."
            rows={1}
            value={formValue}
            onChange={handleChange}
          />
          <div className="flex items-center">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Language"
                  onChange={handleLangageChange}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Tamil"}>Tamil</MenuItem>
                  <MenuItem value={"Sinhala"}>Sinhala</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Send button */}
            <Tooltip title="Insight Generate" arrow>
              <span>
              <button
                type="submit"
                name="sendText"
                className="chatview__btn-send bg-blue-500 text-white font-bold rounded"
                disabled={!formValue}
                data-tip="Send Message">
                <MdSend size={30} />
              </button>
              </span>
            </Tooltip>
            {/* Generate image button */}
            <Tooltip title="Graph Generate" arrow>
              <span>
              <button
                type="submit"
                name="generateImage"
                className="chatview__btn-generate bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded"
                disabled={!formValue}
                data-tip="Generate Image"
                style={{ fontSize: '1.11rem' }}
              >
                <MdImage size={20} />
              </button>
              </span>
            </Tooltip>


            <Tooltip title="Upload your Dataset" arrow>
              <label htmlFor="upload-file" className="upload-label ">
                <Input
                  id="upload-file"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<MdUploadFile />}
                  className="upload-button"
                  style={{ backgroundColor: '#3f51b5', color: 'white', padding: '0 10px', }}
                >
                  {fileName ? `${fileName.slice(0, 15)}${fileName.length > 15 ? '...' : ''}` : 'Upload File'}
                </Button>
              </label>
            </Tooltip>
            {fileName && <span className="upload-indicator">Uploaded</span>}

          </div>
        </div>
      </form>

    </div>
  );
};

export default ChatView;
