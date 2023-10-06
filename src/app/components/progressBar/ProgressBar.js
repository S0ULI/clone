'use client';

import { useState, useEffect } from 'react';

import styles from './progress-bar.module.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
