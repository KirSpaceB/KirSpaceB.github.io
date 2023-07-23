import { Introduction } from "./Introduction";

export const WebDesignLandingPage = () => {
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction/>
      <div className="WebDesignLandingPage-Cards flex flex-row grow">
        <div className="bg-red-500"></div>
        <div className="bg-purple-500"></div>
        <div className="bg-blue-500"></div>
        
        <div className="bg-green-500"></div>
      </div>
    </div>
  )
}
