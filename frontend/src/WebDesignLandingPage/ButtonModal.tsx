import { useEffect, useRef } from 'react';
import './styles/Modal.css';

type ButtonModalProps = {
  onClose: () => void;
};

export const ButtonModal = ({onClose}: ButtonModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div id='modal_overlay'></div>
      <div id='modal_container' ref={modalRef}>
        <button id='modal_close_button' onClick={onClose}>Close Modal</button>
      </div>
    </>
  )
}