import React, { useState, useRef, useEffect, useContext } from 'react';
import ChatMessage from './ChatMessage';
import { ChatContext } from '../context/chatContext';
import { MdSend, MdLightbulbOutline } from 'react-icons/md';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';



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
  const [modalOpen, setModalOpen] = useState(false);
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
   */
  const updateMessage = (newValue, ai) => {
    // const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: messages.length + 1, 
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

    setFormValue('');
    updateMessage(newMsg, false);
    await handleSubmit(newMsg);

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
    console.log("Vithu" + file + fileName);

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

      if (reader != null) {
        reader.read().then(function processText({ done, value }) {
          if (done) {
            updateMessage(chunks, true);
            console.log('Stream completed');
            return;
          }
          let text = new TextDecoder().decode(value);
          console.log(text);
          // Process text chunk
          chunks += text;
          setStreamOutput(chunks);// Accumulate chunks of data
          console.log(text); // Optionally log each chunk
          // Read the next chunk
          reader.read().then(processText);
        });
      }


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
            <button type="submit" className="chatview__btn-send" disabled={!formValue}>
              <MdSend size={30} />
            </button>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
      </form>
      {/* <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <Modal title="Prompt Perfect" modalOpen={modalPromptOpen} setModalOpen={setModalPromptOpen}>
        <PromptPerfect
          prompt={prompt}
          onChange={setPrompt}
          onCancelClicked={() => setModalPromptOpen(false)}
          onUseClicked={handleUseClicked}
        />
      </Modal> */}
    </div>
  );
};

export default ChatView;
