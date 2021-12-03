import React from 'react';
import styles from './index.module.css';

function Footer() {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div>
          <strong className={styles['header']}>KEBO</strong>
        </div>

        <div>
          <span className={styles['description']}>
            Follow us and keep updated!
          </span>
        </div>

        <div className={styles['social-media']}>
          <div className={styles['social-btn']}>
            <img src="./imgs/facebook.png" alt="facebook" />
          </div>
          <div className={styles['social-btn']}>
            <img src="./imgs/instagram.png" alt="instagram" />
          </div>
        </div>
      </div>
      <div className={styles['form']}>
        <div className={styles['input-wrap']}>
          <input
            type="text"
            className={styles['input']}
            placeholder="Your email"
          />
        </div>
        <div className={styles['input-wrap']}>
          <textarea
            className={styles['textarea']}
            placeholder="Content"
          ></textarea>
        </div>
        <div className={styles['input-wrap']}>
          <button className={styles['send-button']}>Send</button>
        </div>
      </div>
      <img
        src="./imgs/decorate-2.png"
        className={styles['decorate-1']}
        alt="decoration"
      />
      <img
        src="./imgs/decorate-3.png"
        className={styles['decorate-2']}
        alt="decoration"
      />

      <img
        srcSet="./imgs/decorate-2-app.png 2x"
        className={styles['decorate-1-app']}
        alt="decoration"
      />
      <img
        srcSet="./imgs/decorate-3-app.png 2x"
        className={styles['decorate-2-app']}
        alt="decoration"
      />
    </div>
  );
}

export default Footer;
