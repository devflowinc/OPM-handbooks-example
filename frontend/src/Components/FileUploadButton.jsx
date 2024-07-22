import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

FileUploadButton.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
};

export default function FileUploadButton({ onFileSelect }) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFile(file)) {
      onFileSelect(file);
      setError(null);
    } else {
      setError('Invalid file type. Only DOCX, PDF, HTML, and TXT files are allowed.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && validateFile(file)) {
      onFileSelect(file);
      setError(null);
    } else {
      setError('Invalid file type. Only DOCX, PDF, HTML, and TXT files are allowed.');
    }
  };

  const validateFile = (file) => {
    const allowedExtensions = [
      'application/pdf',
      'text/plain',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
      'text/html'
    ];
    return allowedExtensions.includes(file.type);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
          isDragOver ? 'border-blue-500' : 'border-gray-300'
        }`}
        onClick={handleButtonClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            DOCX, PDF, HTML, TXT
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".docx,.pdf,.html,.txt"
        />
      </label>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
