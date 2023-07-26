import { useState } from "react";
import useTextAnimation from "../shared/Hooks/useTextAnimation";
import { RobotLogoComponent } from "../ReusedStyleComponents/RobotLogoComponent";
import { LandingPage } from "../MainLandingPage/LandingPage/LandingPage";

export const Answer = () => {
  // #TODO: #11 - Encapsulate this into a hook
  let message = "Sure thing! I know just the right developer who is hard working, focused, creative and passionate about technology!";
  const [isTextComplete, setIsTextComplete] = useState(false);
  

  const {animatedText} = useTextAnimation({
    message,
    callbackFnForDestructContext:() => setIsTextComplete(true),
  })

  return (
    <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654] relative">

      <div className="flex p-4 gap-4 text-base md:gap-6 sm:max-w-3xl sm:py-6 sm:px-0 m-auto">
        <RobotLogoComponent/>
        {animatedText}
      </div>

      {isTextComplete &&
        <div className="flex flex-col justify-center w-full h-full text-gray-800 dark:text-gray-100 border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
          <LandingPage/>
        </div>
      }
    </div>
  )
}
 