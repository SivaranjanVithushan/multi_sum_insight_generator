// export default FileUpload;
import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [streamOutput, setStreamOutput] = useState(""); // State to store streaming data


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);

    }
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first!');
      return;
    }
    console.log("Vithu" + file);
    console.log("Vithu" +
      fileName);
    const formData = new FormData();
    formData.append('file', file, fileName);
    // formData.append('email', 'a');
    // formData.append('query', 'give me the area 3200 home price');

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" onChange={handleFileChange} />
        </label>
        {fileName && <p>Selected file: {fileName}</p>}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2 className='text-white'>Stream Output:</h2>
        <pre className='text-white'>{streamOutput}</pre> Display streaming output
      </div>

    </div>

  );
}

export default FileUpload;