import { useState } from "react";
import { Introduction } from "./Introduction";
import { ButtonModal } from "./ButtonModal";
export const WebDesignLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleClick = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="flex flex-col flex-1  w-screen justify-start items-center">
      <Introduction/>
      <div className="WebDesignLandingPage-Cards flex flex-1 w-full flex-row justify-evenly">
        <button className="border-2 w-36 h-14" onClick={handleClick}>
          <div className="flex text-center justify-center text-white">
             L.A. Mountains Parrallax Design
          </div>
        </button>
      </div>
      {isModalOpen && <ButtonModal onClose={handleClose}/>}
    </div>
  )
}
