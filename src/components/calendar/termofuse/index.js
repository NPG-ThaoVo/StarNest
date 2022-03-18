import React from 'react';
import styles from './index.module.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default function CalendarTermofuse() {
  return (
    <>
      <Header />
      <div className={styles['container-A']}>
        <div className={styles['container']}>
          <div className={styles['title']}>
            <h1>Calendar Terms of Use</h1>
          </div>
          <div className={styles['content']}>
            <p>
              <strong>
                We respect and value your privacy here at V.u Studios.
              </strong>
            </p>
            <p>
              <strong>Terms of Use </strong>
              <br />
              You need to read and understand the terms and conditions when
              using the application CALENDAR CUTE service. We provide CALENDAR
              CUTE services to help you live a happy and joyful life. We do not
              interfere and store any of your data information.
            </p>
            <p>
              CALENDAR, NOTES, TODO, DIARY, REMIND, HABIT, MEMO all-in-one. The
              simplest and easiest in use are two elements that CALENDAR NEKO
              will bring to you.
            </p>
            <p>
              We do not store any of your data, all data is stored in your
              phone. When you delete the application, the data will be
              completely deleted according to the application. We value your
              privacy at Vu studio.
            </p>
            <p>
              We will add sync and backup your data with apple cloud kit in the
              future.
            </p>
            <p>
              <strong>Contact us</strong>
              <br /> If you have any questions about this{' '}
              <strong>Terms of Use</strong> the practices of this site, or your
              dealings with our Apps, please contact us at:
              <a href="mailto:?subject=StartNest QA&body=Question...">
                {' '}
                ngocttbstarnest@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
