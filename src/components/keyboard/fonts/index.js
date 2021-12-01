import React from 'react';
import styles from './index.module.css';

function Fonts() {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <img src="./imgs/fonts.png" alt="fonts" className={styles['image']} />
      </div>
      <div className={styles['content']}>
        <div>
          <span>100+ Fonts</span>
        </div>
        <span>
          Make your social media profile more specially, and many other features
        </span>
      </div>
    </div>
  );
}

export default Fonts;
