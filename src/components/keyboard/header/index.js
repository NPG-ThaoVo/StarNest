import React from 'react';
import styles from './index.module.css';

function Header() {
  return (
    <>
      <div className={styles['ribbon-container']}>
        <img
          src="./imgs/decorate-1.png"
          className={styles['ribbon']}
          alt="decoration"
        />
      </div>
      <div className={styles['container']}>
        <div className={styles['header-wrap']}>
          <div className={styles['ellipse-1-container']}>
            <img
              src="./imgs/ellipse-1.png"
              alt="decoration"
              className={styles['ellipse-1']}
            />
          </div>
          <div
            className={
              styles['header-title'] +
              ' ' +
              styles['header-content'] +
              ' ' +
              styles['pink-text']
            }
          >
            {/* <span className={styles['header-content']}> */}
            {/* <span className={styles['pink-text']}>{`Life is `}</span> */}
            {/* Life is
            <strong
              className={styles['purple-gradient-text']}
            >{` much more interesting `}</strong>
            <span className={styles['gradient-text']}>
              when you have
              <strong>{` a good taste in art!`}</strong>
            </span> */}
            {/* </span> */}
            <p id="test">
              Life is
              <strong
                className={styles['purple-gradient-text']}
              >{` much more interesting `}</strong>
              <br />
              when you have
              <strong
                className={styles['gradient-text']}
              >{` a good taste in art!`}</strong>
            </p>
          </div>
          <div className={styles['image-container']}>
            <img
              src="./imgs/ellipse-2.png"
              alt="ellipse"
              className={styles['ellipse-2']}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
