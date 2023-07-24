import { useState, useEffect, useContext } from "react";
import { ProjectPageContext } from "../LandingPage/context/ProjectPageContext";
import { RobotLogo } from "../techstackicons";

export const ProjectPage = () => {
  const {isTechStackFinished} = useContext(ProjectPageContext);
  let animatedText = "If you're interested in delving deeper into the detailed aspects of his various projects, you'll find that we've conveniently placed them within reach. They're readily accessible in the sidebar section of the webpage. We encourage you to explore this section as it is abundantly populated with the fruits of his technical prowess. There you will find a meticulous catalog of his work that showcases the breadth and depth of his skills. So, go ahead and immerse yourself in the remarkable projects on display. You might be pleasantly surprised by the innovation and technical acuity that you'll discover there. Happy exploring!";
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
      }, 20)
      return () => clearInterval(timer)
    }
  },[isTechStackFinished])
  return (
    <>
    {isTechStackFinished && 
      <>
        <div className="flex flex-col">
          <div className="group w-full text-gray-800 dark:text-gray-100">
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
          </div>
        </div>
      </>
    }

    </>
  )
}
