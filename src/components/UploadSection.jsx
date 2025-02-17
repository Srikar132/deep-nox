import { ArrowRight, Image, PlusIcon, UploadIcon, Video, X } from "lucide-react";
import GetFileModel from "./FileModel";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { heroIcons } from "../constants";

const UploadSection = ({ file, setFile , z }) => {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const [accept_types , setAcceptTypes] = useState([]);
  
    const sliderRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline({ repeat: -1, delay: 1 });
      const totalImages = heroIcons.length;
  
      heroIcons.forEach((_, index) => {
        tl.to(sliderRef.current, {
          x: `-${index * 100}%`,
          duration: 1,
          ease: "power2.inOut",
          delay: 1,
        });
      });
    }, [heroIcons]);
  
      const handleUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
      };
  
    const handleFileChange = (e) => {
      if (!e.target.files.length) return;
      const file = e.target.files[0];
      setFile(file);
    };

    useEffect(() => {
      const fn = (e) => {
        if (boxRef.current && !boxRef.current.contains(e.target)) {
            setOpen(false);
        }
      };
      document.addEventListener("mousedown" , fn);
      return () => {
        document.removeEventListener("mouseenter" , fn);
      }
    } , []);
  
    return (
      <div className={`${z} my-5 flex max-md:flex-col items-center  mx-auto gap-5 max-w-lg w-full md:min-h-80  justify-center p-5`}>
        <div
          id="opener"
          ref={boxRef}
          className={`rounded-xl cursor-pointer hover:scale-105   transition-all  duration-300 justify-center flex  ${
            open ? "w-96 h-44 max-sm:w-40 max-sm:h-60" : "w-40 h-40 hover:skew-y-2"
          }  glass relative`}
          onClick={() => setOpen(true)}
        >
          {open ? (
            <>
              <div className="grid grid-cols-1 max-md:p-2 md:grid-cols-2  w-full   gap-1">
                <button onClick={() => {
                  setAcceptTypes(["image/*"])
                  handleUploadClick();
                }} className="flex flex-col items-center justify-center rounded-xl gap-5 cursor-pointer scale-90  text-cyan-100 opacity-100 bg-black/10 transition-all duration-200 hover:scale-105 border-purple-300 hover:border hover:bg-n-7">
                  <Image color="purple" size={40} />
                  <span className="font-thin text-sm lowercase">
                    upload image
                  </span>
                </button>
                <button onClick={() => {
                  setAcceptTypes(["video/*"])
                  handleUploadClick();
                }} className="flex flex-col items-center justify-center rounded-xl gap-5 cursor-pointer scale-90  text-cyan-100 opacity-100 bg-black/10 transition-all duration-200 hover:scale-105 border-purple-300 hover:border hover:bg-n-7 border-cyan-500">
                  <Video color="cyan" size={40} />
                  <span className="font-thin text-sm lowercase">
                    upload video
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full overflow-hidden">
                <ul ref={sliderRef} className="flex  w-full h-full ">
                  {heroIcons.map((Icon, index) => (
                    <li
                      key={index}
                      className="w-full flex-shrink-0 flex items-center justify-center h-full"
                    >
                      <Icon size={30} />
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="absolute bottom-1 right-1 rounded-full glass p-px m-1  border button hover:bg-cyan-500/50 transition-color duration-500"
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}
        </div>
      
          <button
              onClick={() => {
                setAcceptTypes(["image/png","image/jpeg"]);
                handleUploadClick();
              }} 
              className="rounded-xl relative cursor-pointer flex-col w-40 h-40 glass bg-black flex items-center justify-center"
          >
              <PlusIcon size={50} />
  
              <div className="absolute bottom-2 w-[80%] rounded-full border border-n-1/50 text-xs flex justify-center items-center text-n-1/80 lowercase text-center font-thin">
              <UploadIcon size={10} />
                <span>upload asset</span>
              </div>
  
              <input
                onChange={handleFileChange}
                ref={inputRef}
                className="hidden"
                type="file"
                accept={accept_types}
              />
          </button>
       
  
      </div>
    );
  };

  export default UploadSection;