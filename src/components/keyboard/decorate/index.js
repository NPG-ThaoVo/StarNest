import React from 'react';
import styles from './index.module.css';

function Decorate() {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <img
          srcSet="./imgs/decorate-keyboard-2x.png 2x"
          alt="keyboard"
          className={styles['image']}
        />
      </div>
      <div className={styles['description']}>
        Decorate, design your own keyboard uniquely with 300 themes, effects,
        lens and swipes ...
      </div>
      <div className={styles['description-app']}>
        <strong className={styles['description-header']}>Decorate,</strong>
        design your own keyboard uniquely with 300 themes, effects, lens and
        swipes ...
      </div>
    </div>
  );
}

export default Decorate;
