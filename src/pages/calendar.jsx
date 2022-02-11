import React from "react";
import Calendar from "../components/calendar";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#fdefe6",
        overflow: "hidden",
      }}
    >
      <Calendar />
    </div>
  );
};

export default Index;
