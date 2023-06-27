import { useContext, useEffect, useState } from "react";
import { LandingPageAgeLocationContext } from "./sharedcontext/LandingPageAgeLocationContext";
export const LandingPageAgeLocation = () => {
  const {isGreetingFinished} = useContext(LandingPageAgeLocationContext);
  
  const [ageLocationAnimation, setAgeLocationAnimation] = useState("");
  let ageLocation = "21 Year Old Software Developer based in Southern California"
  useEffect(() => {
    if(isGreetingFinished) {
      const timer = setInterval(() => {
        setAgeLocationAnimation((prevChar) => {
          if(prevChar.length === ageLocation.length) {
            clearInterval(timer);
            return prevChar;
          }
          return prevChar + ageLocation.charAt(prevChar.length);
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isGreetingFinished]);
  return (
    <h1 className = "text-4xl">
      {ageLocationAnimation}
    </h1>
  )
}
