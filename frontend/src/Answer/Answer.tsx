import { useState, useEffect } from "react";
import RobotLogo from "../shared/images/robot-svgrepo-com.svg"
import { LanguageOptions } from "../LanguageOptions/LanguageOptions";

export const Answer = () => {
  // #TODO: #11 - Encapsulate this into a hook
  let message = "Sure thing! I know just the right developer who is hard working, focused, creative and passionate about technology! Please select the language in which you want me to introduce him in.";
  const [animateText, setAnimateText] = useState("");
  const [isTextComplete, setIsTextComplete] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateText((prevChar) => {
        if(prevChar.length === message.length) {
          clearInterval(timer);
          setIsTextComplete(true)
          return prevChar;
        }
        return prevChar + message.charAt(prevChar.length);
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654] relative ">
      <div className="flex p-4 gap-4 text-base md:gap-6 sm:max-w-3xl sm:py-6 sm:px-0 m-auto">
        <div className="flex-shrink-0 flex flex-col items-end">
          <div className="w-[30px]">
            <div className=" p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
              <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
            </div>
          </div>
        </div>
        {animateText}
      </div>
      {isTextComplete &&
        <div className="flex flex-col justify-center w-full h-full text-gray-800 dark:text-gray-100 border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
          <LanguageOptions/>
        </div>
      }
    </div>
  )
}
 