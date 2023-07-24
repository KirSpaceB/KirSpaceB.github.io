import { Answer } from "../Answer/Answer";
import { OnLoadUI } from "./OnLoadUIFolder/OnLoadUI";
import { MainPageContext } from "./context/MainPageContext";
import { WebDesignSectionContext } from "../Sidebar/Context/WebDesignSectionContext/WebDesignSectionContext";
import { useContext, useEffect } from "react";
import { WebDesignLandingPage } from "../WebDesignLandingPage/WebDesignLandingPage";
import { FullStackLandingPage } from "../FullStackLandingPage/FullStackLandingPage";
import { FullStackSectionContext } from "../Sidebar/Context/FullStackSection/FullStackSection";

export const MainPage = () => {
  // context
  const mainPageContext = useContext(MainPageContext);
  const {isOnLoadUIFinished} = mainPageContext;
  const {didUserClickWebDesign} = useContext(WebDesignSectionContext)
  const {didUserClickFullStackSection} = useContext(FullStackSectionContext)

  useEffect(() => {
    console.log("🚀 ~ file: MainPage.tsx:9 ~ MainPage ~ isOnLoadUIFinished:", isOnLoadUIFinished)
  }, [isOnLoadUIFinished])
  
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#373b46]">
      {
        didUserClickWebDesign ?
          <WebDesignLandingPage/>
        :
        didUserClickFullStackSection ? 
          <FullStackLandingPage/>
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