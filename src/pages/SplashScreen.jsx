import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './splashscreen.css';

const SplashScreen = ({ onFinish }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["CREATOR", "DEVELOPER", "EXPLORER", "THAT'S ME! "];

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 3000); // Change word every 3 seconds for a more elegant pace
      return () => clearTimeout(timeout);
    } else {
      const finishTimeout = setTimeout(() => {
        onFinish();
      }, 4000); // Longer delay for the final word
      return () => clearTimeout(finishTimeout);
    }
  }, [currentWordIndex, words.length, onFinish]);

  return (
    <div className="splash-container">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentWordIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          className={`splash-word ${currentWordIndex === words.length - 1 ? 'last-word' : ''}`}
        >
          {words[currentWordIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
