// import React, { useRef, useState } from 'react';
// import './FileUpload.css';
// import { useNavigate } from 'react-router-dom';
// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const fileInputRef = useRef(null);
//   const dropAreaRef = useRef(null);
//   const Navigate = useNavigate();

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const allowedTypes = [
//       'application/zip',
//       'application/vnd.ms-excel',
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'text/csv',
//     ];

//     if (file && allowedTypes.includes(file.type)) {
//       setSelectedFile(file); // Store the entire File object
//       console.log("Uploaded file:", file);
//     } else {
//       setSelectedFile(null);
//       alert("Invalid file type. Please select a zip, excel, or csv file.");
//     }
//   };

//   const handleDragEnter = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleDragLeave = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setIsDragging(false);

//     const file = event.dataTransfer.files[0];
//     const allowedTypes = [
//       'application/zip',
//       'application/vnd.ms-excel',
//       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'text/csv',
//     ];

//     if (file && allowedTypes.includes(file.type)) {
//       setSelectedFile(file); // Store the entire File object
//       console.log("Uploaded file:", file);
//     } else {
//       setSelectedFile(null);
//       alert("Invalid file type. Please drop a zip, excel, or csv file.");
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   // const handleUpload = () => {
//   //   if (selectedFile) {
//   //     console.log("Uploading file:", selectedFile.name);
//   //     setTimeout(() => {
//   //       alert("File uploaded successfully!");
//   //     }, 2000);
//   //   } else {
//   //     console.log("No file selected");
//   //   }
//   // };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       console.log("Uploading file:", selectedFile.name);
//       const formData = new FormData();
//       formData.append('file', selectedFile);
  
//       try {
//         const response = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
//           method: 'POST',
//           body: formData,
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//             console.log(`Upload Progress: ${progress}%`);
//             // Update UI with the upload progress
//             // For example, you can set state to update a progress bar
//           },
//         });
  
//         if (response.ok) {
//           console.log("File uploaded successfully!");
//           alert("File uploaded successfully!");
//         } else {
//           console.error("Failed to upload file");
//           alert("Failed to upload file");
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error.message);
//         alert("Error uploading file");
//       }
//     } else {
//       console.log("No file selected");
//     }
//   };
  

//   // const handleDownload = () => {
//   //   if (selectedFile) {
//   //     const url = URL.createObjectURL(selectedFile);
//   //     const link = document.createElement('a');
//   //     link.href = url;
//   //     link.download = selectedFile.name;
//   //     link.click();
//   //     URL.revokeObjectURL(url);
//   //     alert("File downloaded successfully!");
//   //   } else {
//   //     console.log("No file selected");
//   //   }
//   // };
//   const handleDownload = () => {
//     if (selectedFile) {
//       Navigate(`/download`)
//     } else {
//       console.log("No file selected");
//     }
//   };

//   return (
//     <div className='container'>
//     <div className='new'>
//       <div className={`file-upload-container ${isDragging ? 'highlight' : ''}`}
//         onDragEnter={handleDragEnter}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         ref={dropAreaRef}
//       >
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           style={{ display: 'none' }}
//         />
//         <p>{selectedFile ? `${selectedFile.name}` : "Drop File Here"}</p>
//       </div>
//       <button className="file-upload-button" onClick={handleClick}>Choose File</button>
//       <button className="file-upload-button" onClick={handleUpload}>Submit</button>
      
//     </div>
//     <div className='Node'>
//       <label htmlFor="rememberMe">Node Login</label>
//             <input
//               type="checkbox"
//               id="Node"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />
            
//           </div>
//     <button className="file-upload-button" onClick={handleDownload}>Prepare Command</button>
//     </div>
//   );
// };

// export default FileUpload;
import React, { useRef, useState } from 'react';
import './FileUpload.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);
  const Navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      'application/zip',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      console.log("Uploaded file:", file);
    } else {
      setSelectedFile(null);
      alert("Invalid file type. Please select a zip, excel, or csv file.");
    }
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    const allowedTypes = [
      'application/zip',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      console.log("Uploaded file:", file);
    } else {
      setSelectedFile(null);
      alert("Invalid file type. Please drop a zip, excel, or csv file.");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
          onUploadProgress: (progressEvent) => {
            console.log("ssss", progressEvent.loaded, progressEvent.total)
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            console.log(`Upload Progress: ${progress}%`);
            setUploadProgress(progress <= 100 ? progress : 100);
          },
        });

        if (response.status === 201) {
          console.log("File uploaded successfully!");
          alert("File uploaded successfully!");
        } else {
          console.error("Failed to upload file");
          alert("Failed to upload file");
        }
      } catch (error) {
        console.error("Error uploading file:", error.message);
        alert("Error uploading file");
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleDownload = () => {
    if (selectedFile) {
      Navigate(`/download`)
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className='container'>
      <div className='new'>
        <div className={`file-upload-container ${isDragging ? 'highlight' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          ref={dropAreaRef}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <p>{selectedFile ? `${selectedFile.name}` : "Drop File Here"}</p>
        </div>
        <button className="file-upload-button" onClick={handleClick}>Choose File</button>
        <button className="file-upload-button" onClick={handleUpload}>Submit</button>
        {console.log("wwwwwwwwwww",uploadProgress)}
        {uploadProgress > 0 && uploadProgress < 100 && (
  <div className="progress-container">
    <progress value={uploadProgress} max="100" className="upload-progress"></progress>
    <span className="progress-text">{uploadProgress}%</span>
  </div>
)}
      </div>
      <div className='Node'>
        <label htmlFor="rememberMe">Node Login</label>
        <input
          type="checkbox"
          id="Node"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      <button className="file-upload-button" onClick={handleDownload}>Prepare Command</button>
    </div>
  );
};

export default FileUpload;
