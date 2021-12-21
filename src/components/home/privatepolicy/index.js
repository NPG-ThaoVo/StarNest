import React from "react";
import styles from "./index.module.css";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

export default function Content() {
  return (
    <>
      <Header />
      <div className={styles["container-A"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>Kebo Keyboard Private Policy</h1>
          </div>
          <div className={styles["content"]}>
            <p>
              We present the following issues so that users can be aware of
              important information when using the Kebo application. We take the
              privacy of our users seriously. Information collection and use
            </p>
            <p>
              We DO NOT collect and send user input data to our servers. This is
              the most important statement to bring trust and safety to users
            </p>
            <p>
              Crash Data: We use Google Firebase to collect crash data from
              users (app closing errors, app crashes ...etc. It's not related to
              input data and personal information). This helps us to improve our
              products and services for all our users.
            </p>
            <p>
              Product Usage Metrics: We use Google Firebase to collect user
              usage data including device name, usage session, frequently used
              screens. This helps us to improve our products and services for
              all our users.
            </p>
            <p>
              Changes to this policy we may update to reflect changes to our
              information practices. If we make any material changes, we will
              notify users with a notice on our website before the change goes
              into effect. We encourage you to periodically review this page for
              the latest information on our privacy practices.
            </p>
            <p>
              Contact us If you have any questions regarding this Privacy
              Policy, you can contact us at{" "}
            <a href="mailto:?subject=StartNest QA&body=Question...">kebosupport@starnestsolution.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
