interface IIsLandingPageIntroductionDone {
  isLandingPageNameFinished:boolean
}

import { useContext } from "react"
import { LandingPageNameContext } from "./context/LandingPageNameContext";
import { useTriggerNextAnimation } from "../../shared/Hooks/useTriggerNextAnimation";

export const LandingPageName = ({isLandingPageNameFinished}:IIsLandingPageIntroductionDone) => {
  let introduction = "Kirk Flores";
  
  const {setIsLandingPageNameIntroductionFinished} = useContext(LandingPageNameContext);

  const {animatedText} = useTriggerNextAnimation({
    message:introduction,
    didPreviousAnimationFinish:isLandingPageNameFinished,
    triggerNextAnimation:() => setIsLandingPageNameIntroductionFinished(true)
  })

  return (
    <>
      {isLandingPageNameFinished && 
        <h1 className="text-4xl justify-center text-center sm:text-start sm:justify-start">
          {animatedText}
        </h1>    
      }
    </>
  )
}
