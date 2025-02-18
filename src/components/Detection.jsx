  import React, { useState } from "react";
  import Section from "./Section";
  import MyDropzone from "./DropZone";
  import { Route, Routes, useNavigate } from "react-router-dom";
  import ResultComponent from "./Result"; // Renamed to avoid conflict
  import UploadSection from "./UploadSection";
  import RecognizeBtn from "./RecognizeBtn";
  import BackgroundFilter from "./design/Detection";
  import GetFileModel from "./FileModel";
  import { BottomLine } from "./design/Hero";
  import { useToast } from "../hooks/use-toast";

  // Constants for file validation
  const SUPPORTED_TYPES = {
    IMAGE: ['image/jpeg', 'image/png', 'image/webp'],
    VIDEO: ['video/mp4', 'video/webm']
  };

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  function Detection() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [zIndex, setZIndex] = useState("z-1"); // Renamed for clarity
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState(null);
    const { toast } = useToast();

    const validateFile = (file) => {
      if (!file) {
        throw new Error("Please select a file");
      }

      const isImage = SUPPORTED_TYPES.IMAGE.includes(file.type);
      const isVideo = SUPPORTED_TYPES.VIDEO.includes(file.type);

      if (!isImage && !isVideo) {
        throw new Error("Unsupported file type. Please upload an image (JPEG, PNG, WebP) or video (MP4, WebM)");
      }

      return isImage ? 'image' : 'video';
    };

    const handlePrediction = async () => {
      try {
        setLoading(true);
        const fileType = validateFile(file);
        
        // Navigate immediately
        navigate("result");
    
        const formData = new FormData();
        formData.append("file", file);
        const apiUrl = `${API_BASE_URL}/detect/${fileType}`;
    
        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
    
        const data = await response.json();
        setResultData({...data, type: fileType});
      } catch (error) {
        toast({
          title: "Error Occurred",
          description: error.message,
          variant: "destructive",
        });
        navigate("/detection"); // Navigate back on error
      } finally {
        setLoading(false);
      }
    };
    const handleFileChange = (newFile) => {
      try {
        validateFile(newFile);
        setFile(newFile);
      } catch (error) {
        toast({
          title: "Invalid File",
          description: error.message,
          variant: "destructive",
        });
      }
    };

    return (
      <div className="min-h-screen relative">
        <Section
          className="pt-[5rem] sm:pt-[8.2rem] -mt-[5.4rem] h-screen overflow-auto"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPadding
        >
          <div className="container sm:py-10 flex items-center justify-center flex-col">
            <h1 className="h1 z-1 lg:text-8xl font-extrabold font-mono tracking-wider mb-5">
              deepnox
            </h1>
            <p className="body-1 z-1 max-w-3xl text-center mx-auto text-n-1 font-code mb-3">
              Gen v1.1
            </p>

            {file ? (
              <div className="border z-1 rounded-xl p-[3px] flex items-center relative overflow-hidden h-80 justify-center">
                <div className="absolute -inset-64 bg-conic-gradient animate-spin -z-1 rounded-xl" />
                <GetFileModel
                  loading={loading}
                  file={file}
                  className="h-full max-h-96 rounded-xl max-w-md max-sm:max-w-xs w-auto"
                />
                
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-10 h-10 rounded-full border-4 border-gray-300 animate-spin border-t-cyan-500" />
                  </div>
                )}
              </div>
            ) : (
              <UploadSection 
                file={file} 
                setFile={handleFileChange}
                z={zIndex}
              />
            )}

            <RecognizeBtn
              onClick={handlePrediction}
              disabled={!file || loading}
            />
          </div>

          <MyDropzone 
            setFile={handleFileChange}
            setZIndex={setZIndex}
            acceptedTypes={[...SUPPORTED_TYPES.IMAGE, ...SUPPORTED_TYPES.VIDEO]}
          />
        </Section>

        <BackgroundFilter />
        <BottomLine />  

        <Routes>
          <Route 
            path="result" 
            element={<ResultComponent loading={loading} setFile={setFile} file={file} resultData={resultData} />} 
          />
        </Routes>
      </div>
    );
  }

  export default Detection;