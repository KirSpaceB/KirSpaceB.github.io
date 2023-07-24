import { Introduction } from "./Introduction";
import { ParralaxDesignCard } from "./ParralaxDesignCard";
export const WebDesignLandingPage = () => {

  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction/>
      
      <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
      >
        <ParralaxDesignCard/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
