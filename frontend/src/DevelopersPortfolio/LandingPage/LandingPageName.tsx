import { useState, useEffect, useContext } from "react"
import { IRendered } from "./sharedtypes/isRenderedType";
import { LandingPageNameContext } from "./sharedcontext/LandingPageNameContext";
export const LandingPageName = ({isRendered}:IRendered) => {
  let introduction = "Kirk Flores";
  const [animateText, setAnimateText] = useState("");
  
  const {setIsRendered} = useContext(LandingPageNameContext);
  

  useEffect(() => {
    if(isRendered) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === introduction.length) {
            clearInterval(timer);
            setIsRendered(true);
            return prevChar;
          }
          return prevChar + introduction.charAt(prevChar.length);
        });
      }, 300);
      return () => clearInterval(timer);
    }
  }, [isRendered]);

  return (
    <>
    {isRendered && 
      <h1 className="text-4xl">{animateText}</h1>    
    }
    </>
  )
}
