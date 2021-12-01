import React from 'react';
import styles from './index.module.css';

function Download() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <span className={styles['purple-gradient-text']}>
          <strong>{`Download `}</strong>
          now!
        </span>
      </div>
      <div className={styles['download-btns']}>
        <div className={styles['button-wrap']}>
          <img
            src="./imgs/app-store.png"
            alt="app-store"
            className={styles['button']}
          />
        </div>
        <div className={styles['button-wrap']}>
          <img
            src="./imgs/google-play.png"
            alt="google-play"
            className={styles['button']}
          />
        </div>
      </div>
    </div>
  );
}

export default Download;
