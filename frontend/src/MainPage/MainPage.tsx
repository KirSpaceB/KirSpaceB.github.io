import { useState, useEffect } from "react";
import { Answer } from "../Answer/Answer";
import { GPT3Logo } from "./svg/GPT3Logo";
import { GPT4Logo } from "./svg/GPT4Logo";
import {InputBoxArrowLogo} from "./svg/InputBoxArrowLogo"

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
    <div className="flex flex-1 flex-col justify-center items-center bg-[#373b46] sm:relative sm:right-[120px] sm:z-9">
      

      {addToMainContext && <Answer/>}
    </div>
  )
}