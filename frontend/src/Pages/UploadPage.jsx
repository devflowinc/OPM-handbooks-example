import React, { useState } from 'react';
import FileUploadButton from '../Components/FileUploadButton';
import SimpleInputBox from '../Components/SimpleInputBox';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import '@cyntler/react-doc-viewer/dist/index.css';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [docs, setDocs] = useState([]);

  const handleFileSelect = (file) => {
    const fileUrl = URL.createObjectURL(file);
    const newDoc = { uri: fileUrl };
    setDocs([newDoc]);
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  return (
    <div className="flex flex-col gap-3 mx-10 mt-5 mb-5">
      <div className="text-5xl font-medium text-primary mb-3">Upload File</div>
      <div className={`flex flex-row ${selectedFile ? 'justify-between' : ''}`}>
        <div className={`flex flex-col ${selectedFile ? 'w-full md:w-1/2' : 'w-full'}`}>
          <SimpleInputBox
            inputType={'text'}
            placeholderText={'Optional'}
            labelText={<code>group_tracking_id</code>}
            descriptionText={`Specifies the tracking ID for the group created from the file.`}
          />
          <SimpleInputBox
            inputType={'text'}
            placeholderText={'Optional'}
            labelText={<code>link</code>}
            descriptionText={`Link to the file. Used to filter when searching for the file's resulting chunks.`}
          />
          <SimpleInputBox
            inputType={'text'}
            placeholderText={'Optional - separate with commas'}
            labelText={<code>tag_set</code>}
            descriptionText={`Comma-separated list of tags for file chunks. Used to filter chunks during searches.`}
          />
          <SimpleInputBox
            inputType={'text'}
            defaultValue={'.!?,\\n'}
            placeholderText={'Optional - separate with commas'}
            labelText={<code>split_delimiters</code>}
            descriptionText={`Specifies delimiters for splitting the file before chunking. Defaults to [. ! ? \\n]. You can use spaces or other delimiters.`}
          />
          <SimpleInputBox
            inputType={'text'}
            placeholderText={'Optional'}
            labelText={<code>target_splits_per_chunk</code>}
            descriptionText={`Specifies the number of splits per chunk. Defaults to 20, but can be customized.`}
          />
          <SimpleInputBox
            inputType={'date'}
            labelText={<code>time_stamp</code>}
            descriptionText={`Should be combined date and time without timezone. Used for time window filtering and recency-biasing search results.`}
          />
          <SimpleInputBox
            inputType="checkbox"
            labelText={<code>Rebalance Chunks</code>}
            descriptionText="If true, remainder splits are evenly distributed across chunks (e.g., 66 splits with a target of 20 per chunk will result in 3 chunks with 22 splits each)."
            defaultValue={true}
          />
          <FileUploadButton onFileSelect={handleFileSelect} />
          {selectedFile && (
            <div className="mt-4">
              <p className="text-gray-700">Selected file: {selectedFile.name}</p>
            </div>
          )}
        </div>
        {selectedFile && (
          <div className='hidden md:flex flex-col w-full md:w-1/2 ml-4 border-l-2 border-gray-300 pl-1'>
            <div className="p-4">
              <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                config={{
                  header: {
                    disableHeader: true,
                    disableFileName: true,
                    retainURLParams: false,
                  },
                  navigation: {
                    removeZoomOutBtn: false,
                    removeZoomInBtn: false,
                    removeScrollToPrevPageBtn: false,
                    removeScrollToNextPageBtn: false,
                    removeDownloadBtn: false,
                    removePrintBtn: false,
                    removeFullScreenBtn: false,
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
