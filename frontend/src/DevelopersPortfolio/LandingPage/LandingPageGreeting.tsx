import { useContext, useEffect, useState } from "react";
import { LandingPageAgeLocationContext } from "./sharedcontext/LandingPageAgeLocationContext";
import { TechStackContext } from "./sharedcontext/TechStackContext";
import { RobotLogo } from "../techstackicons";
export const LandingPageGreeting = () => {
  const {isGreetingFinished} = useContext(LandingPageAgeLocationContext);
  const {setIsAgeLocationFinished} = useContext(TechStackContext);
  
  const [ageLocationAnimation, setAgeLocationAnimation] = useState("");
  const [isAnimatedTextFinished, setIsAnimatedTextFinished] = useState(false);

   let ageLocation = "AHOY There! Here are some of my favorite hobbies and activities: Basketball, Football, Tennis, and any physical activity!"
  useEffect(() => {
    if(isGreetingFinished) {
      const timer = setInterval(() => {
        setAgeLocationAnimation((prevChar) => {
          if(prevChar.length === ageLocation.length) {
            clearInterval(timer);
            setIsAnimatedTextFinished(true)
            setIsAgeLocationFinished(true)
            return prevChar;
          }
          return prevChar + ageLocation.charAt(prevChar.length);
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [isGreetingFinished]);
  return (
    <div className="flex flex-row justify-center items-center space-x-16">
      <h1 className = "text-m justify-center text-center">
        {ageLocationAnimation}
      </h1>
      {isAnimatedTextFinished ?
          <img src={RobotLogo} alt="" className="w-[300px] h-[300px] left-[300px]"/> : undefined      
        }
    </div>

  )
}
