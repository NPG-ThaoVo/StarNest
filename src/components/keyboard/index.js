import React, { useRef, useEffect } from "react";
import Header from "./header";
import Translation from "./translation";
import Fonts from "./fonts";
import Footer from "./footer";
import Decorate from "./decorate";
import Download from "./download";
import Astyles from "./footer/animate.module.css";
import Confettiful from "../../util/firework";

const Keyboard = () => {
  const refs = useRef();

  const showFirework = () => {
    refs.current.style.display = "block";
  };

  const hideFirework = () => {
    refs.current.style.display = "none";
  };

  useEffect(() => {
    new Confettiful(refs.current, Astyles);
    refs.current.style.display = "none";
  }, []);

  return (
    <div
      style={{
        fontFamily: "Helvetica",
        position: "relative",
        paddingTop: "1px",
      }}
    >
      <div id="animate" className={Astyles["container"]} ref={refs}></div>
      <Header></Header>
      <Decorate></Decorate>
      <Translation></Translation>
      <Fonts></Fonts>
      <Download></Download>
      <Footer showFirework={showFirework} hideFirework={hideFirework}></Footer>
    </div>
  );
};

export default Keyboard;
