import React, { useState, useRef } from 'react';
import RemoveButton from './RemoveButton';
import CancelButton from './CancelButton';
import ImageOutputCard from '../ImageOutputCard/Index';
import axios from 'axios';

const Index: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [filename, setFilename] = useState<string>('');
    const [removing, setRemoving] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [outputImgSrc, setOutputImgSrc] = useState<string>('');
    
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handle drag-over event
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    // Handle drag-leave event
    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Handle file drop event
    const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const file = event.dataTransfer.files[0]; // Get the first file
        if (file) {
            processFile(file);
            if (fileInputRef.current) {
                fileInputRef.current.files = event.dataTransfer.files;
            }
        }
    };

    // Common logic to process the file
    const processFile = (file: File) => {
        setImageSrc(URL.createObjectURL(file)); // Create preview URL
        setFilename(file.name); // Save file name
    };

    const handleFileUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            processFile(file);
        }
    };

    const handleCancelClick = () => {
        setImageSrc('');
        setFilename('');
    };

    const handleFormSubmit = () => {
        if (!fileInputRef.current || !fileInputRef.current.files) return;
        
        setRemoving(true);
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);

        axios.post('/api/removebg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'blob'
        })
        .then(response => {
            const blob = new Blob([response.data], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            setOutputImgSrc(url);
            setImageSrc('');
            setFilename('');
            setRemoving(false);
        })
        .catch((error) => {
            console.error("Error uploading the image:", error);
            alert("Failed to upload the image. Please try again.");
            setRemoving(false);
        });
    };

    return (
        <>
            <form className="w-full max-w-lg md:max-w-xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div 
                    className={`flex items-center justify-center w-full ${isDragging ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleFileDrop}
                >
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {!imageSrc ? (
                                <>
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or WEBP</p>
                                </>
                            ) : (
                                removing ? (
                                    <div className="relative top-36 z-20 flex flex-col items-center justify-center">
                                        <div className="w-40 px-3 py-1 text-xs font-medium leading-none text-center text-primary-800 bg-primary-200 rounded-full animate-pulse dark:bg-primary-900 dark:text-primary-200">Removing...</div>
                                    </div>
                                ) : (
                                    <img className="w-screen h-72" src={imageSrc} alt="Preview" />
                                )
                            )}
                        </div>
                        <input 
                            id="dropzone-file" 
                            type="file" 
                            className="hidden"
                            ref={fileInputRef}
                            accept="image/png, image/jpeg, image/webp"
                            onChange={handleFileUploadChange}
                        />
                    </label>
                </div>
                {filename && <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{filename}</figcaption>}
                <div className="flex flex-col md:flex-row pt-4">
                    <RemoveButton onClick={handleFormSubmit} isDisable={!imageSrc || removing} isLoading={removing} />
                    <CancelButton onClick={handleCancelClick} isDisable={!imageSrc || removing} />
                </div>
            </form>
            {outputImgSrc && <ImageOutputCard imageSrc={outputImgSrc} />}
        </>
    );
};

export default Index;
