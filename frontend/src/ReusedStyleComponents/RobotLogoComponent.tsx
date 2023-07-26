import { RobotLogo } from "../MainLandingPage/techstackicons"
export const RobotLogoComponent = () => {
  return (
    <div className="flex-shrink-0 flex flex-col items-end">
      <div className="w-[30px]">
        <div className=" p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-red-500">
          <img className="w-full h-full" src={RobotLogo} alt="Check Answer.tsx img tag with robotlogo"/>
        </div>
      </div>
    </div>
  )
}
