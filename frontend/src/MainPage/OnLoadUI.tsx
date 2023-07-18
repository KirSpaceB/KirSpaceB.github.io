import { useState, useEffect, useContext } from "react";
import { MainPageContext } from "./context/MainPageContext";
import { GPT3Logo } from "./svg/GPT3Logo";
import { GPT4Logo } from "./svg/GPT4Logo";
import { InputBoxArrowLogo } from "./svg/InputBoxArrowLogo";

export const OnLoadUI = () => {
  const [text,setText] = useState("");

  const message = "Where can I find a young, hard working, and passionate developer?";
  const mainPageContext = useContext(MainPageContext);
  const {setIsOnLoadUIFinished} = mainPageContext;

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => {
        // If all characters have been added, stop the interval
        if (prevText.length === message.length) {
          clearInterval(timer);
          // We need to do this in Order to prevent violating the React Hooks rule of having side effects
          setTimeout(() => setIsOnLoadUIFinished(true), 0)
          return prevText;
        }
        // Add the next character from the message
        return prevText + message.charAt(prevText.length);
      });
    }, 35); // adjust the speed of typing here
      return () => clearInterval(timer);
    }, []);

  return (
    <>
     <div className="mb-auto" aria-label="GPT Logos">
        <div className="relative top-6 flex justify-center items-center rounded-xl p-1 bg-gray-100 text-gray-900 dark:bg-gray-900 opacity-95">
          <ul className="flex flex-row gap-1 bg-gray-900 w-[307px] h-[47px] rounded-xl">
            <li className="flex-grow">
              <div className="flex justify-center items-center gap-3 rounded-lg border py-3 text-gray-900 bg-white outline-none border-black/10 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                <span>
                  <GPT3Logo/>
                </span>
                <span className="truncate text-sm font-medium pr-1.5 sm:pr-1.5">
                  GPT-3.5
                </span>
              </div>
            </li>
            <li className="flex-grow">
              <div className="flex justify-center items-center gap-3 rounded-lg py-3">
                <span>
                  <GPT4Logo/>
                </span>
                <span className="truncate text-sm font-medium pr-1.5 sm:pr-1.5 text-gray-500">
                  GPT-4.0
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-600 dark:text-200 dark:gray-600 ml-auto mr-auto mb-10 flex gap-2 items-center justify-center flex-grow">
          ChatGPT
          <span className="bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase">
            Plus
          </span>
        </h1>
      </div>
      <div className="mt-auto sm:w-[600px]">
        <div className="flex flex-row h-[45px] border border-black/10 bg-white dark:border-gray-900/60 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs justify-center items-center ml-[20px] sm:w-full sm:justify-center sm:text-center sm:ml-[4px]">
          <textarea className="m-0 w-[300px] resize-none border-0 bg-transparent dark:bg-transparent pl-0 justify-center text-[14px] whitespace-pre-wrap sm:w-[550px] sm:pt-6" value={text}></textarea>
          <InputBoxArrowLogo/>
        </div>
        <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300">
          <span>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</span>
        </div>
      </div>
    </>
  )
}
