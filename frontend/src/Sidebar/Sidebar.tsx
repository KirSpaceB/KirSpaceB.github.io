

export const Sidebar = () => {


  return (
    <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900">
      <div className="h-full w-[240px]">
        <div className="flex h-full min-h-0 flex-col">
          <nav className="flex h-full w-full flex-col p-2" aria-label="Chat History">
            <div className="mb-1 flex flex-row gap-2">
              <a href="" className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow ">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Chat
              </a>
              <span>
                <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height={"18"} rx={"2"} ry={"2"}>
                    </rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  
                </a>
              </span>
            </div>
          </nav>
        </div>
      </div>

    </div>
  );
}
