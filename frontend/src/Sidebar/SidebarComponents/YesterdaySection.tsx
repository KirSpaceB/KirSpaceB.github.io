
export const YesterdaySection = () => {
  return (
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
  )
}
