import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <ul className="list-modal">
          <li className="item-list">
            <Link className="link-menu" onClick={onClose} to="/">
              Inicio
            </Link>
          </li>
          <li className="item-list">
            <Link className="link-menu" onClick={onClose} to="/about">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
