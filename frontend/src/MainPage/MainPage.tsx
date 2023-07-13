import { useState, useEffect } from "react";
import { Answer } from "../Answer/Answer";
import { GPT3Logo } from "./svg/GPT3Logo";
import { GPT4Logo } from "./svg/GPT4Logo";

export const MainPage = () => {
  const [text,setText] = useState("");
  // When this is set to true we render a new component
  const [addToMainContext, setAddToMainContext] = useState(false)

  const message = "Where can I find a young, hard working, and passionate developer?";

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => {
        // If all characters have been added, stop the interval
        if (prevText.length === message.length) {
          clearInterval(timer);
          setAddToMainContext(true)
          return prevText;
        }
        // Add the next character from the message
        return prevText + message.charAt(prevText.length);
      });
    }, 35); // adjust the speed of typing here
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    console.log(addToMainContext)
  },[addToMainContext])

  return (
    <div className="flex flex-grow bg-[#373b46]">
      <div className="flex h-full max-w-full flex-1 flex-col">
        <main className="relative h-full w-full transition-width flex flex-col overflow-y-auto items-stretch flex-1">
          <div className="flex-1">
            <div className="px-2 relative w-full flex flex-col h-full py-2 md:py-6">
              <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                {!addToMainContext && 
                  <div className="relative flex flex-row rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900">
                    <ul className="flex flex-row w-full list-none gap-1 sm:w-auto">
                      <li className="group/toggle w-full">
                        <button className="w-full cursor-pointer">
                          <div
                           className=" flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                            <span className="relative max-[370px]:hidden">
                              <GPT3Logo/>
                            </span>
                            <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                              GPT-3.5 :D
                            </span>
                          </div>
                        </button>
                      </li>
                      <li className="group/toggle w-full">
                        <button className="w-full cursor-pointer">
                          <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:bg-gray-900 dark:text-gray-100"
                          >
                            <span className="relative max-[370px]:hidden">
                              <GPT4Logo/>
                            </span>
                            <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                              GPT 4.0 :D
                            </span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                }
              </div>
              {!addToMainContext &&
                <h1 className="text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">
                  ChatGPT
                  <span className="bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase">Plus</span>
                </h1>
              }
              {addToMainContext ? <Answer/> : null }
            </div>
          </div>
          <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl" action="">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
              <div className="flex flex-row bg-[#2d3444] w-[650px] h-[50px] rounded-lg">
                <input value={text} readOnly className="w-full bg-[#2d3444] rounded-lg h-full placeholder:pl-4 pl-4 text-white text-xs" placeholder="Send Message">
                </input>
                <button className=" p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40">
                  <span>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 16 16" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-colors text-brand-green" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
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
