import RobotLogo from "../../shared/images/robot-svgrepo-com.svg";
import { useState, useEffect } from "react";
import { TechStackPage } from "../TechStackPage";
import { LandingPageName } from "./LandingPageName";
import { LandingPageAgeDesc } from "./LandingPageAgeDesc";
import { LandingPageNameContextProvider } from "./sharedcontext/LandingPageNameContext";
import { LandingPageAgeLocationContextProvider } from "./sharedcontext/AgeDescContext";
import { ProjectPageContextProvider } from "./sharedcontext/ProjectPageContext";
import { LandingPageGreeting } from "./LandingPageGreeting";
import { TechStackContextProvider } from "./sharedcontext/TechStackContext";
import { ProjectPage } from "../ProjectPage/ProjectPage";
export const LandingPage = () => {

  let introduction = "Here is a personal introduction of who he is! :D";
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
    <ProjectPageContextProvider>
      <TechStackContextProvider>
        <LandingPageAgeLocationContextProvider>
          <LandingPageNameContextProvider>
            <div className="flex flex-col w-full h-full space-y-4 text-gray-800 dark:text-gray-100 border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">


              <div>
                <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto"
                >
                  <div className="w-[30px]">
                    <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
                      <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
                    </div>
                  </div>
                  {animateText}
                </div>
              </div>


              <div className="flex flex-col items-center">
                <div>
                  <LandingPageName isRendered={isTextComplete}/>
                  <LandingPageAgeDesc/>
                </div>

              </div>

              <div>
                <LandingPageGreeting/>
              </div>


                  <TechStackPage/>

                  <ProjectPage/>

            </div>
          </LandingPageNameContextProvider>
        </LandingPageAgeLocationContextProvider>
      </TechStackContextProvider>
    </ProjectPageContextProvider>
  )
}
