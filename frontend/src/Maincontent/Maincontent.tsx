import { useState, useEffect } from "react";

export const Maincontent = () => {
  const [text,setText] = useState("");
  const message = "Where can I find a good developer?";
  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => {
        // If all characters have been added, stop the interval
        if (prevText.length === message.length) {
          clearInterval(timer);
          return prevText;
        }
        // Add the next character from the message
        return prevText + message.charAt(prevText.length);
      });
    }, 50); // adjust the speed of typing here
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-grow overflow-x-hidden bg-[#373b46]">
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
              <h1 className="text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">
                ChatGPT
                <span className="bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase">Plus</span>
              </h1>
            </div>
          </div>
          <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl" action="">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
              <div className="flex flex-row bg-[#2d3444] w-[650px] h-[50px] rounded-lg">
                <input value={text} className="w-full bg-[#2d3444] rounded-lg h-full placeholder:pl-4 pl-4" placeholder="Send Message">
                </input>
                <button className=" p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40">
                  <span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 16 16" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 transition-colors text-brand-green" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="gray" stroke="gray"></path>
                  </svg>
                  </span>
                </button>
              </div>
              <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3">
                <span>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</span>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
