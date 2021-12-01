import React from 'react';
import styles from './index.module.css';

function Ribbon() {
  return (
    <div className={styles['container']}>
      <img
        src="./imgs/decorate-1.png"
        className={styles['decoration-1']}
        alt="decoration"
      />
    </div>
  );
}

export default Ribbon;
