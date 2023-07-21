import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";
import { MainPageContextProvider } from "./MainPage/context/MainPageContext";
import { FrontendSectionContextProvider } from "./Sidebar/SidebarComponents/FrontendSectionContext/FrontendSectionContext";
import { BackendSectionContextProvider } from "./Sidebar/SidebarComponents/BackendSectionContext/BackendSectionContext";

const App = () => {
  return (
    <BackendSectionContextProvider>
      <FrontendSectionContextProvider>
        <MainPageContextProvider>
          <div className="flex overflow-x-hidden w-screen h-screen">
            <Sidebar/>
            <MainPage/>
          </div>
        </MainPageContextProvider>
      </FrontendSectionContextProvider>
    </BackendSectionContextProvider>
  )
}

export default App
