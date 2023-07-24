import { useEffect, useRef, useState } from 'react';
import './styles/Modal.css';

type ButtonModalProps = {
  onClose: () => void;
};

export const ButtonModal = ({onClose}: ButtonModalProps) => {
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
        <button id='modal_close_button' onClick={handleClose}>Close Modal</button>
      </div>
    </>
  )
}