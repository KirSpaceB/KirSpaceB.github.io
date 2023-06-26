import RobotLogo from "../../shared/images/robot-svgrepo-com.svg";
import { useState, useEffect } from "react";
import { TechStackPage } from "../TechStackPage";
import { LandingPageName } from "./LandingPageName";

export const LandingPage = () => {

  let introduction = "Here is a personal introduction of who he is! :D";
  const [animateText, setAnimateText] = useState("");
  const [isTextComplete, setIsTextComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateText((prevChar) => {
        if(prevChar.length === introduction.length) {
          clearInterval(timer);
          setIsTextComplete(true)
          return prevChar;
        }
        return prevChar + introduction.charAt(prevChar.length);
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
      <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
        <div className="w-[30px]">
          <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
            <img src={RobotLogo} alt="" className="w-full h-full" />
          </div>
        </div>
        <div>
          {animateText}
        </div>
      </div>
      <div className="flex flex-row relative">
        <div className="flex flex-col relative">
          <LandingPageName isRender={isTextComplete}/>
          <hr className="mb-10"/>
          <p>AHOY There!</p>
          <p>My Favorite hobbies are: Basketball, Football, Tennis, Hiking, and any physical activity :D </p>
          <hr className="mt-10"/>
          <h1 className="text-4xl">21 Year Old Software Developer based in Southern California</h1>
        </div>
        <img src={RobotLogo} alt="" className="w-[300px] h-[300px] relative left-[300px]"/>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto">
        {isTextComplete && 
          <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto overflow-y-auto">
            <TechStackPage/>
          </div>
        }
      </div>
    </div>
  )
}
