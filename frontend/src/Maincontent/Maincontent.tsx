
export const Maincontent = () => {
  return (
    <div className="flex flex-grow overflow-x-hidden bg-gray-500">
      <div className="flex h-full max-w-full flex-1 flex-col">
        <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
          <div className="flex-1 overflow-hidden">
            <div className="px-2 relative w-full flex flex-col h-full py-2 md:py-6">
              <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                <div className="relative flex flex-row rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900">
                  <ul className="flex flex-row w-full list-none gap-1 sm:w-auto">
                    <li className="group/toggle w-full">
                      <button className="w-full cursor-pointer">
                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                          <span className="relative max-[370px]:hidden">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 16 16" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 transition-colors text-brand-green" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z" fill="green" stroke="green"></path>
                            </svg>
                          </span>
                          <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                            GPT-3.5 :D
                          </span>
                        </div>
                      </button>
                    </li>
                    <li className="group/toggle w-full">
                      <button className="w-full cursor-pointer">
                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:bg-gray-900 dark:text-gray-100">
                          <span className="relative max-[370px]:hidden">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 16 16" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 transition-colors text-brand-green" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z" fill="purple" stroke="purple"></path>
                            </svg>
                          </span>
                          <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                            GPT 4.0 :D
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
