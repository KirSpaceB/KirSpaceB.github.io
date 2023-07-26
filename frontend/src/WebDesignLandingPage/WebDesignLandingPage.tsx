import { Introduction } from "../ReusedStyleComponents/Introduction";
import { CardWithModal } from "../ReusedStyleComponents/CardWithModal";
import ParrallaxVideoDemo from "../../public/Parallax Design Video Demo.mp4"
import { WebDesingLandingPageContext } from "./WebDesignLandingPageContext";
import { FullStackLandingPageContext } from "../FullStackLandingPage/FullStackLandingPageContext";
import { useContext, useEffect } from "react";

export const WebDesignLandingPage = () => {
    
  const {isIntroductionFinished,setIsIntroductionFinished} = useContext(WebDesingLandingPageContext)
  const {setIsFsLpIntroductionFinished} = useContext(FullStackLandingPageContext)

  useEffect(() => {
    if (isIntroductionFinished) {
      setIsFsLpIntroductionFinished(false)
    }
  }, [isIntroductionFinished])

  let message = "DteseaseaseasDteseaseaseasDteseaseaseasDteseaseaseas";
  let cardTitleArg = 'L.A. Mountains Parrallax Design'

  let gitHubLink = 'https://github.com/KirSpaceB/LA_Mountains_Parallax_Design/blob/main/HTMLProject/index.html'
  
  let projDescription = 'If Live demo is currently unavaible the video demonstrates the app';
    
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction 
        animatedMessage={message} 
        onAnimationComplete={() => setIsIntroductionFinished(true)}
      />
      {isIntroductionFinished &&
        <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
        >
          <CardWithModal 
          cardTitle={cardTitleArg} 
          videoPassedToModal={ParrallaxVideoDemo} gitHubLinkPassedToModal={gitHubLink}
          projectDiscriptionPassedToModal={projDescription}
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
