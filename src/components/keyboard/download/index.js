import React from 'react';
import styles from './index.module.css';

function Download() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <span
          className={`${styles['title-download']} ${styles['purple-gradient-text']}`}
        >
          <strong className={styles['download-text']}>{`Download `}</strong>
          now!
        </span>
      </div>
      <div className={styles['download-btns']}>
        <div className={styles['button-wrap']}>
          <img
            src="./imgs/app-store.png"
            alt="app-store"
            className={`${styles['button']} ${styles['download-app-store']}`}
          />
        </div>
        <div className={`${styles['button-wrap']}`}>
          <img
            src="./imgs/google-play.png"
            alt="google-play"
            className={`${styles['button']} ${styles['download-google-play']}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Download;
