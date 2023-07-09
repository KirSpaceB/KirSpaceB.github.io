import { useState, useEffect, useContext } from "react";
import { LandingPageNameContext } from "./sharedcontext/LandingPageNameContext";
import { AgeDesContext } from "./sharedcontext/AgeDescContext";
export const LandingPageAgeDesc = () => {

  let greeting = "21yr. old software developer based in southern california.";
  let hobbies = "full-stack development, gis-development, currently working on .NET Application with C# :D"
  const [animateTextGreeting, setAnimateTextGreeting] = useState("");
  const [animateTextHobbies, setAnimateTextHobbies] = useState("");
  const [isAnimateGreetingDone, setIsAnimateGreetingDone] = useState(false);

  const {isRendered} = useContext(LandingPageNameContext);
  const {setIsGreetingFinished} = useContext(AgeDesContext);

  // Only trigger this useEffect hook if componentOne is done animating!
  useEffect(() => {
    if(isRendered) {
      const timer = setInterval(() => {
        setAnimateTextGreeting((prevChar) => {
          if(prevChar.length === greeting.length) {
            clearInterval(timer);
            setIsAnimateGreetingDone(true)
            return prevChar;
          }
          return prevChar + greeting.charAt(prevChar.length);
        });
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isRendered]);

  useEffect(() => {
    if(isAnimateGreetingDone) {
      const timer = setInterval(() => {
        setAnimateTextHobbies((prevChar) => {
          if(prevChar.length === hobbies.length) {
            clearInterval(timer);
            setIsGreetingFinished(true)
            return prevChar;
          }
          return prevChar + hobbies.charAt(prevChar.length);
        });
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isAnimateGreetingDone]);

  return (
    <>
      <p>{animateTextGreeting}</p>
      <p>{animateTextHobbies}</p>
    </>
  )
}
