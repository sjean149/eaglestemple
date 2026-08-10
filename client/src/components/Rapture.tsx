import React from 'react';

export default function Rapture() {
  return (
    <div className="rapture-page-wrapper w-100 min-vh-100 text-light bg-black" style={{ paddingTop: "100px" }}>
      <main className="container py-5" style={{ maxWidth: "1280px" }}>
        {/* Header Section */}
        <div className="text-center mb-5 px-3">
          <span className="text-warning text-uppercase tracking-widest fw-bold mb-2 d-block small">
            DOCTRINAL STUDY • ÉTUDE DOCTRINALE
          </span>
          <h1 
            className="display-4 fw-bold text-white mb-2" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            THE RAPTURE
          </h1>
          <h2 
            className="h4 text-warning fw-normal mb-4" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            LE RAPT ET LE RETOUR DU SEIGNEUR
          </h2>
          <hr className="border-warning opacity-25 w-25 mx-auto my-4" />
        </div>

        {/* Content Placeholder / Section */}
        <div className="p-4 rounded border border-secondary border-opacity-25 bg-dark">
          <p className="text-light mb-0">
            Study content for The Rapture will go here.
          </p>
        </div>
      </main>
    </div>
  );
}