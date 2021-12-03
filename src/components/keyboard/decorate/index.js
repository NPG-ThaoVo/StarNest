import React from 'react';
import styles from './index.module.css';

function Decorate() {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        {/* <img src="./imgs/decorate-keyboard.png" alt="keyboard" /> */}
        <img
          srcSet="./imgs/decorate-keyboard-2x.png 2x"
          alt="keyboard"
          className={styles['image']}
        />
      </div>
      <div className={styles['title']}>
        Decorate, design your own keyboard uniquely with 300 themes, effects,
        lens and swipes ...
      </div>
    </div>
  );
}

export default Decorate;
