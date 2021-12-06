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
        <img
          srcSet="./imgs/decorate-1-app.png 2x"
          className={styles['ribbon-app']}
          alt=""
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
              styles['gradient-text']
            }
          >
            <div id="test" className={styles['header-description']}>
              Life is
              <strong
                className={styles['purple-gradient-text']}
              >{` much more interesting `}</strong>
              <br />
              when you have
              <strong className={styles['']}>{` a good taste in art!`}</strong>
            </div>
          </div>
          <div className={styles['image-container']}>
            <img
              src="./imgs/ellipse-2.png"
              alt="ellipse"
              className={styles['ellipse-2']}
            />
            <img
              src="./imgs/header-image-app.png"
              alt=""
              className={styles['ellipse-2-app']}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
