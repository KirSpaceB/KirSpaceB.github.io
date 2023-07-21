
import { WebDesignSidebar } from "./WebDesignSidebar";
import { FullStackSidebar } from "./FullStackSidebar";

export const Projects = () => {

  return (
    <div className="relative h-auto opacity-1">
      <div className="sticky top-0 z-16 opacity-1">
        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323] border-white/20">
          Projects
        </h3>
      </div>
      <ol>
        <WebDesignSidebar/>
        <FullStackSidebar/>
      </ol>
    </div>
  )
}
