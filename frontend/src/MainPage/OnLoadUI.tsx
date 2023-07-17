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
        <div className="relative top-6 flex justify-center items-center rounded-xl bg-[#373b46] p-1 text-gray-900 w-screen">
          <ul className="flex flex-row gap-1 bg-gray-900 w-[307px] h-[47px] rounded-xl">
            <li className="flex-grow">
              <div className="flex justify-center items-center gap-3 rounded-lg border py-3 text-gray-900">
                <span>
                  <GPT3Logo/>
                </span>
                <span className="text-white">
                  GPT-3.5
                </span>
              </div>
            </li>
            <li className="flex-grow">
              <div className="flex justify-center items-center gap-3 rounded-lg py-3">
                <span>
                  <GPT4Logo/>
                </span>
                <span className="text-gray-500">
                  GPT-4.0
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-200 flex gap-2 items-center justify-center">
          ChatGPT
          <span className="bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase">
            Plus
          </span>
        </h1>
      </div>
      <div className="mt-auto">
        <div className="flex flex-row mb-[35px] justify-center items-center border border-black/10">
          <input value={text} className="rounded-4xl bg-[#373b46] sm:w-[500px]" type="text" name="" id="" placeholder="Submit Text"/>
          <div className="ponter-cursor">
            <InputBoxArrowLogo/>
          </div>
        </div>
      </div>
    </>
  )
}
