import { Introduction } from "../ReusedStyleComponents/Introduction";
import { CardWithModal } from "../ReusedStyleComponents/CardWithModal";
export const WebDesignLandingPage = () => {
    let message = "Demonstrating an acute understanding of modern user behavior, the individual has adeptly implemented responsive web design principles across their projects. By ensuring that their creations adapt seamlessly to diverse screen sizes and devices, they have effectively catered to the preferences of a wide-ranging audience, leading to enhanced user engagement and satisfaction.";
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction animatedMessage={message}/>
      <div 
        className="WebDesignLandingPage-LA-Mountain-Card flex flex-1 w-full flex-row justify-evenly mt-4"
      >
        <CardWithModal/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
