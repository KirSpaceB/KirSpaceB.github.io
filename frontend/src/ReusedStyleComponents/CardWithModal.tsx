import {Modal} from './Modal'
import { useState } from 'react';
export const CardWithModal = () => {
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
          L.A. Mountains Parrallax Design
        </div>
      </button>
      {isModalOpen && <Modal onClose={handleClose}/>}
    </>
  )
}
