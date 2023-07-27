import { useState, useEffect, useContext } from "react";
import { LandingPageNameContext } from "./context/LandingPageNameContext";
import { AgeDesContext } from "./context/AgeDescContext";
import { useTriggerNextAnimation } from "../../shared/Hooks/useTriggerNextAnimation";
export const LandingPageAgeDesc = () => {

  let greeting = "21yr. old software developer based in southern california.";
  let hobbies = "full-stack web development and passionately learning new technologies daily :D"
  const [animateTextHobbies, setAnimateTextHobbies] = useState("");
  const [isAnimateGreetingDone, setIsAnimateGreetingDone] = useState(false);

  const {isLandingPageNameIntroductionFinished} = useContext(LandingPageNameContext);
  const {setIsGreetingFinished} = useContext(AgeDesContext);

  const {animatedText} = useTriggerNextAnimation({
    message:greeting,
    didPreviousAnimationFinish:isLandingPageNameIntroductionFinished,
    triggerNextAnimation:() => setIsAnimateGreetingDone(true)
  })
  // How can we solve an edge case when were using mutltiple animations in one component??
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
      <p className="text-center justify-center sm:text-left sm:justify-start">{animatedText}</p>
      <p className="text-center justify-center sm:">{animateTextHobbies}</p>
    </>
  )
}
