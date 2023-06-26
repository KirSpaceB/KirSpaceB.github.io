import { useState, useEffect } from "react"
interface IRenderName {
  isRender:boolean
};
export const LandingPageName = ({isRender}:IRenderName) => {
  let introduction = "Kirk Flores";
  const [animateText, setAnimateText] = useState("");

  useEffect(() => {
    if(isRender) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === introduction.length) {
            clearInterval(timer);
            return prevChar;
          }
          return prevChar + introduction.charAt(prevChar.length);
        });
      }, 300);
      return () => clearInterval(timer);
    }
  }, [isRender]);

  return (
    <>
    {isRender && 
      <h1 className="text-4xl">{animateText}</h1>    
    }
    </>
  )
}
