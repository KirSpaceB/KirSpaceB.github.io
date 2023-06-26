import { useState, useEffect } from "react";
import { RobotLogo, TypeScriptLogo, JavaScriptLogo, MySQLIcon, ReactIcon, JestIcon, PythonIcon, TailwindIcon, CSharpIcon, AWSIcon, JqueryIcon, BootstrapIcon, VITEIcon, FlaskIcon, HTMLIcon } from "./techstackicons";

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
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row"></div>
          <div className="flex flex-row w-[48px] h-[48px]">
            <img src={JavaScriptLogo}></img>
            <img src={ReactIcon}></img>
            <img src={TypeScriptLogo}></img>
            <img src={JqueryIcon}></img>
            <img src={HTMLIcon}></img>
            <img src={BootstrapIcon}></img>
            <img src={TailwindIcon}></img>
          </div>
          <div className="flex flex-row w-[48px] h-[48px]">
            <img src={PythonIcon}></img>
            <img src={FlaskIcon}></img>
            <img src={CSharpIcon}></img>
          </div>
          <div className="flex flex-row w-[48px] h-[48px]">
            <img src={MySQLIcon}></img>
            <img src={JestIcon}/>
            <img src={VITEIcon}/>
            <img src={AWSIcon}/>
          </div>
      </div>
    </div>
  )
}
