import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './loadingsplash.css';

const LoadingSplash = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Display for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <AnimatePresence mode="wait">
        <motion.h1
          key="thanks-message"
          className="splash-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        >
          Just a moment please
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default LoadingSplash;