import { useContext, useEffect, useState } from "react";
import { LandingPageAgeLocationContext } from "./sharedcontext/LandingPageAgeLocationContext";
import { TechStackContext } from "./sharedcontext/TechStackContext";
import { RobotLogo } from "../techstackicons";
export const LandingPageAgeLocation = () => {
  const {isGreetingFinished} = useContext(LandingPageAgeLocationContext);
  const {setIsAgeLocationFinished} = useContext(TechStackContext);
  
  const [ageLocationAnimation, setAgeLocationAnimation] = useState("");

   let ageLocation = "21 Year Old Software Developer based in Southern California"
  useEffect(() => {
    if(isGreetingFinished) {
      const timer = setInterval(() => {
        setAgeLocationAnimation((prevChar) => {
          if(prevChar.length === ageLocation.length) {
            clearInterval(timer);
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
    <h1 className = "text-4xl">
      {ageLocationAnimation}
      <img src={RobotLogo} alt="" className="w-[300px] h-[300px] relative left-[300px]"/>

    </h1>
  )
}
