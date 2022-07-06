import React from "react";
import styles from "./index.module.css";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

export default function CalendarAndroidTermofuse() {
  return (
    <>
      <Header />
      <div className={styles["container-A"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>Calendar Terms of Use</h1>
          </div>
          <div className={styles["content"]}>
            <p>
              <strong>
                We respect and value your privacy here at StarNest Studios.
              </strong>
            </p>
            <p>
              <strong>Terms of Use</strong>
              <br />
              You need to read and understand the terms and conditions when
              using the application CUTE CALENDAR service. We provide CUTE
              CALENDAR services to help you live a happy and joyful life. We do
              not interfere and store any of your data information.
            </p>
            <p>
              CALENDAR, NOTES, TODO, DIARY, REMIND, HABIT, MEMO, WEATHER TRACKER
              all-in-one. The simplest and easiest in use are two elements that
              CUTE CALENDAR will bring to you.
            </p>
            <p>
              We do not store any of your data, all data is stored in your
              phone. When you delete the application, the data will be
              completely deleted according to the application. We value your
              privacy at Vu studio.
            </p>
            <p>
              We may use third-party advertising companies to serve ads when you
              visit the Application. These companies may use information about
              your visits to the Application and other websites that are
              contained in web cookies in order to provide advertisements about
              goods and services of interest to you. One of those partners is
              AppVestor, whom respects the users fundamental legal rights to
              data protection and privacy. Click on the following link to access
              AppVestor’s Privacy Policy{" "}
              <a href="https://legal.calldorado.com/privacy-policy/">
                https://legal.calldorado.com/privacy-policy/
              </a>
              <br />
              and End-User License Agreement{" "}
              <a href="https://legal.calldorado.com/usage-and-privacy-terms/">
                https://legal.calldorado.com/usage-and-privacy-terms/
              </a>
            </p>
            <p>
              <b>Contact us</b>
              <br /> If you have any questions about this Terms of Use the
              practices of this site, or your dealings with our Apps, please
              contact us at:
              <a href="mailto:?subject=StartNest QA&body=Question...">
                {" "}
                vu@starnestsolution.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
