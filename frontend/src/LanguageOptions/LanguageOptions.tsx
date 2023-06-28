import { useState } from "react";
import { LandingPage } from "../DevelopersPortfolio/LandingPage/LandingPage";

export const LanguageOptions = () => {
  const [languagePicked, setLanguagePicked] = useState(false);
  const handleClick = () => {
    setLanguagePicked(true);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 justify-center items-center">
        <button className="border-2" onClick={handleClick}>
          <div className="flex w-[100px] text-center justify-center"> English? </div>
        </button>
        <button className="border-2">
          <div className="flex w-[100px] text-center justify-center">
            中国人?
          </div>
        </button>
        <button className="border-2">
          <div className="flex w-[100px] text-center justify-center">
            Tagalog?
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto">
        {languagePicked && 
          <LandingPage/>
        }
      </div>
    </div>
  )
}
