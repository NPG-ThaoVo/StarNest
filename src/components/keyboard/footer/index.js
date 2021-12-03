import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const emailRegex =
  /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;

function Footer() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (emailError) console.log('Loi email');
    else console.log('Email ok');
    if (contentError) console.log('Loi content');
    else console.log('Content ok');
  };

  useEffect(() => {
    emailRegex.test(email.toLowerCase())
      ? setEmailError(false)
      : setEmailError(true);

    content ? setContentError(false) : setContentError(true);
  }, [email, content]);

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
            value={email}
            onChange={handleEmail}
            style={emailError ? { border: 'red' } : { border: 'none' }}
          />
        </div>
        <div className={styles['input-wrap']}>
          <textarea
            className={styles['textarea']}
            placeholder="Content"
            value={content}
            onChange={handleContent}
            style={contentError ? { border: 'red' } : { border: 'none' }}
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
    </div>
  );
}

export default Footer;
