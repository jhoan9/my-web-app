import React, { useEffect, useState } from "react";
import "./Welcome.scss";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [greeting, setGreeting] = useState<String[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const greetingText = ['B', 'i', 'e', 'n', 'v', 'e', 'n', 'i', 'd', 'o', '(a)' ];
      const intervalId = setInterval(() => {
        if (currentIndex < greetingText.length) {
          setGreeting((prevGreeting) => [...prevGreeting, greetingText[currentIndex]]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 150);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isOpen, currentIndex]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="welcome-modal">
          <div className="welcome-container">
            <div className="greeting">{greeting.join("")}</div>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeModal;
