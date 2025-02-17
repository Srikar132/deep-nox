import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import MyDropzone from "./DropZone";
import { Route, Routes, useNavigate } from "react-router-dom";
import Result from "./Result";
import UploadSection from "./UploadSection";
import RecognizeBtn from "./RecognizeBtn";
import BackgroundFilter from "./design/Detection";
import GetFileModel from "./FileModel";

function Detection() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [z , setzIndex] = useState("z-1");

  return (
    <>
      <Section
        className="pt-[5rem] custom-scroll sm:pt-[8.2rem] z-2 -mt-[5.4rem] h-screen overflow-scroll"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPadding
      >
        <div className="container sm:py-10 flex items-center justify-center flex-col overflow-y-scroll custom-scroll">
          <h1 className="h1 lg:text-8xl font-extrabold font-mono tracking-wider mb-5 pointer-events-none select-none">
            deepnox
          </h1>
          <p className="body-1 max-w-3xl text-center mx-auto text-n-1 font-code mb-3">
            Gen v1.1
          </p>

            {!!file ? (
              <div className="border rounded-xl p-[3px]
               before:contents   flex items-center relative overflow-hidden h-80 justify-center">
                  <div className="absolute -inset-64 bg-conic-gradient animate-spin  -z-1 rounded-xl"/>
                  <GetFileModel file={file} className={"h-full z-auto max-h-96 rounded-xl  max-w-md max-sm:max-w-xs w-auto "}/>
              </div>
            ) : (
              <UploadSection file={file} setFile={setFile} z={z}/>
            )}
            <RecognizeBtn onClick={() => navigate("/detection/result")} disabled={!!!file}/>
        </div>

        <MyDropzone setFile={setFile} setzIndex={setzIndex} />
      </Section>
      <BackgroundFilter />

      <Routes>
        <Route path='/result' element={<Result file={file}/>}/>
      </Routes>
    </>
  );
}

export default Detection;