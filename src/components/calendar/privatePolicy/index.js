import React from "react";
import styles from "./index.module.css";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

export default function CalendarPrivatepolicy() {
  return (
    <>
      <Header />
      <div className={styles["container-A"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>StarNest Studio Privacy</h1>
          </div>
          <div className={styles["content"]}>
            <p>We respect and value your privacy here at StarNest Studio.</p>
            <p>
              Our Privacy Policy describes the information collected by our
              StarNest Studios, and our partners, through our mobile
              applications and the use of the information.
            </p>
            <p>
              What third parties collect via our apps
              <br />
              We receive some information automatically when you use our Apps.
              This includes data about your device, software, operating system,
              the language you’ve set for your Device, advertising IDs for
              advertisement tracking (“Advertising IDs”) and your IP address.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              (for example, the email you sign in to the app, the email address
              you give us when you submit your web or email support request.
              we).
            </p>
            <p>
              When you make in-app purchases in the our Games or App, we do not
              collect or have any access to your name and billing information.
              This information is collected and stored by your platform
              (Android’s Google Play) or your platform’s payment processor.
            </p>
            <p>
              Few of our apps might use Google Analytics (third party scripts)
              that collect the following information and might (also) store such
              information as a cookie on the device you use to access our Apps:
              <br />
              Google Analytics:
              <br />
              Demographics (browser language, country, city);
              <br />
              System information (browser, OS, service provider);
              <br />
              Mobile (OS, service provider, screen resolution);
              <br />
              Site behaviour (which pages users visit, duration of visit);
            </p>
            <p>
              For more information about our partners’ practices, please visit
              the following links:
              <br />
              <a href="https://www.google.com/policies/privacy/partners/">
                https://www.google.com/policies/privacy/partners/
              </a>
            </p>
            <p>
              How we use this information collected in our Games
              <br />
              We collect this Information to improve performance and reliability
              of our App and to get a better understanding of what users in
              general prefer. We do not link any of this Information in any way
              to individuals or any other information we might obtain. We do not
              share, sell or in any other way give other persons or companies.
              We don’t rent or sell your email address.
            </p>
            <p>
              Changes to this privacy policy
              <br />
              StarNest Studios has the discretion to update this privacy policy
              at any time. When we do, we will revise the updated date at the
              bottom of this page. We encourage Users to frequently check this
              page for any changes to stay informed about how we are helping to
              protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to review this privacy policy
              periodically and become aware of modifications.
            </p>
            <p>
              Contacting us
              <br />
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with our Apps, please contact us
              at:
              <br />
              <a href="mailto:?subject=StartNest QA&body=Question...">
                {" "}
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
