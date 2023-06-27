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

            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <h1>Title</h1>
                <video src={MazeSolverVid} autoPlay muted className="h-[200px] w-[200px]"></video>
                <div className="flex flex-row gap-4 justify-center align-center text-center">
                  <button>GitHub</button>
                  <button>Live Demo</button>
                </div>
                <p className="text-center justify-center align-center">
                  What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  Why do we use it?
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                  Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
