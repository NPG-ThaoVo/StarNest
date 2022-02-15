import styles from "./index.module.css";
import { useState, useEffect } from 'react';

export default function Features() {

  const [isRightFeature, setIsRightFeature] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 700) setIsOnMobile(true);
    window.addEventListener('resize', () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) setIsOnMobile(true);
      else setIsOnMobile(false);
    });
    return () => {
      window.removeEventListener('resize', () => { });
    }
  }, []);

  const data = [
    {
      color: "#4ABB77",
      content: "Color code events and <br> calendars",
    },
    {
      color: "#EB7E4F",
      content: "Todo list <br> (your tasks list)",
    },
    {
      color: "#7977C8",
      content: "Hide calendars <br> you don’t need",
    },
    {
      color: "#FFC15D",
      content: "Darkmode & <br> lightmode",
    },
    {
      color: "#F86F90",
      content: "Secure with FaceID and <br> passcode",
    },
    {
      color: "#4DD1CD",
      content: "Background <br>effects",
    },
    {
      color: '#4ABA78',
      content: 'Longlife <br> journal'
    },
    {
      color: '#F86F90',
      content: 'Memo'
    },
    {
      color: '#FFC15D',
      content: 'Create a new <br>habit'
    },
    {
      color: '#EB7E4F',
      content: 'Sync <br> iCloud'
    }
  ];

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Features you’ll love</div>
        <div className={styles[isRightFeature ? "right-features" : "features"]}>
          {isOnMobile ?
            data.map((feature, i) => (
              <Feature
                order={i + 1}
                content={feature.content}
                color={feature.color}
                key={i}
              />
            )) :
            <>
              {!isRightFeature ?
                data?.slice(0, 6).map((feature, i) => (
                  <Feature
                    order={i + 1}
                    content={feature.content}
                    color={feature.color}
                    key={i}
                  />
                )) :
                data?.slice(6).map((feature, i) => (
                  <Feature
                    order={i + 7}
                    content={feature.content}
                    color={feature.color}
                    key={i}
                  />
                ))}
              {!isRightFeature ?
                <div className={styles["right-icon"]} onClick={() => setIsRightFeature(true)} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M11 1L20 10L11 19M0 10H20H0Z"
                      stroke="#333333"
                      strokeWidth="2"
                    />
                  </svg>
                </div> :
                <div className={styles["left-icon"]} onClick={() => setIsRightFeature(false)} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M11 1L20 10L11 19M0 10H20H0Z"
                      stroke="#333333"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              }
            </>
          }
        </div>
      </div>
    </>
  );
}

function Feature({ order, content, color }) {
  return (
    <>
      <div className={styles["wrap"]}>
        <div className={styles["order"]}>
          <div style={{ background: color }}>{(order === 10 ? "" : "0") + order}</div>
          <div style={{ background: color }}></div>
        </div>
        <div className={styles["content"]} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
}
