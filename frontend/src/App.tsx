import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";
import { MainPageContextProvider } from "./MainPage/context/MainPageContext";

const App = () => {
  return (
    <MainPageContextProvider>
      <div className="flex overflow-x-hidden w-screen h-screen">
        <Sidebar/>
        <MainPage/>
      </div>
    </MainPageContextProvider>
  )
}

export default App
