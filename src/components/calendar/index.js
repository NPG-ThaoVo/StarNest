import { useState } from "react";
import Component from "./component";
import Features from "./features";
import Feedbacks from "./feedback";
import Footer from "./footer";
import Header from "./header";
import styles from "./index.module.css";
import AStyles from "../keyboard/footer/animate.module.css";
import Confettiful from "../../util/firework";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    content: {
      title: "A nice application",
      subTitle: "Intensive and easy to use",
      content: "Track your work and events in progress easily",
    },
    blur: {
      x: "90%",
      y: "-400px",
    },
    wave: true,
    display: 1,
    src: "/imgs/phone1-calendar.png",
    // src: "/imgs/mobile-nice-app.png",
  },
  {
    id: 2,
    content: {
      title: "Connect all",
      subTitle: "of your calendars",
      content:
        "Keep everything in one place. Just in a few taps to your iCal, Google Calendar and Exchange",
    },
    display: 2,
    // src: "/imgs/phone2-calendar.png",
    src: "/imgs/mobile-connect.png",
  },
  {
    id: 3,
    content: {
      title: "Complete more",
      subTitle: "assignments and tasks",
      content:
        "Smart reminder helps your life is much more restful and you will not miss your tasks",
    },
    display: 1,
    blur: {
      x: "-240px",
      y: "70%",
    },
    // src: "/imgs/phone3-calendar.png",
    src: "/imgs/mobile-complete-more.png"
  },
  {
    id: 4,
    content: {
      title: "Advance reminder",
      subTitle: "for important events",
      content: "Set up all the events for the app to remind you",
    },
    blur: {
      x: "85%",
      y: "70%",
    },
    round: {
      x: "74%",
      y: "94%",
    },
    display: 2,
    // src: "/imgs/phone4-calendar.png",
    src: "/imgs/mobile-advance.png"
  },
];

export default function Calendar() {
  const [isOnView, setIsOnView] = useState(true);
  const refs = useRef();

  function setShow(onView) {
    if (onView) return false;
    else return true;
  }
  const showButton = setShow(isOnView);

  const showFirework = () => {
    refs.current.style.display = "block";
  };

  const hideFirework = () => {
    refs.current.style.display = "none";
  };

  useEffect(() => {
    new Confettiful(refs.current, AStyles);
    refs.current.style.display = "none";
  }, []);

  return (
    <>
      <DownloadButton showButton={showButton} />
      <div className={styles["container"]}>
        <div id="animate" className={AStyles["container"]} ref={refs}></div>
        <Header setIsOnView={(is) => setIsOnView(is)} />
        {data.slice(0, 3).map((data, i) => (
          <Component
            blur={data.blur}
            wave={data.wave}
            content={data.content}
            display={data.display}
            src={data.src}
            key={i}
            id={data.id}
          />
        ))}

        <Features />
        <Component
          blur={data[3].blur}
          round={data[3].round}
          content={data[3].content}
          display={data[3].display}
          src={data[3].src}
          id={data[3].id}
        />
        <Feedbacks />
        <div
          className={styles["pink-blur"]}
          style={{ top: "120px", left: "-15%" }}
        ></div>
        <div
          className={styles["pink-blur"]}
          style={{ bottom: "-150px", left: "-15%" }}
        ></div>
      </div>
      <Footer showFirework={showFirework} hideFirework={hideFirework} />
    </>
  );
}

function DownloadButton({ showButton }) {
  const [os, setOs] = useState("");

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent) || /windows/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) || /macintosh/i.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
  }

  useEffect(() => {
    const currentOs = getMobileOperatingSystem();
    if (currentOs == "Android") {
      setOs("https://play.google.com/store/apps/details?id=com.calendar.cute");
    } 
    if (currentOs == "iOS") {
      setOs("https://apps.apple.com/us/app/id1585939051")
    }
  }, [os])

  return (
    <a className={styles["wrap-btn-download"]}
      // href="https://apps.apple.com/us/app/id1585939051"
      href={os}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={
          styles["download"] + " " + (showButton ? styles["show-download"] : "")
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" fill="#FFF">
          <path d="M211.667,127.121l-31.669,31.666V75c0-8.285-6.716-15-15-15c-8.284,0-15,6.715-15,15v83.787l-31.665-31.666   c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.859-5.858,15.355,0,21.213l57.271,57.271c2.929,2.93,6.768,4.395,10.606,4.395   c3.838,0,7.678-1.465,10.607-4.393l57.275-57.271c5.857-5.857,5.858-15.355,0.001-21.215   C227.021,121.264,217.524,121.264,211.667,127.121z" />
          <path d="M195,240h-60c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15h60c8.284,0,15-6.717,15-15C210,246.715,203.284,240,195,240z   " />
        </svg>
      </div>
      <div className={
        styles["btn-download-text"] + " " + (showButton ? styles["show-download"] : "")
      }
      >
        Download
      </div>
    </a>
  );
}
