import { Sidebar } from "./Sidebar/Sidebar";
import { MainPage } from "./MainPage/MainPage";

const App = () => {
  return (
    <div className="overflow-hidden w-screen h-screen relative flex z-0">
      <Sidebar/>
      <MainPage/>
    </div>
  )
}

export default App
