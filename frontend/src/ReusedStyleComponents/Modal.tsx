import { useEffect, useRef, useState } from 'react';
import './styles/Modal.css';

import { ReusedButton } from './ReusedButton';
import { GitHubIcon } from '../DevelopersPortfolio/techstackicons';
import { CloseModal } from './CloseModal';

type ButtonModalProps = {
  onClose: () => void,
  displayedVideo:string,
  gitHubLink:string,
  projectDescription:string,
};

export const Modal = (
  {
    onClose,
    displayedVideo,
    gitHubLink,
    projectDescription
  }: ButtonModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300);  // delay the onClose call for 300ms
  };

  return (
    <>
      <div id='modal_overlay'></div>
      <div id='modal_container' className={closing ? 'closing' : ''} ref={modalRef}>
        <button id='modal_close_button' onClick={handleClose}>
          <CloseModal/>
        </button>
        <video src={displayedVideo} className='w-[32rem] h-auto' controls></video>
        <div className='flex flex-row space-x-4 justify-center items-center mt-4'>
          <ReusedButton textToDisplay='Source Code' icon={GitHubIcon} 
          link={gitHubLink}
          />
          <ReusedButton textToDisplay='Live Demo'/>
        </div>

        <p className='flex justify-center items-center mt-4 text-white text-center'>
          {projectDescription}
        </p>
      </div>
    </>
  )
}