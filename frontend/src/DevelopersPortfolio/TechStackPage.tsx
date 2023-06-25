import { useState, useEffect } from "react";
import RobotLogo from "../shared/images/robot-svgrepo-com.svg"
import TypeScriptLogo from "./techstackicons/typescriptlogo.svg";
import JavaSrciptLogo from "./techstackicons/javascriptlogo.svg"
export const TechStackPage = () => {
  let introduction = "These are the technologies I know and have used before :3";
  const [animateText, setAnimateText] = useState("");
  const [isTextComplete, setIsTextComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateText((prevChar) => {
        if(prevChar.length === introduction.length) {
          clearInterval(timer);
          setIsTextComplete(true)
          return prevChar;
        }
        return prevChar + introduction.charAt(prevChar.length);
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);  

  return (
    <div className="w-full text-gray-800 dark:text-gray-100 border-b dark:border-gray-900/50 dark:bg-[#444654]">
      <div className="flex p-4 gap-4 text-base ">
        <div className="flex-shrink-0 flex flex-col">
          <div className="w-[30px]">
            <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
              <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
            </div>
          </div>
        </div>
        {animateText}
      </div>
      <div className="flex flex-row">
        <img src={TypeScriptLogo}></img>
        <img src={JavaSrciptLogo}></img>

      </div>
    </div>
  )
}
