import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";
import { MainPageContextProvider } from "./MainPage/context/MainPageContext";
import { WebDesignSectionContextProvider } from "./Sidebar/Context/WebDesignSectionContext/WebDesignSectionContext";
import { FullStackSectionContextProvider } from "./Sidebar/Context/FullStackSection/FullStackSection";

const App = () => {
  return (
    <FullStackSectionContextProvider>
      <WebDesignSectionContextProvider>
        <MainPageContextProvider>
          <div className="flex overflow-x-hidden w-screen h-screen">
            <Sidebar/>
            <MainPage/>
          </div>
        </MainPageContextProvider>
      </WebDesignSectionContextProvider>
    </FullStackSectionContextProvider>
  )
}

export default App
