
import { OnLoadUIPill } from "./Pill";
import { ChatGPTPlusLogo } from "./ChatGPTPlusLogo";
import { TextArea } from "./TextArea";

export const OnLoadUI = () => {


  return (
    <>
      <div className="mb-auto" aria-label="GPT Logos">
        <OnLoadUIPill/>
      </div>
      
      <div className="my-auto">
        <ChatGPTPlusLogo/>
      </div>
      
      <div className="mt-auto sm:w-[600px]">
        <TextArea/>
      </div>
    </>
  )
}
