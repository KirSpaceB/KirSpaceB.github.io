import { Introduction } from "../ReusedStyleComponents/Introduction";
import { CardWithModal } from "../ReusedStyleComponents/CardWithModal";
import ParrallaxVideoDemo from "../../public/Parallax Design Video Demo.mp4"
import { WebDesingLandingPageContext } from "./WebDesignLandingPageContext";
import { useContext } from "react";
export const WebDesignLandingPage = () => {
    
  const {isIntroductionFinished,setIsIntroductionFinished} = useContext(WebDesingLandingPageContext)

  let message = "Demonstrating an acute understanding of modern user behavior, the individual has adeptly implemented responsive web design principles across their projects. By ensuring that their creations adapt seamlessly to diverse screen sizes and devices, they have effectively catered to the preferences of a wide-ranging audience, leading to enhanced user engagement and satisfaction.";
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
