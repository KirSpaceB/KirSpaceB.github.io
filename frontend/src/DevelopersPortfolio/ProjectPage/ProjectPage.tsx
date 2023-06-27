import { useState, useEffect, useContext } from "react";
import { ProjectPageContext } from "../LandingPage/sharedcontext/ProjectPageContext";
import { RobotLogo } from "../techstackicons";
export const ProjectPage = () => {
  const {isTechStackFinished} = useContext(ProjectPageContext);
  let animatedText = "These are my projects that I worked very hard ON :D";
  const [animateText, setAnimateText] = useState("");

  useEffect(() => {
    if(isTechStackFinished) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === animatedText.length) {
            clearInterval(timer);
            return prevChar
          };
          return prevChar + animatedText.charAt(prevChar.length);
        });
      }, 30)
      return () => clearInterval(timer)
    }
  },[isTechStackFinished])
  return (
    <>
    {isTechStackFinished && 
      <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">

        <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div className="w-[30px]">
              <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
                <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
              </div>
            </div>
          </div>
          {animateText}
        </div>

      </div>    
    }

    </>
  )
}
