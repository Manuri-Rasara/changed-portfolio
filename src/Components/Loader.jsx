import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onStart }) {
  const [showStartButton, setShowStartButton] = useState(false);

  // Set a timer to show the "Start" button after 4.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 4500); // Timer to show the "Start" button after 4.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div className="loader-container">
      {!showStartButton ? (
        <div className="loader"></div> // Loader animation while waiting for the button
      ) : (
        <button className="start-button" onClick={onStart}>START</button> // Show Start button after the animation
      )}
    </div>
  );
}
