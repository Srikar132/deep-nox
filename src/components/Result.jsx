import { X } from 'lucide-react';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GetFileModel from './FileModel';
import CircularProgressBar from './CirscularProgress';


const Result = ({file}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!file) {
      navigate("/detection");
    }
  } , []);

  return (
    <div className='fixed inset-0 h-screen w-full z-50 backdrop-blur-md bg-black/30 flex items-center justify-center '>
        <div className="relative bg-white h-full w-full md:max-w-screen-lg md:max-h-[700px] flex flex-col shadow-xl">
          <div className="w-full  px-3 py-2 border-b-2 flex items-center justify-between">
              <span className='h6 font-grotesk uppercase text-black'>Assets Analysis</span>

              <button className='hover:bg-gray-200 p-1 border rounded-lg px-2 py-1'>
                  <X size={30} color='black'/>
              </button>
          </div>

          <div className="flex-1 overflow-y-scroll text-black grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2">
            <div className="overflow-hidden bg-black/30 h-full w-full flex items-center ">
                <div className="h-[80%] w-[90%] m-auto rounded-xl flex items-center justify-center overflow-hidden ">
                    <GetFileModel file={file} className={"h-full z-auto max-h-96 rounded-xl  max-w-md w-auto"}/>
                </div>
            </div>

            <div className="h-full w-full">
              <CircularProgressBar progress={50}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Result;