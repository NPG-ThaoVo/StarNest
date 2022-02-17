import styles from "./index.module.css";
import { useState, useEffect } from "react";

export default function Features() {

  const data = [
    {
      color: "#4ABB77",
      content: "Color code events <br> and calendars",
    },
    {
      color: "#EB7E4F",
      content: "Todo list <br> (your tasks list)",
    },
    {
      color: "#7977C8",
      content: "Hide calendars <br> you don't need",
    },
    {
      color: "#FFC15D",
      content: "Darkmode & <br> lightmode",
    },
    {
      color: "#F86F90",
      content: "Secure with FaceID <br>and passcode",
    },
    {
      color: "#4DD1CD",
      content: "Background <br>effects",
    },
    {
      color: "#4ABA78",
      content: "Longlife <br> journal",
    },
    {
      color: "#F86F90",
      content: "Memo",
    },
    {
      color: "#FFC15D",
      content: "Create a new <br>habit",
    },
    {
      color: "#EB7E4F",
      content: "Sync <br> iCloud",
    },
  ];

  const [startFeature, setStartFeature] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false);
  const [renderList, setRenderList] = useState([0, 2, 4, 1, 3, 5]);

  useEffect(() => {
    if (window.innerWidth <= 700) setIsOnMobile(true);
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) setIsOnMobile(true);
      else setIsOnMobile(false);
    });
    return () => {
      window.removeEventListener("resize", () => { });
    };
  }, []);

  const setlistRender = (index) => {
    switch (index) {
      case 0:
        setRenderList([0, 2, 4, 1, 3, 5]);
        break;
      case 1:
        setRenderList([2, 4, 6, 3, 5, 7]);
        break;
      case 2:
        setRenderList([4, 6, 8, 5, 7, 9]);
        break;
    }
  }


  const handleNextButton = () => {
    setlistRender(startFeature + 1);
    setStartFeature(startFeature + 1);
    setIsNext(true);
    setIsFirstTime(false);
  }

  const handlePreviousButton = () => {
    setlistRender(startFeature - 1);
    setIsNext(false);
    setStartFeature(startFeature - 1);
  }

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Features you’ll love</div>
        <div className={styles["features"]}>
          {isOnMobile ? (
            data.map((feature, i) => (
              <Feature
                order={i + 1}
                content={feature?.content}
                color={feature?.color}
                key={i}
              />
            ))
          ) : (
            <>
              {renderList.map((feature, i) => (
                <div className={!isFirstTime ? (isNext ? styles["feature-move-left"] : styles["feature-move-right"]) : ""} key={i + Math.random()} >
                  <Feature
                    order={feature + 1}
                    content={data[feature]?.content}
                    color={data[feature]?.color}
                  />
                </div>
              ))}
              {(startFeature !== 2) && (
                <div
                  className={styles["right-icon"]}
                  onClick={handleNextButton}
                >
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
              )}
              {(startFeature !== 0) && (
                <div
                  className={styles["left-icon"]}
                  onClick={handlePreviousButton}
                >
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
              )}
            </>
          )}
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
          <div style={{ background: color }}>
            {(order === 10 ? "" : "0") + order}
          </div>
          <div style={{ background: color }}></div>
        </div>
        <div
          className={styles["content"]}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
