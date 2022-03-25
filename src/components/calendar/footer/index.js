import { useState } from "react";
import styles from "./index.module.css";
import Popup from "../../keyboard/popup";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export default function Footer(props) {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
    validateContent(e.target.value);
  };

  const validateEmail = (email) => {
    const emailInput = email.trim();
    if (!emailRegex.test(emailInput)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const validateContent = (content) => {
    if (!content.trim()) {
      setContentError(true);
      return false;
    }
    setContentError(false);
    return true;
  };

  const handleSubmit = async () => {
    const valid = validateEmail(email) && validateContent(content);
    
    if (valid) {
      const data = { EMAIL: email, CONTENT: content.trim() };

      try {
        await fetch(
          "https://sheet.best/api/sheets/3a1f8078-cc7f-4448-a5ce-23f084ca5d09",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        setEmail("");
        setContent("");
        setEmailError(false);
        setEmailError(false);
        setPopup(true);
        props.showFirework();
      } catch (err) {
      }
    }
  };

  const closePopup = () => {
    props.hideFirework();
    setPopup(false);
  };

  return (
    <>
      <div className={styles["wrap-container"]}>
        <div className={styles["container"]} id="footer">
          <div className={styles["title"]}>
            <a href="/calendar">Calendar</a>
          </div>
          <div className={styles["wrap"]}>
            <div className={styles["contact"]}>
              <div>Contact us</div>
              <input
                type="text"
                placeholder="Your email"
                value={email}
                onChange={handleEmail}
                style={
                  emailError
                    ? { outline: "2px solid red" }
                    : { outline: "none" }
                }
              />
              <textarea
                type="text"
                placeholder="Content"
                value={content}
                onChange={handleContent}
                style={
                  contentError
                    ? { outline: "2px solid red" }
                    : { outline: "none" }
                }
              />
              <div className={styles["btn"] + " " + styles["btn-mobile"]}>
                <div>Send</div>
              </div>
            </div>
            <div className={styles["footer"]}>
              <div className={styles["paths"]}>
                <div>
                  <div>Product</div>
                  <a href="/calendar">Product</a>
                  <a href="/calendar">Features</a>
                  <a href="/calendar">Pricing</a>
                </div>
                <div>
                  <div>Company</div>
                  <a href="/calendar">Support</a>
                  <a href="/calendar">FAQs</a>
                  <a href="/calendar">Support</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["foot"]}>
            <div className={styles["btn"] + " " + styles["hide"]}>
              <div onClick={handleSubmit}>Send</div>
            </div>
            <div className={styles["copyright"]}>
              <div>Copyright © 2021</div>
            </div>
          </div>
          <img src="/imgs/shape1-calendar.png" alt="shape" />
        </div>
        {popup && <Popup closePopup={closePopup} />}
      </div>
    </>
  );
}
