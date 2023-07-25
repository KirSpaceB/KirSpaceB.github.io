import { RobotLogo } from "../DevelopersPortfolio/techstackicons";
import useTextAnimation from "../shared/Hooks/useTextAnimation";
import {FullStackLandingPageContext} from "../FullStackLandingPage/FullStackLandingPageContext"
import { useContext } from "react";
interface IComponentProps {
  animatedMessage:string,
}
export const Introduction = ({animatedMessage} : IComponentProps) => {
  const {setIsIntroductionFinished} = useContext(FullStackLandingPageContext)

  const {animatedText} = useTextAnimation({
    message:animatedMessage,
    callbackFnForDestructContext: () => setIsIntroductionFinished(true),
    speed:10
  })
  return (
    <div className='border-black/10 dark:border-gray-900/50 dark:bg-[#444654] w-screen'>
      <div className="flex flex-row p-4 gap-4 text-base items-start justify-center">
        <div className="w-[30px] flex flex-col items-end">
          <div className="p-1 rounded-sm w-[30px] bg-red-500 flex-shrink-0">
            <img src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
          </div>
        </div>
        <div className="text-white w-[48rem]">
          {animatedText}
        </div>
      </div>
    </div>
  )
}
