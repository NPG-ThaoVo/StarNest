import React from 'react';
import styles from './index.module.css';

function Popup(props) {
  return (
    <div className={styles['popup']}>
      <div className={styles['popup-container']}>
        <img
          src="./imgs/close-icon.svg"
          alt=""
          className={styles['popup-close']}
          onClick={props.closePopup}
        />
        <div className={styles['popup-main-wrapper']}>
          <div className={styles['popup-image-wrapper']}>
            <img
              src="./imgs/icon-popup.svg"
              alt=""
              style={{ display: 'block' }}
              className={styles['popup-icon']}
            />
          </div>
          <div className={styles['popup-alert']}>
            <div className={styles['popup-title']}>
              <strong>Congratulation!!!</strong>
            </div>
            <span className={styles['popup-description']}>
              We have received the information and are processing it in two
              working days
            </span>
          </div>
          <div className={styles['popup-button-wrapper']}>
            <button
              className={styles['popup-button']}
              onClick={props.closePopup}
            >
              <strong>GOT IT THANKS!</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
