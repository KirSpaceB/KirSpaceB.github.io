import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";
import { MainPageContextProvider } from "./MainPage/context/MainPageContext";
import { WebDesignSectionContextProvider } from "./Sidebar/Context/WebDesignSectionContext/WebDesignSectionContext";
import { FullStackSectionContextProvider } from "./Sidebar/Context/FullStackSection/FullStackSection";
import { FullStackLandingPageContextProvider } from "./FullStackLandingPage/FullStackLandingPageContext";
import { WebDesingLandingPageProvider } from "./WebDesignLandingPage/WebDesignLandingPageContext";

const App = () => {
  return (
    <WebDesingLandingPageProvider>
      <FullStackLandingPageContextProvider>
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
      </FullStackLandingPageContextProvider>
    </WebDesingLandingPageProvider>
  )
}

export default App
