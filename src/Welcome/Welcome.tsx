import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../context/AppContext';
import "./Welcome.scss";

const WelcomeModal = () => {
  const { values, setValue } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(() => values["Welcome"] !== "Closed");
  const [greeting, setGreeting] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const greetingText = "Bienvenido".split("");
      const intervalId = setInterval(() => {
        if (currentIndex < greetingText.length) {
          setGreeting((prevGreeting) => [
            ...prevGreeting,
            greetingText[currentIndex],
          ]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isOpen, currentIndex]);

  const closeModal = () => {
    setIsOpen(false);
    setValue("Welcome", "Closed");
  };

  return (
    <>
      {isOpen && (
        <div className="welcome-modal">
          <div className="welcome-container">
            <div className="greeting">
              {greeting.map((letter, index) => (
                <span className="letters" key={index}>
                  {letter}
                </span>
              ))}
            </div>
            <button className="btn-close" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeModal;
