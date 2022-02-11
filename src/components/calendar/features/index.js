import styles from "./index.module.css";

export default function Features() {
  const data = [
    {
      color: "#4ABB77",
      content: "Color code events and calendars",
    },
    {
      color: "#EB7E4F",
      content: "Todo list (your tasks list)",
    },
    {
      color: "#7977C8",
      content: "Hide calendars you don’t need",
    },
    {
      color: "#FFC15D",
      content: "Darkmode & lightmode",
    },
    {
      color: "#F86F90",
      content: "Secure with FaceID and passcode",
    },
    {
      color: "#4DD1CD",
      content: "Background effects",
    },
  ];

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Features you’ll love</div>
        <div className={styles["features"]}>
          {data.map((feature, i) => (
            <Feature
              order={i + 1}
              content={feature.content}
              color={feature.color}
              key={i}
            />
          ))}
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
        <div className={styles["content"]}>{content}</div>
      </div>
    </>
  );
}
