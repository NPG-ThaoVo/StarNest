import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
export default function Header({ setIsOnView }) {
  const [open, setOpen] = useState(false);
  const btn = useRef();
  function onClick(e) {
    e.target?.children[0]?.click();
  }
  function isElementInViewport() {
    if (!btn.current) return false;

    var rect = btn.current.getBoundingClientRect();

    return (
      rect.top >= -80 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
  useEffect(() => {
    const isOnView = () => {
      const isOn = isElementInViewport();
      setIsOnView(isOn)
    };
    isOnView();
    window.addEventListener("scroll", isOnView, false);

    return () => window.removeEventListener("scroll", isOnView, false);
  }, []);

  useEffect(() => {
    const os = getMobileOperatingSystem();
    console.log("OS: ", os);
  }, [])

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["calendar"]}>
          <a href="/calendar">Calendar</a>
        </div>
        <div className={styles["paths"]}>
          <a href="/calendar">Home</a>
          <a href="/calendar/#footer">Contact us</a>
          <div className={styles["cov-button"]} onClick={onClick}>
            <a
              href="https://apps.apple.com/us/app/id1585939051"
              target="_blank"
              rel="noreferrer"
            >
              Free Download
            </a>
            <span className={styles["blur-dot-sm"]}></span>
          </div>
         
        </div>
       
        <div className={styles["paths-mobile"]}>
          <img
            src="/imgs/menu.svg"
            alt="menu button"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className={styles["menu-mobile"]}>
            <a href="/calendar">Home</a>
            <a href="/calendar/#footer">Contact us</a>
            <div>
              <a
                href="https://apps.apple.com/us/app/id1585939051"
                target="_blank"
                rel="noreferrer"
              >
                Free Download
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={styles["banner"]}>
        <img src="/imgs/logo-calender.png" alt="" />
        <div className={styles["title"]}>
          <div>Calendar</div>
          <div>CUTE</div>
        </div>
        <div className={styles["subtitle"]}>
          Improve your performance, get your work done with the best app on
          iPhone and iPad.
        </div>
        <div className={styles["btn-blur"]} onClick={onClick} ref={btn}>
          <a
            href="https://apps.apple.com/us/app/id1585939051"
            target="_blank"
            rel="noreferrer"
          >
            Free Download
          </a>
          <span className={styles["blur-dot-lg"]}></span>
        </div>
        <div className={styles["social-media"]}>
          Follow Me
          <div className={styles['social-img-wrapper']}>
            <img className={styles["social-img"]} src="/social/facebook.png" alt="facebook" />
            <img className={styles["social-img"]} src="/social/pinterest.png" alt="pinterest" />
            <img className={styles["social-img"]} src="/social/tik-tok.png" alt="tik-tok" />
            <img className={styles["social-img"]} src="/social/youtube.png" alt="youtube" />
          </div>
        </div>
      </div>
    </>
  );
}
