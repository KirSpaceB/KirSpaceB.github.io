import SideBarProfile from "../Sidebar/SideBarImages/Sidebarprofile.png"
import Resume from "../../public/Resume.pdf"
export const Sidebar = () => {


  return (
    <div className="dark flex-shrink-0 bg-[#252323]">
      <div className="h-full w-[260px]">
        <div className="flex h-full min-h-0 flex-col">
          <nav className="flex h-full w-full flex-col p-2" aria-label="Chat History">
            <div className="mb-1 flex flex-row gap-2">
              <a href="" className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow ">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
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

            <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto ">
              <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                <div>
                  <span>
                    <div className="relative h-auto opacity-1">
                      <div className="sticky top-0 z-16 opacity-1">
                        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323] border-white/20">
                          Today
                        </h3>
                      </div>
                      <ol>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" download href={Resume}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>
                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              Resume
                            </div>
                          </a>
                        </li>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" href="https://www.linkedin.com/in/kirk-flores-a24875259/" target="_blank">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>
                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              LinkedIn
                            </div>
                          </a>
                        </li>
                      </ol>
                    </div>
                    <div className="relative h-auto opacity-1">
                      <div className="sticky top-0 z-16 opacity-1">
                        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323]">
                          Yesterday
                        </h3>
                      </div>
                      <ol>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" href="https://github.com/KirSpaceB" target="_blank">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>
                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              GitHub
                            </div>
                          </a>
                        </li>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" href="https://www.youtube.com/watch?v=Pu7fn9chuA4" target="_blank">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>

                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              How to increase vertical
                            </div>
                            
                          </a>
                        </li>
                      </ol>
                    </div>
                    <div className="relative h-auto opacity-1">
                      <div className="sticky top-0 z-16 opacity-1">
                        <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-[#252323]">
                          Past 30 days
                        </h3>
                      </div>
                      <ol>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>
                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              Twitter(WIP)
                            </div>
                          </a>
                        </li>
                        <li className="relative z-[15] opacity-1 h-auto ">
                          <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-[#252323] group" href="https://stackoverflow.com/questions/356809/best-way-to-center-a-div-on-a-page-vertically-and-horizontally" target="_blank">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                              </path>
                            </svg>
                            <div className="flex-1 truncate relative max-h-20 break-normal text-xs">
                              How to center div
                            </div>
                          </a>
                        </li>
                      </ol>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-2 empty:hidden">
              <div className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800">
                <img src={SideBarProfile} alt="Not working" className="w-[22px] relative" />
                <div className="text-white text-[12px] relative left-0">John Doe</div>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-gray-500 relative left-[80px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
