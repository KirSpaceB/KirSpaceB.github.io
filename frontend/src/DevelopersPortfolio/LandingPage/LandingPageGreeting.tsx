import { useContext, useEffect, useState } from "react";
import { AgeDesContext } from "./context/AgeDescContext";
import { TechStackContext } from "./context/TechStackContext";
import MeWithLongHair  from "../../shared/images/Screenshot 2023-04-26 at 2.21.33 PM.png"
import { ContinueGeneratingArrow } from "./LandingPageSvgs/ContinueGeneratingArrow";
export const LandingPageGreeting = () => {
  const {isGreetingFinished} = useContext(AgeDesContext);
  const {setIsAgeLocationFinished} = useContext(TechStackContext);
  
  const [ahoyThereAnimation, setAhoyThereAnimation] = useState("");
  const [isAnimatedTextFinished, setIsAnimatedTextFinished] = useState(false);
  const [isAhoyThereDone, setIsAhoyThereDone] = useState(false);
  const [makeButtonDisappear, setMakeButtonDisappear] = useState(true);
  let ahoyThere = "AHOY There! Here are some of my favorite hobbies and activities: Basketball, Football, Tennis, and any physical activity!"


  useEffect(() => {
    if(isGreetingFinished) {
      const timer = setInterval(() => {
        setAhoyThereAnimation((prevChar) => {
          if(prevChar.length === ahoyThere.length) {
            clearInterval(timer);
            setIsAnimatedTextFinished(true)
            setIsAhoyThereDone(true)
            return prevChar;
          }
          return prevChar + ahoyThere.charAt(prevChar.length);
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [isGreetingFinished]);

  const buttonHandler = () => {
    setIsAgeLocationFinished(true)
    setMakeButtonDisappear(false)
  };
  return (
    <div className="flex flex-col justify-center items-center space-x-16">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <h1 className = "justify-center text-center sm:w-[300px] sm:h-[100px]">
          {ahoyThereAnimation}
        </h1>
        {isAnimatedTextFinished ?
          <img src={MeWithLongHair} alt="" className="w-[400px] h-[500px] rounded-md"/> : undefined
        }
      </div>

      {makeButtonDisappear && isAhoyThereDone ? 
        <div className="relative right-[20px] justify-center items-center my-10">

          <button className="flex flex-row text-xs p-2 items-center cursor-pointer rounded-md border border-white/20" onClick={buttonHandler}>
            <ContinueGeneratingArrow/>
            Continue Generating?
          </button>
          
        </div>
        :null
      }
    </div>

  )
}
