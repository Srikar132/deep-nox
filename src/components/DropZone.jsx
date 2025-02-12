import { File } from 'lucide-react';
import React, {useCallback, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone({setFile , setzIndex}) {
  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length < 1) {
        return;
    }

    setFile(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  useEffect(() => {
    if(isDragActive) {
        setzIndex("z-0");
    }else {
        setzIndex("z-1");
    }
  } , [isDragActive]);



  return (
    <div {...getRootProps()} onClick={() => {}} className='fixed inset-0  z-0 flex items-end justify-center '>
      <input {...getInputProps()} />
      {
        isDragActive ?
          (
            <div className='fixed inset-0 !z-10 bg-black/50 backdrop-blur-sm flex justify-center flex-col gap-5 items-center'>
                <File size={100} color='purple'/>
                <span className='font-semibold text-xl sm:text-5xl line-clamp-2 text-center'>
                    leave your file here  <br /> deepnox will catch it !
                </span>
            </div>
          ) :
          <p className='text-sm font-thin text-n-1/50'>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone;