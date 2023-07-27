import { Introduction } from "../ReusedStyleComponents/Introduction";
import { CardWithModal } from "../ReusedStyleComponents/CardWithModal";
import ParrallaxVideoDemo from "../../public/Parallax Design Video Demo.mp4"
import { WebDesingLandingPageContext } from "./WebDesignLandingPageContext";
import { FullStackLandingPageContext } from "../FullStackLandingPage/FullStackLandingPageContext";
import { useContext, useEffect } from "react";
import { projects } from "./wdlpProjects";
import { WebDesignLandingPageMessages } from "./wdlpData";

export const WebDesignLandingPage = () => {
    
  const {isIntroductionFinished,setIsIntroductionFinished} = useContext(WebDesingLandingPageContext)
  const {setIsFsLpIntroductionFinished} = useContext(FullStackLandingPageContext)

  useEffect(() => {
    if (isIntroductionFinished) {
      setIsFsLpIntroductionFinished(false)
    }
  }, [isIntroductionFinished])


    
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction 
        animatedMessage={WebDesignLandingPageMessages[0].message} 
        onAnimationComplete={() => setIsIntroductionFinished(true)}
      />
      {isIntroductionFinished &&
        <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
        >
          <CardWithModal 
            cardTitle={projects[0].cardTitleArg} 
            videoPassedToModal={ParrallaxVideoDemo}
            gitHubLinkPassedToModal={projects[0].gitHubLink}
            projectDiscriptionPassedToModal={projects[0].projDescription}
          />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }


    </div>
  )
}
