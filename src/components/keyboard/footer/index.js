import React, { useState } from 'react';
import styles from './index.module.css';
import Popup from '../popup';
import { enableScroll, disableScroll } from '../../../util/windowEvents';

const emailRegex = /^[a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;

function Footer(props) {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const validateEmail = () => {
    const emailInput = email.trim();
    if (!emailRegex.test(emailInput)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const validateContent = () => {
    if (!content) {
      setContentError(true);
    } else {
      setContentError(false);
    }
  };

  const handleSubmit = async () => {
    validateEmail();
    validateContent();
    if (!emailError && !contentError) {
      const data = { EMAIL: email, CONTENT: content.trim() };
      setPopup(true);
      props.showFirework();
      disableScroll();

      try {
        await fetch(
          'https://sheet.best/api/sheets/3a1f8078-cc7f-4448-a5ce-23f084ca5d09',
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );
        setEmail('');
        setContent('');
        setEmailError(true);
        setEmailError(true);
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  };

  const closePopup = () => {
    enableScroll();
    props.hideFirework();
    setPopup(false);
  };

  return (
    <>
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
              value={email}
              onChange={handleEmail}
              onBlur={validateEmail}
              // onFocus={validateEmail}
              style={
                emailError ? { outline: '1px solid red' } : { outline: 'none' }
              }
            />
          </div>
          <div className={styles['input-wrap']}>
            <textarea
              className={styles['textarea']}
              placeholder="Content"
              value={content}
              onChange={handleContent}
              onBlur={validateContent}
              style={
                contentError
                  ? { outline: '1px solid red' }
                  : { outline: 'none' }
              }
            ></textarea>
          </div>
          <div className={styles['input-wrap']}>
            <button className={styles['send-button']} onClick={handleSubmit}>
              Send
            </button>
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

        {popup && <Popup closePopup={closePopup} />}
      </div>
    </>
  );
}

export default Footer;
