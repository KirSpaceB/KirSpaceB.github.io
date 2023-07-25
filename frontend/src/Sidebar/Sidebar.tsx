import { NewChat } from "./SidebarComponents/NewChat";
import { TodaySection } from "./SidebarComponents/TodaySection";
import { YesterdaySection } from "./SidebarComponents/YesterdaySection";
import { PastThirtyDaysSection } from "./SidebarComponents/PastThirtyDaysSection";
import { Footer } from "./SidebarComponents/Footer";
import { Projects } from "./ProjectSection/Projects";

export const Sidebar = () => {


  return (
    <nav className="hidden sm:flex flex-shrink-0 bg-[#252323] sm:relative sm:z-[10]">
      <div className="h-full w-[260px]">
        <div className="flex h-full min-h-0 flex-col">
          <nav className="flex h-full w-full flex-col p-2" aria-label="Chat History">
            <NewChat/> 
            <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto ">
              <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                <div>
                  <span>
                    <Projects/>
                    <TodaySection/>
                    <YesterdaySection/>
                    <PastThirtyDaysSection/>
                  </span>
                </div>
              </div>
            </div>
            <Footer/>
          </nav>
        </div>
      </div>
    </nav>
  );
}
