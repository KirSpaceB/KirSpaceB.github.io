import { InputBoxArrowLogo } from "../svg/InputBoxArrowLogo";
import { useState,useContext, useEffect } from "react";
import { MainPageContext } from "../context/MainPageContext";



export const TextArea = () => {
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
    }, 40); // adjust the speed of typing here
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="flex flex-row h-[45px] border border-black/10 bg-white dark:border-gray-900/60 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs justify-center items-center ml-[20px] sm:w-full sm:justify-center sm:text-center sm:ml-[4px]">
        <textarea className="m-0 w-[300px] resize-none border-0 bg-transparent dark:bg-transparent pl-0 justify-center text-[14px] whitespace-pre-wrap sm:w-[550px] sm:pt-8" value={text}>

        </textarea>
        <InputBoxArrowLogo/>
      </div>
      <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300">
        <span>
          ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version
        </span>
      </div>
    </>

  )
}
