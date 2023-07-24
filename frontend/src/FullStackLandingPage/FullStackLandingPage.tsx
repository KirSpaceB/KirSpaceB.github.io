import { Introduction } from "../ReusedStyleComponents/Introduction"

export const FullStackLandingPage = () => {
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
       <Introduction animatedMessage="test"/>
      <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
