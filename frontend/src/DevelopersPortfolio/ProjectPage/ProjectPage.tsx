import { useState, useEffect, useContext } from "react";
import { ProjectPageContext } from "../LandingPage/sharedcontext/ProjectPageContext";
import { RobotLogo } from "../techstackicons";
import MazeSolverVid from "./ProjectPageVideos/MazeSolverVideo.mp4"
export const ProjectPage = () => {
  const {isTechStackFinished} = useContext(ProjectPageContext);
  let animatedText = "These are my projects that I worked very hard ON :D";
  const [animateText, setAnimateText] = useState("");

  useEffect(() => {
    if(isTechStackFinished) {
      const timer = setInterval(() => {
        setAnimateText((prevChar) => {
          if(prevChar.length === animatedText.length) {
            clearInterval(timer);
            return prevChar
          };
          return prevChar + animatedText.charAt(prevChar.length);
        });
      }, 30)
      return () => clearInterval(timer)
    }
  },[isTechStackFinished])
  return (
    <>
    {isTechStackFinished && 
      <>
        <div className="flex flex-col ">
          <div className="group w-full text-gray-800 dark:text-gray-100">

            <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
              <div className="flex-shrink-0 flex flex-col relative items-end">
                <div className="w-[30px]">
                  <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
                    <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo" />
                  </div>
                </div>
              </div>
              {animateText}
            </div>

            <div className="flex flex-row gap-4 w-[500px] h-[500px]">
              <div className="flex flex-col justify-center align-center space-y-2">
                <h1 className="flex justify-center align-center text-center">
                  MazeSolver
                </h1>

                <div className="flex justify-center items-center">
                  <div className="w-[200px] h-[200px]">
                    <video src={MazeSolverVid} autoPlay muted loop className="flex justify-center items-center align-center rounded-lg h-full w-full"></video>
                  </div>                  
                </div>

                <div className="flex flex-row gap-4 justify-center align-center text-center">
                  <button className="border-2 w-[100px]">GitHub</button>
                  <button className="border-2 w-[100px]">Live Demo</button>
                </div>

                <p className="text-justify">
                  This was my first ever big project :D. The project goal was to get a better understanding of Data Structures and Algorithms. Though not perfect it helped me visualize what the Algorithms would look like tranversing a dataset. Which in this case is a 2D array of divs.
                </p>

              </div>
              <div className="flex flex-col w-[250px] h-[250px]">
                <video src={MazeSolverVid} controls></video>
              </div>
              <div className="flex flex-col w-[250px] h-[250px]">
                <video src={MazeSolverVid} controls></video>
              </div>
              <div className="flex flex-col w-[250px] h-[250px]">
                <video src={MazeSolverVid} controls></video>
              </div>
            </div>
          </div>

        </div>
      </>
    }

    </>
  )
}
