import { useEffect, useRef, useState } from 'react';
import './styles/Modal.css';
import ParalaxVideoDemo from './public/Parallax Design Video Demo.mp4'
import { ReusedButton } from '../ReusedStyleComponents/ReusedButton';
import { GitHubIcon } from "../DevelopersPortfolio/techstackicons"
import { CloseModal } from '../ReusedStyleComponents/CloseModal';

type ButtonModalProps = {
  onClose: () => void;
};

export const Modal = ({onClose}: ButtonModalProps) => {
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
        <video src={ParalaxVideoDemo} className='w-[32rem] h-auto' controls></video>
        <div className='flex flex-row space-x-4 justify-center items-center mt-4'>
          <ReusedButton textToDisplay='Source Code' icon={GitHubIcon}/>
          <ReusedButton textToDisplay='Live Demo'/>
        </div>

        <p className='flex justify-center items-center mt-4 text-white text-center'>
          If Live demo is currently unavaible the video demonstrates the app
        </p>
      </div>
    </>
  )
}