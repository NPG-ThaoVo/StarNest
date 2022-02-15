import styles from "./index.module.css";
import { useState } from 'react';

export default function Features() {

  const [isRightFeature, setIsRightFeature] = useState(false);

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
  ];

  const data1 = [
    data[2],
    {
      color: '#4ABA78',
      content: 'Longlife <br> journal'
    },
    {
      color: '#F86F90',
      content: 'Memo'
    },
    data[5],
    {
      color: '#FFC15D',
      content: 'Create a new <br>habit'
    },
    {
      color: '#EB7E4F',
      content: 'Sync <br> iCloud'
    }
  ]

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Features you’ll love</div>
        <div className={styles["features"]}>
          {!isRightFeature ?
            data.map((feature, i) => (
              <Feature
                order={i + 1}
                content={feature.content}
                color={feature.color}
                key={i}
              />
            )) :
            data1.map((feature, i) => (
              <Feature
                order={i + 1}
                content={feature.content}
                color={feature.color}
                key={i}
              />
            ))}
          <div className={styles["right-icon"]} onClick={() => setIsRightFeature(!isRightFeature)} >
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
          <div style={{ background: color }}>{"0" + order}</div>
          <div style={{ background: color }}></div>
        </div>
        <div className={styles["content"]} dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
}
