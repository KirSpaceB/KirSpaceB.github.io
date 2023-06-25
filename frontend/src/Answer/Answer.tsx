import { useState, useEffect } from "react";

export const Answer = () => {
  let message = "Sure thing! Heres a developer I personally know that is really passionate and ambious in the field of programming, hes loves programming so much he does it for fun :D let me redirect you to his page PAWGERS";
  const [animateText, setAnimateText] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateText((prevChar) => {
        if(prevChar.length === message.length) {
          clearInterval(timer);
          return prevChar;
        }
        return prevChar + message.charAt(prevChar.length);
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="text-center text-s w-[500px] h-[500px] justify-center items-center">
        {animateText}
      </div>
    </div>
  )
}
 