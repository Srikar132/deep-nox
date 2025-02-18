import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Brain, CheckCircle2, AlertCircle, Camera, Loader2 } from 'lucide-react';
import GetFileModel from './FileModel';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized sub-components
const FilePreview = React.memo(function FilePreview({ file }) {
  return (
    <div className="overflow-hidden bg-black/30 h-full w-full flex items-center">
      <div className="h-[80%] w-[90%] m-auto rounded-xl flex items-center justify-center overflow-hidden">
        <GetFileModel file={file} className="h-full z-auto max-h-96 rounded-xl max-w-md w-auto" />
      </div>
    </div>
  );
});

const AnalysisStage = React.memo(function AnalysisStage({ stage, isLoading, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
    >
      <div className="mt-1">
        {isLoading ? (
          <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-700">{text}</p>
      </div>
    </motion.div>
  );
});

const FacePreview = React.memo(function FacePreview({ faceCrop, confidence }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-4 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Camera className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Detected Face</h3>
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={`data:image/jpeg;base64,${faceCrop}`}
          alt="Detected Face"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {confidence}% confident
        </div>
      </div>
    </motion.div>
  );
});

function AnalysisResult({ prediction, confidence , isLoading }) {
  const [currentStage, setCurrentStage] = React.useState(0);
  const [analysisComplete, setAnalysisComplete] = React.useState(false);

  const stages = React.useMemo(() => [
    { id: 1, text: "Initializing facial recognition system...", delay: 1000 },
    { id: 2, text: "Processing image data...", delay: 1500 },
    { id: 3, text: "Analyzing facial features...", delay: 2000 },
    { id: 4, text: `Detected classification: ${prediction}`, delay: 1000 },
    { id: 5, text: `Confidence score: ${confidence}%`, delay: 1500 }
  ], [prediction, confidence]);

  useEffect(() => {
    let timeoutId;
    
    if (isLoading) {
      const progressStages = (stageIndex) => {
        if (stageIndex < 3) {
          setCurrentStage(stageIndex);
          timeoutId = setTimeout(() => progressStages(stageIndex + 1), stages[stageIndex].delay);
        }
      };
      progressStages(0);
    } else if (!analysisComplete) {
      setAnalysisComplete(true);
      setCurrentStage(3);
      timeoutId = setTimeout(() => setCurrentStage(4), stages[3].delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, stages, analysisComplete]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="w-6 h-6 text-blue-500 animate-pulse" />
        <h2 className="text-2xl font-bold">AI Analysis Results</h2>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {stages.slice(0, currentStage + 1).map((stage, index) => (
            <AnalysisStage
              key={stage.id}
              stage={stage}
              isLoading={isLoading && index === currentStage}
              text={stage.text}
            />
          ))}
        </AnimatePresence>
        
      </div>
    </div>
  );
}

function Result({ file, resultData, setFile, loading }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) {
      navigate("/detection");
    }
  }, [file, navigate]);

  const handleClose = useCallback(() => {
    navigate(-1);
    setFile(null);
  }, [navigate, setFile]);

  return (
    <div className="fixed inset-0 h-screen w-full z-50 backdrop-blur-md bg-black/30 flex items-center justify-center">
      <div className="relative bg-white h-full w-full md:max-w-screen-lg md:max-h-[700px] flex flex-col shadow-xl">
        <div className="w-full px-3 py-2 border-b-2 flex items-center justify-between">
          <span className="h6 font-grotesk uppercase text-black">Assets Analysis</span>
          <button onClick={handleClose} className="hover:bg-gray-200 p-1 border rounded-lg px-2 py-1">
            <X size={30} color="black" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-scroll text-black grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2">
          <FilePreview file={file} />
          <div className="overflow-y-scroll">
            <AnalysisResult
              prediction={resultData?.prediction}
              confidence={resultData?.confidence}
              isLoading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap the main component with memo before exporting
export default React.memo(Result);