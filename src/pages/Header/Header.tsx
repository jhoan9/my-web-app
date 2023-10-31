import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

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
          <Link to="/" className="logo">
            Logo
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <div className="navbar-toggle">
          <span className="toggle-icon" onClick={handleOpenModal}></span>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
