// import { ChangeEvent, useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   userInput: string;
// };

// interface ChatBotProps {
//   imgUrl?: string;
// }

// export default function ChatBot({ imgUrl }: ChatBotProps) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
//   const [userFormInput, setUserFormInput] = useState<Inputs | null | string>(
//     null
//   );

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>)=> {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileName(selectedFile.name);
      
//     }
//   };
//   const [file, setFile] = useState<File | null>(null);
//   const [fileName, setFileName] = useState<string>('');

//   const handleFileSubmit = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();

//     if (!file) {
//       alert('Please select a file first!');
//       return;
//     }
//     console.log("Vithu"+file);
//     console.log("Vithu"+
//     fileName);
//     const formData = new FormData();
//     formData.append('file', file, fileName);
//     formData.append('email', 'bunny@gmail.com');
//     formData.append('query', 'give future sales predictions');

//     try {
//       const response = await fetch('https://research-project-h4fb.onrender.com/uploadfile/', {
//         method: 'POST',
//         body: formData,
//       });
//       console.log(response);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const reader = response.body != null ? response.body.getReader(): null;
//       if(reader != null){
//         reader.read().then(function processText({ done, value }) {
//           if (done) {
//             console.log('Stream completed');
//             return;
//           }
//           let text = new TextDecoder().decode(value);
//           console.log(text);
//           // Process text chunk
  
//           // Read the next chunk
//           reader.read().then(processText);
//         });
//       }
     

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data);
//     setUserFormInput(data.userInput);
//     setFormSubmitted(true);
//     reset();
//   };
//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       handleSubmit(onSubmit)();
//     }
//   };

//   return (
//     <div className="md:h-[80vh] w-full max-w-3xl mx-auto md:py-20  md:relative">
//       {formSubmitted && (
//         <div className=" flex flex-col gap-6 lg:mx-48 md:mx-20">
//           {imgUrl ? (
//             <img className="w-10 h-10 rounded-full" src={imgUrl} alt="" />
//           ) : (
//             <div className="flex items-center gap-6">
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div>
//                 <h3 className="md:text-xl font-bold text-base">You</h3>
//                 {typeof userFormInput === "string" ? (
//                   <p>{userFormInput}</p>
//                 ) : typeof userFormInput === "object" ? (
//                   <p>{JSON.stringify(userFormInput)}</p>
//                 ) : null}
//               </div>
//             </div>
//           )}
//           <div className="flex items-center gap-6 mb-4">
//             <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//             <div>
//               <h3 className="md:text-xl font-bold text-base">Chat-bot</h3>
//               <p>Set Your Response from your API</p>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="w-full justify-center flex flex-col items-center">
//         {!formSubmitted && (
//           <>
//             <button className="bg-[#8e8f9e] text-black font-bold rounded-md md:px-12 md:py-2 px-4 py-1 mb-4">
//               Logo
//             </button>
//             <h1 className="text-[#8e8f9e] md:text-4xl text-xl font-bold">
//               How can i help you today?
//             </h1>
//           </>
//         )}
//       </div>
//       <div className="md:absolute md:bottom-6 flex justify-center w-full ">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full lg:mx-48 md:mx-20 flex items-center"
//         >
//           <input
//             className="w-full h-12 rounded-md px-4 text-black mr-2"
//             placeholder="Type your question and press enter"
//             {...register("userInput")}
//             onKeyDown={handleKeyDown}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//       {/* File upload form */}
//       <div className="md:absolute md:bottom-6 right-0 w-full flex justify-center items-center">
//         <form onSubmit={handleFileSubmit} className="flex items-center">
//           <label className="mr-2">
//             Upload file:
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//           {fileName && <p className="mr-2">Selected file: {fileName}</p>}
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded-md"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
     
//     </div>
//   );
// }

import React, { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  userInput: string;
};

interface ChatBotProps {
  imgUrl?: string;
}

export default function ChatBot({ imgUrl }: ChatBotProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userFormInput, setUserFormInput] = useState<Inputs | null | string>(
    null
  );
  const [streamOutput, setStreamOutput] = useState(""); // State to store streaming data


  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleFileSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    // formData.append('email', 'bunny@gmail.com');
    // formData.append('query', 'give future sales predictions');

  //   try {
  //     const response = await fetch(
  //       'https://research-project-h4fb.onrender.com/uploadfile/',
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const reader = response.body?.getReader();

  //     if (reader) {
  //       reader.read().then(function processText({ done, value }) {
  //         if (done) {
  //           console.log('Stream completed');
  //           return;
  //         }
  //         let text = new TextDecoder().decode(value);
  //         console.log(text);
  //         // Process text chunk

  //         // Read the next chunk
  //         reader.read().then(processText);
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'X-API-Key': 'your_api_key_here' // Replace with your actual API key
    },
    body: formData
  };

  try {
    const response = await fetch('https://research-project-h4fb.onrender.com/get_prediction_and_QA?email=a&query=can i get the summary of this dataset', options);

    console.log(response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const reader = response.body != null ? response.body.getReader() : null;
    let chunks = ''; // Variable to accumulate chunks of data

    if (reader != null) {
      reader.read().then(function processText({ done, value }) {
        if (done) {
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setUserFormInput(data.userInput);
    setFormSubmitted(true);
    reset();
  };

  return (
    <div className="md:h-[80vh] w-full max-w-3xl mx-auto md:py-20 md:relative">
      {formSubmitted && (
        <div className="flex flex-col gap-6 lg:mx-48 md:mx-20">
          {imgUrl ? (
            <img className="w-10 h-10 rounded-full" src={imgUrl} alt="" />
          ) : (
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              <div>
                <h3 className="md:text-xl font-bold text-base">You</h3>
                {typeof userFormInput === 'string' ? (
                  <p>{userFormInput}</p>
                ) : typeof userFormInput === 'object' ? (
                  <p>{JSON.stringify(userFormInput)}</p>
                ) : null}
              </div>
            </div>
          )}
          <div className="flex items-center gap-6 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <div>
              <h3 className="md:text-xl font-bold text-base">Chat-bot</h3>
              <p>{streamOutput}</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full justify-center flex flex-col items-center">
        {!formSubmitted && (
          <>
            <button className="bg-[#8e8f9e] text-black font-bold rounded-md md:px-12 md:py-2 px-4 py-1 mb-4">
              Logo
            </button>
            <h1 className="text-[#8e8f9e] md:text-4xl text-xl font-bold">
              How can I help you today?
            </h1>
          </>
        )}
      </div>
      <div className="md:absolute md:bottom-6 flex justify-center w-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  md:mx-20 flex items-center"
        >
          <input
            className="w-full h-12 rounded-md px-4 text-black mr-2"
            placeholder="Type your question and press enter"
            {...register('userInput')}
          />
         
        </form>
        <form
          onSubmit={handleFileSubmit}
          className="flex items-center"
          encType="multipart/form-data"
        >
          <label className="mr-2">
            Upload file:
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {fileName && <p className="mr-2">Selected file: {fileName}</p>}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
