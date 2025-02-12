const RecognizeBtn = ({ onClick , disabled }) => (
    <div className="relative z-3 m-3 transition-border duration-300 group p-2  rounded-full">
      <button
        onClick={onClick}
        disabled={disabled}      
        className="px-8 z-10 cursor-pointer  py-3 rounded-full bg-white/10  backdrop-blur-lg text-white font-bold uppercase text-lg 
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.2),_2px_2px_5px_rgba(0,0,0,0.3)] 
              border border-white/20 hover:bg-white/20 transition"
      >
        Recognize
      </button>
  
      <div
        className={`${disabled && "hidden"} absolute opacity-40 z-1 w-[90%] h-[70%] filter blur-xl bg-gradient-to-r from-cyan-300 to-cyan-400 animate-pulse
              top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );


  export default RecognizeBtn;