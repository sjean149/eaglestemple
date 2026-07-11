import React from "react";

export default function OriginalSin() {
  return (
    <div 
      className="original-sin-page-wrapper w-100 min-vh-100 text-light bg-black"
      style={{
        padding: "60px 20px"
      }}
    >
      <div className="container" style={{ maxWidth: "900px", marginTop: "40px" }}>
        {/* Your Original Sin layout content goes here */}
        <span className="text-warning text-uppercase tracking-widest fw-bold mb-2 d-block small">
          DOCTRINAL STUDY
        </span>
        <h1 className="display-4 fw-bold text-white mb-4" style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}>
          The Original Sin
        </h1>
        <p className="lead text-white-50" style={{ lineHeight: "1.7" }}>
          A deep structural exposition detailing the events of the Garden of Eden and the 
          mysteries hidden from the foundation of the world.
        </p>
      </div>
    </div>
  );
}