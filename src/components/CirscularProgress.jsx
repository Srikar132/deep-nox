import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ progress }) => {
  const [dashOffset, setDashOffset] = useState(100);

  useEffect(() => {
    const offset = 100 - (progress / 100) * 100;
    setDashOffset(offset);
  }, [progress]);

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-24 h-24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="circle-background"
          cx="18"
          cy="18"
          r="15.9"
          stroke="lightgray"
          strokeWidth="2"
          fill="none"
        />
        <circle
          className="circle-progress"
          cx="18"
          cy="18"
          r="15.9"
          stroke="skyblue"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute text-lg font-semibold">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
