interface IIsLandingPageIntroductionDone {
  isLandingPageIntroductionDone:boolean
}

import { useState, useEffect, useContext } from "react"
import { LandingPageNameContext } from "./context/LandingPageNameContext";

export const LandingPageName = ({isLandingPageIntroductionDone}:IIsLandingPageIntroductionDone) => {
  let introduction = "Kirk Flores";
  const [animateText, setAnimateText] = useState("");
  
  const {setIsLandingPageNameIntroductionFinished} = useContext(LandingPageNameContext);
  
  // The if statement causes a lot of problems when removed. The useTextAnimation does not have a feature to where it can take an if statement. So the best way to approach a fix is to create a hook that takes an if statement and does the same thing
  useEffect(() => {
    if(isLandingPageIntroductionDone) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === introduction.length) {
            clearInterval(timer);
            setIsLandingPageNameIntroductionFinished(true);
            return prevChar;
          }
          return prevChar + introduction.charAt(prevChar.length);
        });
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isLandingPageIntroductionDone]);

  return (
    <>
      {isLandingPageIntroductionDone && 
        <h1 className="text-4xl justify-center text-center sm:text-start sm:justify-start">{animateText}
        </h1>    
      }
    </>
  )
}
