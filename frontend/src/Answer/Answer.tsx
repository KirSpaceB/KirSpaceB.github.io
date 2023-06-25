import { useState, useEffect } from "react";
import RobotLogo from "./images/robot-svgrepo-com.svg"
import { LanguageOptions } from "../LanguageOptions/LanguageOptions";
export const Answer = () => {
  let message = "Sure thing! Heres a developer I personally know that is really passionate and ambious in the field of programming, hes loves programming so much he does it for fun :D let me redirect you to his page PAWGERS";
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
    <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
      <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
        <div className="flex-shrink-0 flex flex-col relative items-end">
          <div className="w-[30px]">
            <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
              <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo" />
            </div>
          </div>
        </div>
        {animateText}
      </div>
      {isTextComplete &&
        <div className="flex flex-row p-4 items-center justify-center">
          <LanguageOptions/>
        </div>
      }

    </div>
  )
}
 