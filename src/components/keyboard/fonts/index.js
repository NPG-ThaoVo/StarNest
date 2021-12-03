import React from 'react';
import styles from './index.module.css';

function Fonts() {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <img srcSet="./imgs/fonts.png 2x" alt="" className={styles['image']} />
      </div>
      <div className={styles['content']}>
        <div>
          <span className={styles['content-header']}>100+ Fonts</span>
        </div>
        <span>
          Make your social media profile more specially, and many other features
        </span>
      </div>
    </div>
  );
}

export default Fonts;
