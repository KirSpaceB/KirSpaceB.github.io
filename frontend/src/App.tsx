import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";
import { MainPageContextProvider } from "./MainPage/context/MainPageContext";
import { FrontendSectionContextProvider } from "./Sidebar/SidebarComponents/FrontendSectionContext/Context";
import { FullStackSectionContextProvider } from "./Sidebar/SidebarComponents/FullStackSectionContext/FullStackSectionContext";

const App = () => {
  return (
    <FullStackSectionContextProvider>
      <FrontendSectionContextProvider>
        <MainPageContextProvider>
          <div className="flex overflow-x-hidden w-screen h-screen">
            <Sidebar/>
            <MainPage/>
          </div>
        </MainPageContextProvider>
      </FrontendSectionContextProvider>
    </FullStackSectionContextProvider>
  )
}

export default App
