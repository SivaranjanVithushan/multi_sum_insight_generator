import { useEffect, useState } from 'react';

/**
 * A custom hook for managing the conversation between the user and the AI.
 *
 * @returns {Object} An object containing the `messages` array and the `addMessage` function.
 */
const useMessageCollection = () => {
  const initialMsg = {
    id: 1,
    createdAt: Date.now(),
    text: `
      Hello! We are here help with Data Analysis.
      How can I help you today?
    `,
    ai: true,
  };
  const [messages, setMessages] = useState([initialMsg]);

  /**
   * A function for adding a new message to the collection.
   *
   * @param {Object} message - The message to add to the collection.
   */
  const addMessage = (message) => {
  
    setMessages((prev) => {
      const xx = prev.find((msg) => msg.id === message.id);

      if (xx) {
        return prev.map((msg) =>
          msg.id === message.id ? { ...msg, text: msg.text + message.text } : msg
        );
      } else {
        return [...prev, message]
      }
    });
  };

  useEffect(()=>{
    console.log('messages: ',messages);

  },[messages])

  const clearMessages = () => setMessages([initialMsg]);

  return [messages, addMessage, clearMessages];
};

export default useMessageCollection;

// import { useState } from 'react';

// /**
//  * A custom hook for managing the conversation between the user and the AI.
//  *
//  * @returns {Object} An object containing the `messages` array and the `addMessage` function.
//  */
// const useMessageCollection = () => {
//   const initialMsg = {
//     id: 1,
//     createdAt: Date.now(),
//     text: `
//       Hello! We are here help with Data Analysis.
//       How can I help you today?
//     `,
//     ai: true,
//   };
//   const [messages, setMessages] = useState([initialMsg]);

//   /**
//    * A function for adding a new message to the collection.
//    *
//    * @param {Object} message - The message to add to the collection.
//    */
//   const addMessage = (message) => {
    
//     if (message.ai === true) {
//     const existingMessageIndex = messages.findIndex((msg) => msg.id === message.id);

//     if (existingMessageIndex !== -1) {
//       // If a message with the same ID exists, merge the new message with the existing one
//       setMessages((prev) =>
//         prev.map((msg, index) =>
//           index === existingMessageIndex
//             ? { ...msg, text: msg.text + message.text } // Append the new message text
//             : msg
//         )
//       );}
//     } else {
//       // Otherwise, add the new message to the collection
//       setMessages((prev) => [...prev, message]);
//     }
//   };

//   const clearMessages = () => setMessages([initialMsg]);

//   return [messages, addMessage, clearMessages];
// };

// export default useMessageCollection;

// import { useState } from 'react';

// const useMessageCollection = () => {
//   const initialMsg = {
//     id: 1,
//     createdAt: Date.now(),
//     text: `
//       Hello! We are here to help with Data Analysis.
//       How can I assist you today?
//     `,
//     ai: true,
//   };
//   const [messages, setMessages] = useState([initialMsg]);

//   const addMessage = (message) => {
//     console.log(messages);
//     if (message.ai) {
//       const existingAIIndex = messages.findIndex((msg) => msg.id === message.id);
//       console.log("index " +existingAIIndex)
     
//       if (existingAIIndex !== -1) {
//         // Merge the new message with the existing AI message
//         setMessages((prev) =>
//           prev.map((msg, index) =>
//             index === existingAIIndex ? { ...msg, text: msg.text + message.text } : msg
//           )
//         );
//       } else {
//         // Add the new AI message to the collection
//         setMessages((prev) => [...prev, message]);
//       }
//     } else {
//       // Add non-AI messages directly to the collection
//       setMessages((prev) => [...prev, message]);
//     }
//   };

//   const clearMessages = () => setMessages([initialMsg]);

//   return [messages, addMessage, clearMessages];
// };

// export default useMessageCollection;
