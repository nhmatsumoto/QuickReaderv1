import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children } : ModalProps) => {

 // Não renderiza o modal se não estiver aberto
  if (!isOpen) {
    return null; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative bg-white p-6 rounded shadow max-w-sm w-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
