import { useState, useEffect, useContext } from "react";
import { RobotLogo, TypeScriptLogo, JavaScriptLogo, MySQLIcon, ReactIcon, JestIcon, PythonIcon, TailwindIcon, CSharpIcon, AWSIcon, JqueryIcon, BootstrapIcon, VITEIcon, FlaskIcon, HTMLIcon } from "./techstackicons";
import { TechStackContext } from "./LandingPage/sharedcontext/TechStackContext";
import { ProjectPageContext } from "./LandingPage/sharedcontext/ProjectPageContext";


export const TechStackPage = () => {
  let introduction = "These are the technologies I know and have used before :3";
  const [animateText, setAnimateText] = useState("");
  const [waitAnimateText, setWaitAnimateText] = useState(false);
  const {isAgeLocationFinished} = useContext(TechStackContext);
  const {setIsTechStackFinished} = useContext(ProjectPageContext);

  useEffect(() => {
    if(isAgeLocationFinished) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === introduction.length) {
            clearInterval(timer);
            setWaitAnimateText(true);
            setIsTechStackFinished(true)
            return prevChar;
          }
          return prevChar + introduction.charAt(prevChar.length);
        });
      }, 30);
      return () => clearInterval(timer);      
    }
  }, [isAgeLocationFinished]);  

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

          <div className="mr-[200px]">
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
                </div>
              </div>        
            }
          </div>
        </div>
      }
    </>
  )
}
