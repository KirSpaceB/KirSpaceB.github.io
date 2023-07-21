import { Answer } from "../Answer/Answer";
import { OnLoadUI } from "./OnLoadUIFolder/OnLoadUI";
import { MainPageContext } from "./context/MainPageContext";
import { FrontendSectionContext } from "../Sidebar/Context/FrontendSectionContext/FrontendSectionContext";
import { BackendSectionContext } from "../Sidebar/Context/BackendSectionContext/BackendSectionContext";

import { useContext, useEffect } from "react";
import { FrontendLandingPage } from "../Sidebar/ProjectSection/FrontendLandingPage";
import { BackendLandingPage } from "../Sidebar/ProjectSection/BackendLandingPage";

export const MainPage = () => {
  // context
  const mainPageContext = useContext(MainPageContext);
  const {isOnLoadUIFinished} = mainPageContext;
  const {didUserClickFrontend} = useContext(FrontendSectionContext)
  const {didUserClickBackendSection} = useContext(BackendSectionContext)

  useEffect(() => {
    console.log("🚀 ~ file: MainPage.tsx:9 ~ MainPage ~ isOnLoadUIFinished:", isOnLoadUIFinished)
  }, [isOnLoadUIFinished])
  
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#373b46]">
      {
        didUserClickFrontend ? 
          <div>
            <FrontendLandingPage/>
          </div>
        :
        didUserClickBackendSection ? 
          <div>
            <BackendLandingPage/>
          </div>
          :
          isOnLoadUIFinished ?
            <div className="overflow-y-scroll w-screen h-screen">
              <Answer/> 
            </div>
            :
            <div className="flex flex-1 flex-col justify-center items-center sm:relative sm:z-9">
              <OnLoadUI/>
            </div>
      }
    </div>
  )
}