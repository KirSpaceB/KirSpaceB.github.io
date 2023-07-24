import {Modal} from './Modal'
import { useState } from 'react';
interface ICardWithModalArgs {
  cardTitle:string,
  videoPassedToModal:string,
  gitHubLinkPassedToModal:string,
  projectDiscriptionPassedToModal:string
}
export const CardWithModal = ({
  cardTitle,
  videoPassedToModal,
  gitHubLinkPassedToModal,
  projectDiscriptionPassedToModal,
  } : ICardWithModalArgs) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button className="border-2 w-36 h-14" onClick={handleClick}>
        <div className="flex text-center justify-center text-white">
          {cardTitle}
        </div>
      </button>
      {
        isModalOpen &&
         <Modal 
            onClose={handleClose} 
            displayedVideo={videoPassedToModal}
            gitHubLink={gitHubLinkPassedToModal}
            projectDescription={projectDiscriptionPassedToModal}
          />
      }
    </>
  )
}
