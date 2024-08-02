import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import "./Header.scss";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="logo-container">
            <div className="atom">
              <div className="electron"></div>
              <div className="electron"></div>
              <div className="electron"></div>
              <div className="nucleus">JCS</div>
            </div>
          </div>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
        {/* Button to open the modal, only visible on mobile */}
        <div className="modal-toggle" onClick={handleOpenModal}>
          Abrir
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
