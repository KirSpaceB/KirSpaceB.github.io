import RobotLogo from "../../shared/images/robot-svgrepo-com.svg";
import { useState, useEffect } from "react";
import { TechStackPage } from "../TechStackPage";
import { LandingPageName } from "./LandingPageName";
import { LandingPageAgeDesc } from "./LandingPageAgeDesc";
import { LandingPageNameContextProvider } from "./context/LandingPageNameContext";
import { LandingPageAgeLocationContextProvider } from "./context/AgeDescContext";
import { ProjectPageContextProvider } from "./context/ProjectPageContext";
import { LandingPageGreeting } from "./LandingPageGreeting";
import { TechStackContextProvider } from "./context/TechStackContext";
import { ProjectPage } from "../ProjectPage/ProjectPage";
import useTextAnimation from "../../shared/Hooks/useTextAnimation";
import { RobotLogoComponent } from "../../ReusedStyleComponents/RobotLogoComponent";

export const LandingPage = () => {

  let introduction = "Here is an introduction of who he is and some of his hobbies.";

  const [isTextComplete, setIsTextComplete] = useState(false);

  const {animatedText} = useTextAnimation({
    message:introduction,
    callbackFnForDestructContext: () => setIsTextComplete(true)
  })

  return (
    <ProjectPageContextProvider>
      <TechStackContextProvider>
        <LandingPageAgeLocationContextProvider>
          <LandingPageNameContextProvider>
            <div className="flex flex-col w-full h-full space-y-4 text-gray-800 dark:text-gray-100 border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654] overflow-x-auto">

              <div>
                <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
                  <RobotLogoComponent/>
                  {animatedText}
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
