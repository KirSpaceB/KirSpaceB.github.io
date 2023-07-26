import { CardWithModal } from "../ReusedStyleComponents/CardWithModal"
import { Introduction } from "../ReusedStyleComponents/Introduction"
import GisProjectVid from '../../public/Gismap.mp4';
import PersonalInvestHelperVid from '../../public/Personal-finance-page.mp4'
import MazeSolverVid from '../../public/MazeSolverVideo.mp4'
import { useContext, useEffect } from "react";
import { FullStackLandingPageContext } from "./FullStackLandingPageContext";
import { WebDesingLandingPageContext } from "../WebDesignLandingPage/WebDesignLandingPageContext";
import { projects } from "./FsLpProjects";

export const FullStackLandingPage = () => {
  let message = 'Embark on a journey through my full-stack web portfolio, where I have adeptly harnessed the potential of Flask and Express for back-end wizardry. Behold the seamless integration of MySQL and MongoDB databases, alongside a robust CI/CD pipeline with Docker, ensuring a transformative and efficient deployment of digital experiences that push the boundaries of innovation.'

  const {isFsLpIntroductionFinished, setIsFsLpIntroductionFinished} = useContext(FullStackLandingPageContext)
  const {setIsIntroductionFinished} = useContext(WebDesingLandingPageContext)

  useEffect(() => {
    if(isFsLpIntroductionFinished) {
      setIsIntroductionFinished(false)
    }
  },[isFsLpIntroductionFinished])

  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
       <Introduction
          animatedMessage={message}
          onAnimationComplete={() => setIsFsLpIntroductionFinished(true)}
        />
      
      {isFsLpIntroductionFinished && 
        <div 
          className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
        >
          <CardWithModal 
            cardTitle={projects[0].title}
            videoPassedToModal={GisProjectVid}
            gitHubLinkPassedToModal={projects[0].githubLink}
            projectDiscriptionPassedToModal={projects[0].projectDesc}
          />
          <CardWithModal 
            cardTitle={projects[1].title}
            videoPassedToModal={PersonalInvestHelperVid}
            gitHubLinkPassedToModal={projects[1].githubLink}
            projectDiscriptionPassedToModal={projects[1].projectDesc}
          />
          <CardWithModal
            cardTitle={projects[2].title}
            videoPassedToModal={MazeSolverVid}
            gitHubLinkPassedToModal={projects[2].githubLink}
            projectDiscriptionPassedToModal={projects[2].projectDesc}
          />
          <div className="ghost-div"></div>
          <div className="ghost-div"></div>
          <div className="ghost-div"></div>
        </div>      
      }


    </div>
  )
}
