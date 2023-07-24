import { useContext, useEffect, useState } from "react";
import { AgeDesContext } from "./context/AgeDescContext";
import { TechStackContext } from "./context/TechStackContext";
import MeWithLongHair  from "../../shared/images/Screenshot 2023-04-26 at 2.21.33 PM.png"
import { ContinueGeneratingArrow } from "./LandingPageSvgs/ContinueGeneratingArrow";
import { SvgComponent } from "../../shared/SvgComponent";
export const LandingPageGreeting = () => {
  const {isGreetingFinished} = useContext(AgeDesContext);
  const {setIsAgeLocationFinished} = useContext(TechStackContext);
  
  const [ahoyThereAnimation, setAhoyThereAnimation] = useState("");
  const [isAnimatedTextFinished, setIsAnimatedTextFinished] = useState(false);
  const [isAhoyThereDone, setIsAhoyThereDone] = useState(false);
  const [makeButtonDisappear, setMakeButtonDisappear] = useState(true);
  let ahoyThere = "While I'm an avid sports enthusiast, particularly enjoying basketball, football, and tennis, my true passion and where I invest the majority of my time is in the realm of software development. Balancing physical activities with cerebral challenges, I continue to expand my technical skillset, always staying at the forefront of the rapidly evolving tech industry. This unique blend of physical pursuits and intellectual dedication is the driving force behind my personal and professional growth."


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
        <h1 className = "justify-center sm:w-[300px] sm:h-auto">
          {ahoyThereAnimation}
        </h1>
        {isAnimatedTextFinished ?
          <img src={MeWithLongHair} alt="" className="w-[400px] h-[500px] rounded-md"/> : undefined
        }
      </div>

      {makeButtonDisappear && isAhoyThereDone ? 
        <div className="relative right-[20px] justify-center items-center my-10">

          <button className="flex flex-row text-xs p-2 items-center cursor-pointer rounded-md border border-white/20" onClick={buttonHandler}>
            <SvgComponent icon={ContinueGeneratingArrow}/>
            Continue Generating?
          </button>
          
        </div>
        :null
      }
    </div>

  )
}
