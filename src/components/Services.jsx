import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {Gradient, PhotChatMessage, VideoBar, VideoChatMessage} from './design/Services'

function Services() {
  return (
    <Section id="how-to-use">
      <div className="container bg-n-8">
        <Heading
          title="DeepNox: Deepfake Detection for Digital Integrity"
          text="DeepNox: Unlock the Truth with AI-Powered Deepfake Detection"
        />
        <div className="relative">
          <div className="relative  z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 x:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={750}
                alt="Smartest-AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h-8 text-3xl mb-4 ">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                DeepNox unlocks the Truth with DeepFake Detection
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h-8 text-3xl mb-4 ">Image-Detection</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  DeepNox unlocks the Truth with DeepFake Detection
                </p>
              </div>
              <PhotChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                    <h4 className="h-4 mb-4">Video Detecting</h4>
                    <p className="body-2 mb-[2rem] text-n-3">DeepNox Video Detection
                        Detect deepfakes instantly by analyzing video frames with AI! 
                    </p>
                    <ul className="flex items-center justify-between">
                        {brainwaveServicesIcons.map((item,index) => (
                            <li key={index} className={`flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]":"flex w-10 h-10 bg-n-6 rounded-2xl md:w-15 md:h-15"}`}>
                                <div className={index === 2? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]':''}>
                                    <img src={item} width={24} height={24} alt="items"/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img src={service3} alt="" className="w-full h-full object-cover" width={520} height={400} />
                  <VideoChatMessage/>
                  <VideoBar />
                </div>
            </div>
          </div>
          <Gradient/>
        </div>
      </div>
    </Section>
  );
}

export default Services;
