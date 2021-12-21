import React from "react";
import styles from "./index.module.css";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

export default function Termsofuse() {
  return (
    <>
      <Header />
      <div className={styles["container-A"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>Kebo Terms of Use</h1>
          </div>
          <div className={styles["content"]}>
            <p>
              First of all, we respect and take our user’s data seriously. We DO
              NOT save personal information and user input at all.
            </p>
            <p>
              You need to read to understand the terms and conditions when using
              the KEBO application. The KEBO app helps you live a happier life,
              with a youthful, colorful design and improved performance.
            </p>
            <p>
              Unlimited creative art with KEBO.
              <br /> KEBO brings you a more interesting and colorful life. With
              +2000 emojis, +60 fonts, +200 keyboard themes to help you and your
              friends talk more lively and cheerful. Make your posts or chats on
              WhatsApp, Tiktok, Instagram, Messenger, Facebook, Snapchat, SMS,
              whatever app you're using come to life rich and distinct.
              <br /> You can create your own custom keyboard with the tools we
              have prepared.
              <br />
              The colorful world in your hands: LED, galaxy, universe, anime,
              nature, flowers, love … Or you can choose the keyboard that we
              have designed.
              <br /> Increased productivity with KEBO
              <br /> Automatic chat feature. You can create sample sentences
              like "It's a beautiful today", "I miss you" and automatically
              reply to messages or spam happily with friends with 1 click. The
              auto-translate feature is embedded in the keyboard so you don't
              need to switch to another application to translate. You can chat
              with friends all over the world with the interpreter chat desk.
              Automatically translate into the languages you need.
              <br /> Fast typing and smart suggestions
              <br /> Swiping keyboard: Type faster by swiping the keyboard
              smoothly.
              <br /> GIF: lots of funny GIFs are FREE
              <br /> Express your mood with GIF
              <br /> Create a unique and personal Tiktok, Instagram Profile with
              lots of creative fonts. Creative KAOMOJI
              <br /> Keyboard effects, music, a creative world are waiting for
              you to experience. We work hard to bring you guys a beautiful
              life. Please support us to develop a more perfect product by
              leaving a comment about your experience.
              <br /> We respect the copyright of the authors, all images or
              icons if there is a dispute or complaint, please contact
              <a href="mailto:?subject=StartNest QA&body=Question..."> kebosupport@starnestsolution.com</a>
            </p>
            <p>
              <strong>Information collection and use</strong>
              <br /> We DO NOT collect and send user input data to our servers.
              This is the most important statement to bring trust and safety to
              users
              <br /> Crash Data: We use Google Firebase to collect crash data
              from users (app closing errors, app crashes...etc it's not related
              to input data and personal information). This helps us to improve
              our products and services for all our users.
              <br /> Product Usage Metrics: We use Google Firebase to collect
              user usage data including device name, usage session, frequently
              used screens. This helps us to improve our products and services
              for all our users.
            </p>
            <p>
              <strong>Contact us</strong>
              <br /> If you have any questions regarding this Kebo Terms of Use
              you can contact us at
              <a href="mailto:?subject=StartNest QA&body=Question..."> kebosupport@starnestsolution.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
