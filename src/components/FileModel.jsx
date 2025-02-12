import { useEffect, useRef, useState } from "react";

export const GetFileModel = ({ file , className }) => {
    const [previewURL, setPreviewURL] = useState(null);
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (file) {
        const url = URL.createObjectURL(file);
        setPreviewURL(url);
  
        return () => URL.revokeObjectURL(url); 
      }
    }, [file]);
  
    if (!file) return null; 
  
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={previewURL}
          alt="Preview"
          className={className}
        />
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <video 
          autoPlay 
          ref={videoRef} 
          muted 
          controls // Add controls for manual playback
          className={className}
          onError={(e) => console.error("Video failed to load", e)}
        >
          <source src={previewURL} type={file.type} />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <p className="text-red-500">Unsupported file format</p>;
    }
  };


  export default GetFileModel;