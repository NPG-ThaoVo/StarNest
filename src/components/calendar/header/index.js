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
  useEffect(() => {
    const isOnView = () => {
      const isOn = isElementInViewport();
      setIsOnView(isOn)
    };
    isOnView();
    window.addEventListener("scroll", isOnView, false);

    return () => window.removeEventListener("scroll", isOnView, false);
  }, []);

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["calendar"]}>
          <a href="/calendar">Calendar</a>
        </div>
        <div className={styles["paths"]}>
          <a href="/calendar">Home</a>
          <a href="/calendar/#footer">Contact us</a>
          <div onClick={onClick}>
            <a
              href="https://apps.apple.com/us/app/id1585939051"
              target="_blank"
              rel="noreferrer"
            >
              Free Download
            </a>
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
        <div className={styles["btn"]} onClick={onClick} ref={btn}>
          <a
            href="https://apps.apple.com/us/app/id1585939051"
            target="_blank"
            rel="noreferrer"
          >
            Free Download
          </a>
        </div>
      </div>
    </>
  );
}
