import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";
import Notification from "./Notification";
import { VideoBar } from "./design/Services";
import { Link } from "react-router-dom";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8.2rem] -mt-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding
      id="hero"
    >
      <div
        className="px-10 lg:p-10 h-[70vh] items-center justify-center  lg:px-20 mb-30 grid grid-cols-1 lg:grid-cols-2 relative"
        ref={parallaxRef}
      >

        <div className="relative  z-1 max-w-[62re] mx-auto  mb-[4rem] md:mb-20 lg:mb-[6rem] flex flex-col items-center justify-center  w-full  h-full ">
          <h1 className="h1  mb-6 text-center ">
            Explore the <br /> Possibilities of&nbsp;Deepfake
            Detection&nbsp;with {` `}
            <span className="inline-block relative ">
              DEEP<span className="">N</span>Ox
              <img
                src={curve}
                width={624}
                height={28}
                className="absolute top-full left-0 w-full xl:-mt-2"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl text-center mx-auto text-n-2 lg:mb-8 mb-6">
            Unleash the power of AI to safeguard authenticity. Ensure trust and
            security with DeepNox, the ultimate deepfake detection tool.
          </p>

          <Link to={"/detection"}>
            <Button white>Get startxed</Button>
          </Link>
        </div>

        <div className=" h-full w-full z-1 flex items-center justify-center">
          MODEL
        </div>

        <div className="absolute opacity-50 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1500}
            alt="hero"
          />
        </div>
      </div>

      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl t">
          <div className="relative bg-n-12 rounded-[1rem]">
            <div className="aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] overflow-hidden lg:aspect-[900/490]">
              {/* <img src={""} className='h-full mx-auto w-auto object-contain' width={1024} height={490} alt='AI'/>  */}
              <VideoBar />
              {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -right-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((Icon, index) => (
                    <li className="p-5" key={index}>
                      <Icon size={20} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -left-[6.5rem] bottom-[17rem] w-[19rem] xl:flex"
                  title="Image Detection"
                />
              </ScrollParallax>
            </div>
          </div>
          {/* <Gradient/> */}
        </div>

        <BackgroundCircles />
      </div>
      <BottomLine />
    </Section>
  );
}

export default Hero;
