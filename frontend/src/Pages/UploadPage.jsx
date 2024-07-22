import React, { useState } from 'react';
import FileUploadButton from '../Components/FileUploadButton';


export default function UploadPage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
      setSelectedFile(file);
      console.log('Selected file:', file);
    };

    return (
        <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">File Upload Example</h1>
        <FileUploadButton onFileSelect={handleFileSelect} />
        {selectedFile && (
          <div className="mt-4">
            <p className="text-gray-700">Selected file: {selectedFile.name}</p>
          </div>
        )}
      </div>
    )
}