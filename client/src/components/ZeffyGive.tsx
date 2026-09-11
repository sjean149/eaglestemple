import React from "react";
export default function ZeffyGive() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "450px",
        width: "100%",
      }}
    >
      {" "}
      <iframe
        title="Donation form powered by Zeffy"
        src="https://www.zeffy.com/embed/donation-form/tithes-and-offering-62"
        style={{
          position: "absolute",
          border: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
        allow="payment"
      />{" "}
    </div>
  );
}
