import { useState, useEffect, useContext } from "react";
import { LandingPageNameContext } from "./sharedcontext/LandingPageNameContext";
import { LandingPageAgeLocationContext } from "./sharedcontext/LandingPageAgeLocationContext";
export const LandingPageGreeting = () => {

  let greeting = "AHOY THERE!";
  let hobbies = "My Favorite hobbies are: Basketball, Football, Tennis, Hiking, and any physical activity :D "
  const [animateTextGreeting, setAnimateTextGreeting] = useState("");
  const [animateTextHobbies, setAnimateTextHobbies] = useState("");
  const [isAnimateGreetingDone, setIsAnimateGreetingDone] = useState(false);

  const {isRendered} = useContext(LandingPageNameContext);
  const {setIsGreetingFinished} = useContext(LandingPageAgeLocationContext);

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
      }, 10);
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
