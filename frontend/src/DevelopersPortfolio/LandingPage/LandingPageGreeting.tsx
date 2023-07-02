import { useContext, useEffect, useState } from "react";
import { AgeDesContext } from "./sharedcontext/AgeDescContext";
import { TechStackContext } from "./sharedcontext/TechStackContext";
import MeWithLongHair  from "../../shared/images/Screenshot 2023-04-26 at 2.21.33 PM.png"
export const LandingPageGreeting = () => {
  const {isGreetingFinished} = useContext(AgeDesContext);
  const {setIsAgeLocationFinished} = useContext(TechStackContext);
  
  const [ageLocationAnimation, setAgeLocationAnimation] = useState("");
  const [isAnimatedTextFinished, setIsAnimatedTextFinished] = useState(false);
  const [isAhoyThereDone, setIsAhoyThereDone] = useState(false);
  const [makeButtonDisappear, setMakeButtonDisappear] = useState(true);
  let ahoyThere = "AHOY There! Here are some of my favorite hobbies and activities: Basketball, Football, Tennis, and any physical activity!"


  useEffect(() => {
    if(isGreetingFinished) {
      const timer = setInterval(() => {
        setAgeLocationAnimation((prevChar) => {
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
      <div className="flex flex-row items-center">
        <h1 className = "w-[300px] h-[100px]">
          {ageLocationAnimation}
        </h1>
        {isAnimatedTextFinished ?
          <img src={MeWithLongHair} alt="" className="w-[400px] h-[500px] rounded-md"/> : undefined      
        }
      </div>

      {makeButtonDisappear && isAhoyThereDone ? 
        <div className="flex items-center justify-center my-10">

          <button className="flex flex-row text-xs p-2 items-center cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h10" onClick={buttonHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="gray" />
            </svg>
            Continue Generating?
          </button>
          
        </div>
        :null
      }
    </div>

  )
}
