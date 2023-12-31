import { useState, useEffect, useContext } from "react";
import { RobotLogo, TypeScriptLogo, JavaScriptLogo, MySQLIcon, ReactIcon, JestIcon, PythonIcon, TailwindIcon, CSharpIcon, AWSIcon, JqueryIcon, BootstrapIcon, VITEIcon, FlaskIcon, HTMLIcon,DockerIcon,GitHubIcon } from "./techstackicons";
import { TechStackContext } from "./LandingPage/context/TechStackContext";
import { ProjectPageContext } from "./LandingPage/context/ProjectPageContext";
import { SvgComponent } from "../shared/SvgComponent";
import { ContinueGeneratingArrow } from "./LandingPage/svg/ContinueGeneratingArrow";


export const TechStackPage = () => {
  let introduction = "Here are the technogies he uses often and have developed with. From my understanding his favorite language so far is JavaScript with React as the framework. Which is crazy because, well you know, JavaScript.....";
  const [animateText, setAnimateText] = useState("");
  const [waitAnimateText, setWaitAnimateText] = useState(false);
  const [makeButtonDisappear, setMakeButtonDisappear] = useState(true)

  const {isAgeLocationFinished} = useContext(TechStackContext);
  const {setIsTechStackFinished} = useContext(ProjectPageContext);


  useEffect(() => {
    if(isAgeLocationFinished) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === introduction.length) {
            clearInterval(timer);
            setWaitAnimateText(true);
            return prevChar;
          }
          return prevChar + introduction.charAt(prevChar.length);
        });
      }, 20);
      return () => clearInterval(timer);      
    }
  }, [isAgeLocationFinished]);  
  const buttonHandler = () => {
    setIsTechStackFinished(true);
    setMakeButtonDisappear(false)
  }
  return (
    <>
      {isAgeLocationFinished && 
        <div>
          <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto"
          >
            <div className="w-[30px]">
              <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
                <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
              </div>
            </div>
            {animateText}
          </div>

          <div className="">
            {waitAnimateText && 
              <div className="flex flex-col space-y-6 justify-center items-center">
                <div className="flex flex-row w-[48px] h-[48px] justify-center items-center">
                  <img src={JavaScriptLogo}></img>
                  <img className="w-[48px] h-[48px]" src={ReactIcon}></img>
                  <img src={TypeScriptLogo}></img>
                  <img src={JqueryIcon}></img>
                  <img src={HTMLIcon}></img>
                  <img src={BootstrapIcon}></img>
                  <img src={TailwindIcon}></img>
                </div>
                <div className="flex flex-row w-[48px] h-[48px] mr-[290px]">
                  <img src={PythonIcon}></img>
                  <img src={FlaskIcon}></img>
                  <img src={CSharpIcon}></img>
                </div>
                <div className="flex flex-row w-[48px] h-[48px] mr-[290px]">
                  <img src={MySQLIcon}></img>
                  <img src={JestIcon}/>
                  <img src={VITEIcon}/>
                  <img src={AWSIcon}/>
                  <img src={DockerIcon}></img>
                  <img src={GitHubIcon}></img>
                </div>
              </div>        
            }
          </div>
          {makeButtonDisappear ? 
            <div className="flex items-center justify-center my-10">
              <button className="flex flex-row text-xs p-2 items-center cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h10" onClick={buttonHandler}>
                <SvgComponent icon={ContinueGeneratingArrow}/>
                Continue Generating?
              </button>
            </div>:null
          }


        </div>
      }
    </>
  )
}
