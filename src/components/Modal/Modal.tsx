import React, { useState } from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {

    if (!isOpen) {
        return null;
      }

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <ul className="list-modal">
              <li className="item-list">
                <Link className="link-menu" onClick={onClose} to="/">Inicio</Link>
              </li>
              <li className="item-list">
                <Link className="link-menu" onClick={onClose} to="/about">Acerca de</Link>
              </li>
              <li className="item-list">
                <Link className="link-menu" onClick={onClose} to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
