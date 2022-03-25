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
            <a href="https://www.facebook.com/cutecalendar2022/" target="_blank" rel="noreferrer">
              <img className={styles["social-img"]} src="/social/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.pinterest.jp/ngocttbstarnest/_created/" target="_blank" rel="noreferrer">
              <img className={styles["social-img"]} src="/social/pinterest.png" alt="pinterest" />
            </a>
            <a href="https://www.tiktok.com/@plannerfor2022?_d=secCgYIASAHKAESPgo8tt0JxMcDtosnz5VeS1l1hmTj/A+GRDR7i6N+efq/Ot+T7t43Ne7CHCqeMD59L6HQFcld2wZ8RBDa8I6sGgA=&_r=1&checksum=d4860a4a5cf03e070ec9b8d76665b462a661afcbac93a3c3ee67cd5252d06ce9&language=vi&sec_uid=MS4wLjABAAAA4EDFo2WvDRhdnbXlMyCekj1yh0A1w-qZUhOoF2_dRXff1M-6BwjrkHvrlwyn4wy9&sec_user_id=MS4wLjABAAAA4EDFo2WvDRhdnbXlMyCekj1yh0A1w-qZUhOoF2_dRXff1M-6BwjrkHvrlwyn4wy9&share_app_id=1180&share_author_id=7078216668984083458&share_link_id=5F902CAA-810B-4EB6-8C07-07C2C5FE2AD8&source=h5_t&tt_from=messenger&u_code=e0mi019711glmm&user_id=7078216668984083458&utm_campaign=client_share&utm_medium=ios&utm_source=messenger" target="_blank" rel="noreferrer">
              <img className={styles["social-img"]} src="/social/tik-tok.png" alt="tik-tok" />
            </a>
            <a href="https://www.youtube.com/channel/UCsOiwphARg7RLreLIqjVQhw" target="_blank" rel="noreferrer">
              <img className={styles["social-img"]} src="/social/youtube.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
