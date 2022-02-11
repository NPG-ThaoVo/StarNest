import Component from "./component";
import Features from "./features";
import Feedbacks from "./feedback";
import Footer from "./footer";
import Header from "./header";
import styles from "./index.module.css";

const data = [
  {
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
  },
  {
    content: {
      title: "Connect all",
      subTitle: "of your calendars",
      content:
        "Keep everything in one place. Just in a few taps to your iCal, Google Calendar and Exchange",
    },
    display: 2,
    src: "/imgs/phone2-calendar.png",
  },
  {
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
    src: "/imgs/phone3-calendar.png",
  },
  {
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
    src: "/imgs/phone4-calendar.png",
  },
];

export default function Calendar() {
  return (
    <>
      <div className={styles["container"]}>
        <Header />
        {data.slice(0, 3).map((data, i) => (
          <Component
            blur={data.blur}
            wave={data.wave}
            content={data.content}
            display={data.display}
            src={data.src}
            key={i}
          />
        ))}

        <Features />
        <Component
          blur={data[3].blur}
          round={data[3].round}
          content={data[3].content}
          display={data[3].display}
          src={data[3].src}
        />
        <Feedbacks />
        <div className={styles["pink-blur"]} style={{ top: "120px", left: "-15%" }}></div>
        <div className={styles["pink-blur"]} style={{ bottom: "-150px", left: "-15%" }}></div>
      </div>
      <Footer />
    </>
  );
}
