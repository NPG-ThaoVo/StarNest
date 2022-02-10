// import { useState } from "react";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles["wrap-container"]}>
        <div className={styles["container"]} id="footer">
          <div className={styles["title"]}><a href="/calendar">Calendar</a></div>
          <div className={styles["wrap"]}>
            <div className={styles["contact"]}>
              <div>Contact us</div>
              <input type="text" placeholder="Your email" />
              <textarea type="text" placeholder="Content" />
              <div className={styles["btn"]+ " " +styles["btn-mobile"]}>
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
            <div className={styles["btn"] + " " + styles['hide']}>
              <div>Send</div>
            </div>
            <div className={styles["copyright"]}>
              <div>Copyright © 2021</div>
            </div>
          </div>
          <img src="imgs/shape1-calendar.png" alt="shape" />
        </div>
      </div>
    </>
  );
}
