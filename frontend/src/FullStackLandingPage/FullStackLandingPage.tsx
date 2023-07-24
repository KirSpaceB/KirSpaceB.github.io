import { CardWithModal } from "../ReusedStyleComponents/CardWithModal"
import { Introduction } from "../ReusedStyleComponents/Introduction"

export const FullStackLandingPage = () => {
  let cardTitle = 'poggars'
  let cardTitle2 = 'poggars2'

  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
       <Introduction animatedMessage="test"/>
      <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
      >
        <CardWithModal cardTitle={cardTitle}/>
        <CardWithModal cardTitle={cardTitle2}/>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
