import { Sidebar } from "./Sidebar/Sidebar";
import { MainContent } from "./MainContent/MainContent";

const App = () => {
  return (
    <div className="overflow-hidden w-screen h-screen relative flex z-0">
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
