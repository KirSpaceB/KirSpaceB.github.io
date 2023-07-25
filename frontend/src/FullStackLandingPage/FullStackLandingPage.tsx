import { CardWithModal } from "../ReusedStyleComponents/CardWithModal"
import { Introduction } from "../ReusedStyleComponents/Introduction"
import GisProjectVid from '../../public/Gismap.mp4';
import PersonalInvestHelperVid from '../../public/Personal-finance-page.mp4'
import MazeSolverVid from '../../public/MazeSolverVideo.mp4'
import { useContext } from "react";
import { FullStackLandingPageContext } from "./FullStackLandingPageContext";


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

  const {isIntroductionFinished, setIsIntroductionFinished} = useContext(FullStackLandingPageContext)


  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
       <Introduction animatedMessage="Let me present a comprehensive overview of his comprehensive full-stack development projects, wherein he has proficiently utilized Python's Flask framework. Not just limiting himself to this, he has also integrated continuous integration and continuous delivery pipelines (CI/CD), ensuring a streamlined, automatic, and reliable process for frequent and error-free deployments of the applications. Moreover, he has employed MySQL as his choice of relational database management system for these projects, enabling efficient data handling, storage, and retrieval. His projects are a testament to his diverse skill set, bringing together various aspects of modern web development in a cohesive manner." onAnimationComplete={() => setIsIntroductionFinished(true)}/>
      
      {isIntroductionFinished && 
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
