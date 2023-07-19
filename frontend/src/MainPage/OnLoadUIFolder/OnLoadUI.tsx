
import { OnLoadUIPill } from "./Pill";
import { ChatGPTPlusLogo } from "./ChatGPTPlusLogo";
import { TextArea } from "./TextArea";

export const OnLoadUI = () => {


  return (
    <>
      <div className="pill-parent-tag mb-auto" aria-label="GPT Logos">
        <OnLoadUIPill/>
      </div>
      
      <div className="chatgpt-plus-parent-tag my-auto">
        <ChatGPTPlusLogo/>
      </div>
      
      <div className="text-area-parent-tag mt-auto sm:w-[600px]">
        <TextArea/>
      </div>
    </>
  )
}
