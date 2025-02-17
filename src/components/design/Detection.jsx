const BackgroundFilter = () => (
    <div className="z-0  fixed inset-0 backdrop-blur-2xl bg-gradient-to-br from-[#0a141e]  to-[#0a141e]">
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-90 animate-blob" />
  
      <div className="absolute bottom-20 right-1  md:w-44 md:h-44 max-sm:w-20 max-sm:h-20 lg:w-72 lg:h-72 bg-conic-gradient  rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-blob" />
  
      <div className="absolute top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2  md:w-44 md:h-44 max-sm:w-20 max-sm:h-20 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-blue-500 via-cyan-300 to-cyan-700 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob" />
  
      <div className="absolute bottom-10 left-1 pointer-events-none md:left-1/4  md:w-48 md:h-48 max-sm:w-24 max-sm:h-24 lg:w-80 lg:h-80   bg-cyan-500 rounded-full mix-blend-screen filter blur-[140px] opacity-70 animate-blob" />
    </div>
  );

  export default BackgroundFilter;

  