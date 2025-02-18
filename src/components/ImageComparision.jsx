import { useState } from "react";  
import {images} from '../constants/index.js'
import { curve, heroBackground } from "../assets/index.js";
import Section from "./Section.jsx";
import Button from "./Button.jsx";
  
export default function ImageComparison() {  
  const [index, setIndex] = useState(0);  
  const [score, setScore] = useState(0);  
  const [gameOver, setGameOver] = useState(false);  
  const [showPopup, setShowPopup] = useState(false);  
  const [correctAnswers, setCorrectAnswers] = useState(0); // Track correct answers
  
  const handleGuess = (guess) => {  
    if (images[index].isAI === guess) {  
      setScore(score + 1);  
      setCorrectAnswers(correctAnswers + 1);  // Increment correct answers
    }  

    if (index < images.length - 1) {  
      setIndex(index + 1);  
    } else {  
      setGameOver(true);  
      setShowPopup(true);  
    }  
  };  
  
  const closePopup = () => {  
    setShowPopup(false);  
  };  
  
  const restartGame = () => {  
    setScore(0);  
    setCorrectAnswers(0); 
    setIndex(0);  
    setGameOver(false);  
    setShowPopup(false);  
  };  
  
  const accuracy = ((correctAnswers / images.length) * 100).toFixed(2);  

  return (  
    <Section className="pt-[6.2rem] -mt-[5.98rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPadding>
      <div className="flex flex-col items-center justify-center min-h-screen  text-n-1 p-4">  
      {/* <div className="absolute opacity-40 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1500}
            alt="hero"
          />
        </div> */}
      {/* Heading and Intro */}  
      <div className="text-center mb-8">  
        <h1 className="text-5xl font-code font-bold text-white mb-4">AI or Not?</h1>  
        <h3 className="text-lg font-mono text-n-3">Can you tell the difference between AI-generated images and real images?</h3>  
      </div>  
  
      {/* Main Game Section */}  
      {!gameOver ? (  
        <div className=" p-6 bg-n-7 rounded-lg shadow-lg max-w-md w-full">  
          <div className="p-2">
            <img src={images[index]?.img} alt="image" className="w-full h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"/>
            <p></p>
          </div>  
          <div className="mt-4 flex justify-center space-x-6 p-3">  
            <Button onClick={() => handleGuess(true)} className={"text-lg"}>
              AI Generated
            </Button>  
            <Button onClick={() => handleGuess(false)} white className={"text-lg"}>
              Real Image
            </Button>
          </div>  
          <p className="mt-4 text-lg font-code text-n-1 font-bold text-center">Score: {score}</p>  
        </div>  
      ) : (  
        // // Game Over Section  
        // <div className="text-center">  
        //   <h2 className="text-3xl text-n-1 font-bold">Game Over!</h2>  
        //   <p className="text-xl text-n-1 mt-2">Your Final Score: {score}</p>  
        //   <button  
        //     onClick={() => setShowPopup(true)}  
        //     className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"  
        //   >  
        //     See Results  
        //   </button>  
        // </div>  
        ""
      )}  
  
      {/* Popup Modal for Results */}  
      {showPopup && (  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300">  
          <div className="bg-n-7 p-10 rounded-lg shadow-xl max-w-md w-full text-center animate_animated animate_fadeIn transform transition-transform duration-500 scale-105">  
            <h3 className="text-2xl font-semibold font-code text-n-1 mb-4">Game Over - Final Score</h3>  
            <p className="text-lg font-code text-n-1 mb-6">Your Final Score: {score}</p>  
            <p className="text-xl font-bold font-code text-n-1 mb-6">Accuracy: {accuracy}%</p>  {/* Accuracy display */}
            <div className="flex gap-8 items-center justify-center">
              <Button  onClick={restartGame} >
                Restart
              </Button> 
              <Button onClick={restartGame}>
                Close
              </Button> 
            </div>
          </div>  
        </div>  
      )}  
    </div> 
    </Section>
);
}