import { Maincontent } from "./MainContent/Maincontent";
import { Sidebar } from "./Sidebar/Sidebar";

const App = () => {


  return (
    <div className="overflow-hidden w-screen h-screen relative flex z-0">
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

export default App
