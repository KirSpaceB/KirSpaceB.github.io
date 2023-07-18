import { Answer } from "../Answer/Answer";
import { OnLoadUI } from "./OnLoadUI";

import { MainPageContext } from "./context/MainPageContext";
import { useContext, useEffect } from "react";
export const MainPage = () => {
  const mainPageContext = useContext(MainPageContext);
  const {isOnLoadUIFinished} = mainPageContext;

  useEffect(() => {
    console.log("🚀 ~ file: MainPage.tsx:9 ~ MainPage ~ isOnLoadUIFinished:", isOnLoadUIFinished)
  }, [isOnLoadUIFinished])
  
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#373b46]">
      {isOnLoadUIFinished ?
        <div className="overflow-y-scroll w-screen h-screen">
          <Answer/> 
        </div>
        :
        <div className="flex flex-1 flex-col justify-center items-center sm:relative sm:right-[120px] sm:z-9">
          <OnLoadUI/>
        </div>
      }
    </div>
  )
}