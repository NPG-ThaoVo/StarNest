import { useState } from "react";
import styles from "./index.module.css";

export default function Feedbacks() {
  const [index, setIndex] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const data = [
    {
      content:
        "This app is a lifesaver it helps u to organise and follow your schedule!🖤♥️🖤♥️💜",
      avatar: "/imgs/avatar1-calendar.png",
      name: "Michelle",
      country: "America",
    },
    {
      content:
        "Love this app! I really enjoy the overall function and layout. Looks so cute. It really helps me to manage my tasks and assignment. Highly recommend.",
      avatar: "/imgs/avatar2-calendar.png",
      name: "Tom",
      country: "Canada",
    },
  ];

  function slice(index, mobile) {
    const array = [];
    for (let i = index; array.length < (mobile || 3); i = (i + 1) % data.length)
      array.push(data[i]);

    return array;
  }
  const array = isNext && slice(index);
  const arrayMobile = isNext && slice(index, 2);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Feedbacks</div>
        <div className={styles["feedbacks"]}>
          {!isNext ? (
            <>
              <Wrap order={1} data={data[0]} />
              <Wrap order={2} data={data[1]} />
            </>
          ) : (
            array.map((feedback, i) => (
              <Wrap order={i} data={feedback} key={Math.random()} />
            ))
          )}
        </div>
        <div className={styles["feedbacks-mobile"]}>
          {!isNext ? (
            <>
              <WrapMobile order={1} data={data[0]} />
            </>
          ) : (
            arrayMobile.map((feedback, i) => (
              <WrapMobile order={i} data={feedback} key={Math.random()} />
            ))
          )}
        </div>
        <div className={styles["next"]}>
          <div
            onClick={() => {
              setIndex((index + 1) % data.length);
              setIsNext(true);
            }}
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
        </div>
      </div>
    </>
  );
}

function Wrap({ order, data }) {
  return (
    <>
      <div
        className={
          order === 0
            ? styles["wrap-out"]
            : order === 1
            ? styles["wrap-left"]
            : styles["wrap-right"]
        }
      >
        <Feedback data={data} order={order} />
      </div>
    </>
  );
}

function WrapMobile({ order, data }) {
  return (
    <>
      <div
        className={
          order === 0 ? styles["wrap-out-mobile"] : styles["wrap-left-mobile"]
        }
      >
        <Feedback data={data} order={order} />
      </div>
    </>
  );
}

function Feedback({ data, order }) {
  return (
    <>
      <div className={styles["wrap"] + " " + (!order % 2 && styles["opacity"])}>
        <div className={styles["content"]}>{data.content}</div>
        <div className={styles["user"]}>
          <div
            className={styles["avatar"]}
            style={{ backgroundImage: `url(${data.avatar})` }}
          ></div>
          <div className={styles["profile"]}>
            <div>{data.name}</div>
            <div>{data.country}</div>
          </div>
        </div>
        <div
          className={
            styles["quote"]
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 20"
            fill="currentColor"
            width="24"
          >
            <path d="M11.1892 0.854146C10.4538 0.684434 9.66179 0.571289 8.75664 0.571289C3.72178 0.571289 0.214355 4.81415 0.214355 11.3764C0.214355 16.1284 2.3075 19.0136 5.64521 19.0136C8.53036 19.0136 10.5104 16.9204 10.5104 13.9787C10.5104 11.2633 8.36064 9.22672 5.64521 9.22672C4.57036 9.22672 3.60864 9.50957 2.64693 10.0187C2.81664 5.71929 5.41893 2.77758 8.86979 2.77758C9.49207 2.77758 10.0578 2.83415 10.6235 3.00386L11.1892 0.854146ZM23.7481 0.854146C23.0126 0.684434 22.2206 0.571289 21.3155 0.571289C16.2806 0.571289 12.7732 4.81415 12.7732 11.3764C12.7732 16.1284 14.8664 19.0136 18.2041 19.0136C21.0892 19.0136 23.0692 16.9204 23.0692 13.9787C23.0692 11.2633 20.9195 9.22672 18.2041 9.22672C17.1292 9.22672 16.1675 9.50957 15.2058 10.0187C15.3755 5.71929 17.9778 2.77758 21.4286 2.77758C22.0509 2.77758 22.6166 2.83415 23.1824 3.00386L23.7481 0.854146Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
