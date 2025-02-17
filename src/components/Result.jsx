import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetFileModel from './FileModel';
import CircularProgressBar from './CirscularProgress';

const ProbabilityCard = ({ title, color }) => (
  <div className="transform perspective-1000 hover:scale-105 transition-transform duration-400">
    <div className="bg-n-1 rounded-xl p-3 shadow-lg transform-style-3d rotate-x-12 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2 p-2">{title}</h3>
      <div className={`text-3xl font-bold ${color}`}>
        {/* {probability}% */}
        <CircularProgressBar progress={``}/>
      </div>
    </div>
  </div>
);


const Result = ({ file }) => {
  const navigate = useNavigate();
  const [authenticity, setAuthenticity] = useState({
    fake: 70,
    real: 30
  });

  useEffect(() => {
    if (!file) {
      navigate("/detection");
    }
  }, []);
  
  const isVideo = file?.type?.includes('video');
  
  const VideoAnalysis = () => (
  <div className="flex-1  text-black grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2">
        <div className="overflow-hidden bg-black/30 h-full w-full flex items-center">
          <div className="h-[80%] w-[90%] m-auto rounded-xl flex items-center justify-center overflow-hidden">
            <GetFileModel file={file} className="h-full z-auto max-h-96 rounded-xl max-w-md w-auto" />
          </div>
        </div>

        <div className="h-full w-full overflow-y-scroll p-2 flex flex-col space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <ProbabilityCard 
              title="Fake Probability" 
              color="text-red-500">
            </ProbabilityCard>
            
            <ProbabilityCard 
              title="Real Probability" 
              color="text-green-500">
            </ProbabilityCard>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <h3 className="font-semibold mb-2">Analysis Summary</h3>
            <p className="text-n-5">
              Based on our analysis, this {file?.type?.includes('image') ? 'image' : 'video'} shows
              {authenticity.fake > 70 ? ' strong' : authenticity.fake > 50 ? ' moderate' : ' low'} 
              indicators of manipulation.
            </p>
          </div>
        </div>
      </div>
  )

  const ImageAnalysis = () => (
    <div className="flex-1  text-black grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2">
        <div className="overflow-hidden bg-black/30 h-full w-full flex items-center">
          <div className="h-[80%] w-[90%] m-auto rounded-xl flex items-center justify-center overflow-hidden">
            <GetFileModel file={file} className="h-full z-auto max-h-96 rounded-xl max-w-md w-auto" />
          </div>
        </div>
        <div>
          <div>
            Images analysis will happen here
          </div>
        </div>
    </div>
  )

  return (
    <div className="fixed inset-0 h-screen w-full z-50 backdrop-blur-md bg-black/30 flex items-center justify-center">
      <div className="relative bg-white h-full w-full md:max-w-screen-lg md:max-h-[700px] flex flex-col shadow-xl">
        <div className="w-full px-3 py-2 border-b-2 flex items-center justify-between">
          <span className="h6 font-grotesk uppercase text-black">Assets Analysis</span>
          <button className="hover:bg-gray-200 p-1 border rounded-lg px-2 py-1">
            <X size={30} color="black" />
          </button>
        </div>
        {isVideo ? <VideoAnalysis/> : <ImageAnalysis/>}
      </div>
    </div>
  );
};

export default Result;