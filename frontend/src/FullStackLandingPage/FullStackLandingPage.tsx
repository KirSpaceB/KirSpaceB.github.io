import { CardWithModal } from "../ReusedStyleComponents/CardWithModal"
import { Introduction } from "../ReusedStyleComponents/Introduction"
import GisProjectVid from '../../public/Gismap.mp4';
import PersonalInvestHelperVid from '../../public/Personal-finance-page.mp4'
import MazeSolverVid from '../../public/MazeSolverVideo.mp4'
import { useContext, useEffect } from "react";
import { FullStackLandingPageContext } from "./FullStackLandingPageContext";
import { WebDesingLandingPageContext } from "../WebDesignLandingPage/WebDesignLandingPageContext";


export const FullStackLandingPage = () => {
  let gisCardTitle = 'GIS-Data-Visualizer'
  let gisGitHubLink = 'https://github.com/KirSpaceB/GIS-Data-Visualizer'
  let gisProjectDesc = 'Web Application that visualizes population and county employment level on an interactive 2D map of the world.'

  let investmentHelperCardTitle = 'Personal-Investment-Helper'
  let investmentHelperGitHubLink = 'https://github.com/KirSpaceB/Personal-Investment-Helper';
  let projDesc = 'Dashboard that links multiple financial Web APIs together leveraged for investment decisions.'
  
  let mazeSolverTitle = 'Maze Solver'
  let mazeSolverGhLink = 'https://github.com/KirSpaceB/MazeSolver'
  let mazeSolverDesc = 'Interactive application that lets users draw a maze with obstacles, and solve with algorithms such as BFS and DFS.'

  const {isFsLpIntroductionFinished, setIsFsLpIntroductionFinished} = useContext(FullStackLandingPageContext)
  const {isIntroductionFinished,setIsIntroductionFinished} = useContext(WebDesingLandingPageContext)
  useEffect(() => {
    console.log('is useffect being read')
    console.log("is the lpintroduction finisheded?", isFsLpIntroductionFinished)
    if(isFsLpIntroductionFinished) {
      console.log("is the lpintroduction finisheded?", isFsLpIntroductionFinished)

      setIsIntroductionFinished(false)
      console.log(isIntroductionFinished)
    }
  },[isFsLpIntroductionFinished])


  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
       <Introduction animatedMessage="test1test1test1test1test1test1test1test1" onAnimationComplete={() => setIsFsLpIntroductionFinished(true)}/>
      
      {isFsLpIntroductionFinished && 
        <div 
          className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
        >
          <CardWithModal 
            cardTitle={gisCardTitle}
            videoPassedToModal={GisProjectVid}
            gitHubLinkPassedToModal={gisGitHubLink}
            projectDiscriptionPassedToModal={gisProjectDesc}
          />
          <CardWithModal 
            cardTitle={investmentHelperCardTitle}
            videoPassedToModal={PersonalInvestHelperVid}
            gitHubLinkPassedToModal={investmentHelperGitHubLink}
            projectDiscriptionPassedToModal={projDesc}
          />
          <CardWithModal
            cardTitle={mazeSolverTitle}
            videoPassedToModal={MazeSolverVid}
            gitHubLinkPassedToModal={mazeSolverGhLink}
            projectDiscriptionPassedToModal={mazeSolverDesc}
          />
          <div className="ghost-div"></div>
          <div className="ghost-div"></div>
          <div className="ghost-div"></div>
        </div>      
      }


    </div>
  )
}
