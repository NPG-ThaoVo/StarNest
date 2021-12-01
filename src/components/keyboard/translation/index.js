import React from 'react';
import styles from './index.module.css';

function Translation() {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <span className={styles['content-text']}>
          Connect with friends from all over the world with translation
          keyboards
        </span>
      </div>
      <div className={styles['image-container']}>
        <img
          src="./imgs/translation.png"
          alt="translation"
          className={styles['image']}
        />
      </div>
    </div>
  );
}

export default Translation;
