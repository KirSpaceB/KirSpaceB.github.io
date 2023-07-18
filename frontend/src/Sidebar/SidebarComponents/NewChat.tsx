import { PlusSign } from "../svg/PlusSign"
export const NewChat = () => {
  return (
    <div className="mb-1 flex flex-row gap-2">
      <a 
        href="" 
        className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow"
      >
        <PlusSign/>
        New Chat
      </a>
      <span>
        <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 items-center justify-center bg-[#252323] w-full">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height={"18"} rx={"2"} ry={"2"}>
            </rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </a>
      </span>
    </div>
  )
}
