import React, { useState } from "react";
import waterGif from "./images/water.gif";

export default function WaterBaptism() {
  // Shared state to track the currently hovered section/point ID across both columns
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // --- DATA STRUCTURES (Q&As & TRUTHS) ---
  const qaSections = [
    {
      id: "qa-a",
      letter: "a",
      enQ: "What does it mean to be baptized?",
      enA: "Baptize comes from the Greek word “Baptizein,” which means to immerse or sink. To be baptized means to be immersed in water in the name of the Lord Jesus Christ. Baptism is a vow with God (1 Pe 3:20-21. Ac 2:38).",
      frQ: "Que veut dire baptiser?",
      frA: "Baptiser vient du mot Grec “Baptizein” qui signifie immerger ou plonger. Etre baptisé veut dire être immergé dans l’eau dans le nom du Seigneur Jésus Christ. Le baptême est un engagement envers Dieu (1 Pe 3:20-21. Ac 2:38)."
    },
    {
      id: "qa-b",
      letter: "b",
      enQ: "Why should a person receive baptism by immersion in water instead of by effusion, sprinkling or other methods?",
      enA: "Water baptism identifies the believer with the death, burial and resurrection of Jesus Christ (Ro 6:4: Ac 10:47; Ep 5:26; Jn 4:1-2).",
      frQ: "Pourquoi une personne doit-elle recevoir le baptême par immersion dans l’eau au lieu d’effusion, d’aspersion ou d’autres façons?",
      frA: "Le baptême d’eau identifie le croyant à la mort, l’ensevelissement et la résurrection de Jésus Christ (Ro 6:4: Ac 10:47; Ep 5:26; Jn 4:1-2)."
    },
    {
      id: "qa-c",
      letter: "c",
      enQ: "In what name should a person be baptized?",
      enA: "Everyone should be baptized in the name of the Lord Jesus Christ, who is the true God (Ac 4:12; 8: 5, 14-17; 19:1-7; Col 3:17; Phi 2:10; 1 Jn 5:20; Ac 2:38).",
      frQ: "Dans quel nom doit-on baptiser?",
      frA: "Tout le monde doit être baptisé dans le nom du Seigneur Jésus Christ, qui est le Dieu véritable (Ac 4:12; 8: 5, 14-17; 19:1-7; Col 3:17; Phi 2:10; 1 Jn 5:20; Ac 2:38)."
    },
    {
      id: "qa-d",
      letter: "d",
      enQ: "Is there any requirement to meet in order to receive baptism?",
      enA: "To receive baptism one must repent and believe in Jesus Christ as Lord and Savior (Ac 8:36-38; Ac 2:38).",
      frQ: "Il y a t’il aucune condition à remplir pour recevoir le baptême?",
      frA: "Pour recevoir le baptême on doit se repentir et croire en Jésus Christ comme Seigneur et Sauveur (Ac 8:36-38; Ac 2:38)."
    },
    {
      id: "qa-e",
      letter: "e",
      enQ: "Who can get baptized?",
      enA: "Anyone who repents and consents to water baptism in the name of the Lord Jesus Christ should get baptized (Mk16:16; Ac 8:12; Mt 3:13; Mk 2:17; Mt 11:28).",
      frQ: "Qui peut-être baptisé?",
      frA: "Quiconque se repent et consent au baptême d’eau dans le nom du Seigneur Jésus Christ doit être baptisé (Mc 16:16; Ac 8:12; Mt 3:13; Mc 2:17; Mt 11:28)."
    },
    {
      id: "qa-f",
      letter: "f",
      enQ: "When should a person get baptized?",
      enA: "A person should get baptized as soon as he/she repents, desires baptism, and finds water (Ac 8:36; Ac 16:32-34; Ac 22:16; Ac 2:41).",
      frQ: "Quand doit-on recevoir le baptême?",
      frA: "Une personne doit se faire baptiser aussitôt qu’elle se repent, désire le baptême, et rencontre de l’eau (Ac 8:36; Ac 16:32-34; Ac 22:16; Ac 2:41)."
    },
    {
      id: "qa-g",
      letter: "g",
      enQ: "Why should a person be baptized?",
      enA: "Every person should repent and be baptized in the name of the Lord Jesus Christ in order to receive forgiveness of sins and the Holy Spirit (Mk 16:16; Ro 3:23; Ac 2:38-39).",
      frQ: "Pourquoi doit-on recevoir le baptême?",
      frA: "Chaque personne doit se repentir et être baptisée dans le nom du Seigneur Jésus Christ en vue de recevoir le pardon des pêchés et le Saint Esprit (MK 16 :16 ; Ro 3:23; Ac 2:38-39)."
    }
  ];

  const truths = [
    {
      id: "t-1",
      num: 1,
      en: "Babies were never baptized in the Bible. To be baptized one must believe (Mc 16:16), repent (Ac 2:38), and be immersed in water (1Pi 3:20-21, Mt 3:16).",
      fr: "Aucun bébé dans la Bible n’a jamais été baptisé. Pour être baptisé on doit croire (Mc 16:16), se repentir (Ac 2:38), et être immergé dans l’eau (1Pi 3:20-21, Mt 3:16)."
    },
    {
      id: "t-2",
      num: 2,
      en: "No one was baptized in the Bible by pouring or sprinkling. People were baptized (immersed) in the Jordan (Mt 3:6). Jesus went up straightway out of the water (Mt 3:16).",
      fr: "Personne dans la Bible n’a jamais été baptisé par effusion ou aspersion. Des gens furent baptisés (immergés) dans le Jourdain (Mt 3:6). Jésus sortit de l’eau (Mt 3:16)."
    },
    {
      id: "t-3",
      num: 3,
      en: "Nobody in the Bible was ever baptized in the titles Father, Son, and Holy Spirit. Thousands of people were baptized in the name of the Lord Jesus Christ (Ac 2:36-41; 8:5,14-16; 10:48; 19:1-7; 22:16; 1 Co 1:11-13).",
      fr: "Personne dans la Bible n’a jamais été baptisé dans les titres de Père, Fils et Saint Esprit. Des milliers de gens furent baptisés dans le nom du Seigneur Jésus Christ (Ac 2:36-41; 8:5,14-16; 10:48; 19:1-7; 22:16; 1 Co 1:11-13)."
    },
    {
      id: "t-4",
      num: 4,
      en: "The Bible calls the devil father, son, and spirit (Jn 8:44; Es 14:12; Mc 1:23-27; Co 3:17). Many people (Spanish and others) are called Jesus, but there is only one Lord Jesus Christ (Ac 2:36; 13:6; Lu 3:29; 1 Co 8:6).",
      fr: "Le diable est appelé père, fils et esprit dans la Bible (Jn 8:44; Es 14:12; Mc 1:23-27; Co 3:17). Beaucoup de gens (Latinos et autres) sont appelés Jésus, mais il y a un seul Seigneur Jésus Christ (Ac 2:36; 13:6; Lu 3:29; 1 Co 8:6)."
    },
    {
      id: "t-5",
      num: 5,
      en: "Jesus did not tell the apostles to repeat the titles Father, Son, and Holy Ghost during baptisms. He told them to use the name of the Father, and of the Son, and of the Holy Ghost. That name is Lord Jesus Christ (Mt 28:19; Ac 2:36-38; Mt 1:21; Lu 1:31; Col 3:17; Phi 2:10: Ac 4:10-12; Jn 1:1-2, 14; 14:10; 2 Co 5:19; Es 9:5; 35:4-6).",
      fr: "Jésus n’a pas demandé aux apôtres de répéter les titres Père, Fils, et Saint Esprit lors du baptême. Il les a demandés d’utiliser le nom du Père, du Fils et du Saint Esprit. Ce nom est seigneur Jésus Christ (Mt 28:19; Ac 2:36-38; Mt 1:21; Lu 1:31; Col 3:17; Phi 2:10: Ac 4:10-12; Jn 1:1-2,14; 14:10; 2 Co 5:19; Es 9:5; 35:4-6)."
    },
    {
      id: "t-6",
      num: 6,
      en: "Only one verse in the Bible (Mt 28:19) mentions Father, Son and Holy Spirit in connection with baptism, but no baptism was performed in Mt 28:16-20. Matthew and the other apostles knew that the name of the son is Jesus (Mt 1:21), the father is the Holy Spirit (Jn 4:24; Lu 2:35) and has the same name as the son (Jn 5:43; 14:8-10; 1Jn 5:20).",
      fr: "Un seul verset dans la Bible (Mt 28:19) mentionne Père, Fils et Saint Esprit en rapport au baptême, mais il n’y avait aucun baptême effectué en Mt 28:16-20. Mathieu et les autres apôtres savaient que le nom du fils est Jésus (Mt 1:21), le père est le Saint Esprit (Jn 4:24; Lu 2:35) et porte le même nom que le fils (Jn 5:43; 14:8-10; 1Jn 5:20)."
    },
    {
      id: "t-7",
      num: 7,
      en: "According to Mt 28:16-20, the first apostles were commissioned to baptize people. They never baptized anyone in the titles of Father, Son and Holy Ghost. They ordered everyone (Jews, Samaritans, and Gentiles) to repent and be baptized in the name of Jesus Christ (Ac 2:36-39; 8: 5, 14-17; 10:24,48;19:1-7).",
      fr: "Selon Mt 28:16-20, les premiers apôtres reçurent la commission de baptiser les gens. Ils ne baptisèrent personne dans les titres de Père, Fils et Saint Esprit. Ils ordonnèrent à tout le monde (Juifs, Samaritains, et Païens) de se repentir et d’être baptisé dans le nom de Jésus Christ (Ac 2:36-39; 8:5,14-17; 10:24, 48; 19:1-7)."
    },
    {
      id: "t-8",
      num: 8,
      en: "The apostles were filled with the Holy Ghost before they baptized about 3000 people in the name of Jesus Christ on the day of Pentecost. The Holy Ghost, which is the Spirit of God, was at that time in them, teaching and guiding them into all truth (Ac 2:4; 2:38-41; Jn 14:26; 16:13).",
      fr: "Les apôtres furent remplis du Saint Esprit avant de baptiser environ 3000 personnes dans le nom de Jésus Christ le jour de la Pentecôte. Le Saint Esprit, qui est l’Esprit de Dieu, était à ce moment là en eux, les enseignant et les guidant dans toute la vérité (Ac 2:4; 2:38-41; Jn 14:26; 16:13)."
    },
    {
      id: "t-9",
      num: 9,
      en: "Jesus performed great miracles through the apostles, showing that he approved their ministry and their teaching about water baptism and other doctrines (Ac 3:1-8; 5:1-10; 5:15-16; 8:32-41; 12:6-11; 13:4-12; 14:8-10; 28:3-6; He 6:2). God wants everyone to obey the apostles’ teachings (Mt 10:40; 28:20; Jn 17:20; Jn 4:1-2; 21:17; Ac 5:19-20; 1 Co 3:10-12; Ga 1:8; Ep 2:20).",
      fr: "Jésus a accompli de grands miracles à travers les apôtres, montrant qu’il a approuvé leur ministère et leur enseignement sur le baptême d’eau et les autres points doctrinaux (Ac 3:1-8; 5:1-10; 5:15-16; 8:32-41; 12:6-11; 13:4-12; 14:8-10; 28:3-6; He 6:2). Dieu veut que tout le monde obéisse aux enseignements des apôtres (Mt 10:40; 28:20; Jn 17:20; Jn 4:1-2; 21:17; Ac 5:19-20; 1 Co 3:10-12; Ga 1:8; Ep 2:20)."
    },
    {
      id: "t-10",
      num: 10,
      en: "There are many false baptisms and false gods, but God has provided only one true water baptism through the apostles (Ep 4: 5-6, 1 Co 8: 5-6; 1 Co 15:29; Ac 13:6; Ac 2:38). Believers who were immersed in the three titles must be immersed again in the name of the Lord Jesus Christ (Ac 19:1-7).",
      fr: "Il existe plusieurs faux baptêmes, mais Dieu a pourvu un seul vrai baptême d’eau à travers les apôtres (Ep 4: 5-6, 1 Co 8: 5-6; 1 Co 15:29; Ac 13:6; Ac 2:38). Les croyants déjà immergés dans les trois titres doivent être immergés à nouveau dans le nom du Seigneur Jésus Christ (Ac 19:1-7)."
    },
    {
      id: "t-11",
      num: 11,
      en: "Baptism in titles Father, Son and Holy Ghost comes from the Catholic Church, and not from God. Based on history, the Catholic Church removed the name of Jesus Christ from water baptism and replaced it with the “three holy titles” in the third century after Christ (Mt 5:34; Ga 1:8; Re 22:18-19; Pro 30: 5-6).",
      fr: "Le baptême dans les titres de Père, Fils et Saint Esprit vient de l’église Catholique, et non pas de Dieu. Selon l’histoire, l’église Catholique a retranché le nom de Jésus Christ dans le baptême d’eau et l’a remplacé par les “trois titres saints” au troisième siècle après Jésus Christ (Mt 5:34; Ga 1:8; Ap 22:18-19; Pro 30: 5-6)."
    },
    {
      id: "t-12",
      num: 12,
      en: "Don’t be an anti-Christ. If you love Jesus, repent and be baptized in His name today (Col 3:17; Ac 2:38; 2 Jn 1:10; Ro 3:4; Is 28:10; Mt 11:25; 13:11; 2 Ti 3:16; He 10:7; Lu 24:49). In the spiritual application, you must put “Lord Jesus Christ” in the section calling for the “name of the father.”",
      fr: "Ne soyez pas un anti-Christ. Si vous aimez Jésus, repentez-vous et soyez baptisé en son nom (Col 3:17; Ac 2:38; 2 Jn 1:10; Ro 3:4; Es 28:10; Mt 11:25; 13:11; 2 Ti 3:16; He 10:7; Lu 24:49, Jn 14:14). Dans l’application spirituelle, vous devez entrer « Seigneur Jésus Christ » dans le casier qui réclame le « nom du père »."
    }
  ];

  // --- STYLE CONTROLLER SWITCHES FOR DARK BLUE HOVER BACKGROUNDS ---
  const getCardStyle = (id: string) => {
    const isHovered = hoveredId === id;
    return {
      position: "relative" as const,
      backgroundColor: isHovered ? "#0a1931" : "rgba(255, 255, 255, 0.02)", // Deep Dark Blue background on hover
      border: isHovered ? "1px solid #00a8ff" : "1px solid rgba(255, 255, 255, 0.06)",
      borderRadius: "10px",
      padding: "20px",
      height: "100%",
      transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
      boxShadow: isHovered ? "0 15px 35px rgba(10, 25, 49, 0.8), 0 0 20px rgba(0, 168, 255, 0.25)" : "none",
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      overflow: "hidden"
    };
  };

  const getHeaderTextColor = (id: string) => {
    return hoveredId === id ? "#ffffff" : "#ffc107";
  };

  const getBodyTextColor = (id: string) => {
    return hoveredId === id ? "#f1f5f9" : "rgba(255, 255, 255, 0.7)";
  };

  // Renders structural bubble elements dynamically inside matching active containers
  const renderBubbles = (id: string) => {
    if (hoveredId !== id) return null;
    return (
      <div className="bubble-emitter-wrapper">
        <span className="bubble-particle" style={{ left: "10%", width: "12px", height: "12px", animationDelay: "0s" }}></span>
        <span className="bubble-particle" style={{ left: "30%", width: "6px", height: "6px", animationDelay: "0.4s" }}></span>
        <span className="bubble-particle" style={{ left: "45%", width: "16px", height: "16px", animationDelay: "0.2s" }}></span>
        <span className="bubble-particle" style={{ left: "65%", width: "8px", height: "8px", animationDelay: "0.7s" }}></span>
        <span className="bubble-particle" style={{ left: "85%", width: "10px", height: "10px", animationDelay: "1.1s" }}></span>
      </div>
    );
  };

  return (
    <div 
      className="water-baptism-view w-100 min-vh-100 text-light"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url(${waterGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "80px 0"
      }}
    >
      {/* Dynamic Bubble Animation Pipeline Injection */}
      <style>{bubbleEffectsStyles}</style>

      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* ================= COMPONENT SUMMARY HEADER ================= */}
        <header style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#ffc107", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: "bold", fontSize: "0.85rem" }}>
            DOCTRINAL COMPARISON // COMPARAISON DOCTRINALE
          </span>
          <h1 style={{ fontFamily: "'Times New Roman', Times, Georgia, serif", fontSize: "3.5rem", fontWeight: "bold", marginTop: "10px", letterSpacing: "0.02em" }}>
            Water Baptism &bull; Baptême d'Eau
          </h1>
          <div style={{ width: "80px", height: "2px", backgroundColor: "#ffc107", margin: "25px auto 0" }} />
        </header>

        {/* ================= CORE STUDY Q&A DUAL GRID ================= */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            
            {/* ENGLISH FRAMEWORK */}
            <div>
              <h2 style={{ fontFamily: "'Times New Roman', serif", color: "#ffc107", borderBottom: "1px solid rgba(255,193,7,0.2)", paddingBottom: "12px", marginBottom: "25px" }}>
                English Framework
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {qaSections.map((item) => (
                  <div 
                    key={`en-${item.id}`}
                    style={getCardStyle(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {renderBubbles(item.id)}
                    <h5 style={{ 
                      color: getHeaderTextColor(item.id), 
                      fontWeight: "700", 
                      fontFamily: "'Times New Roman', serif", 
                      marginBottom: "8px",
                      position: "relative", zIndex: 2,
                      transition: "color 0.25s ease"
                    }}>
                      {item.letter}. {item.enQ}
                    </h5>
                    <p style={{ 
                      color: getBodyTextColor(item.id), 
                      fontSize: "1rem", 
                      lineHeight: "1.6", 
                      margin: 0,
                      position: "relative", zIndex: 2,
                      transition: "color 0.25s ease"
                    }}>
                      {item.enA}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FRENCH VERSION */}
            <div>
              <h2 style={{ fontFamily: "'Times New Roman', serif", color: "#ffc107", borderBottom: "1px solid rgba(255,193,7,0.2)", paddingBottom: "12px", marginBottom: "25px" }}>
                Version Française
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {qaSections.map((item) => (
                  <div 
                    key={`fr-${item.id}`}
                    style={getCardStyle(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {renderBubbles(item.id)}
                    <h5 style={{ 
                      color: getHeaderTextColor(item.id), 
                      fontWeight: "700", 
                      fontFamily: "'Times New Roman', serif", 
                      marginBottom: "8px",
                      position: "relative", zIndex: 2,
                      transition: "color 0.25s ease"
                    }}>
                      {item.letter}. {item.frQ}
                    </h5>
                    <p style={{ 
                      color: getBodyTextColor(item.id), 
                      fontSize: "1rem", 
                      lineHeight: "1.6", 
                      margin: 0,
                      position: "relative", zIndex: 2,
                      transition: "color 0.25s ease"
                    }}>
                      {item.frA}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= DOCTRINAL TRUTHS DUAL GRID ================= */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: "2.2rem", fontWeight: "bold" }}>
              Truth Surrounding Baptism // Vérité Concernant Le Baptême
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            
            {/* TRUTHS ENGLISH */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {truths.map((item) => (
                <div 
                  key={`en-${item.id}`}
                  style={getCardStyle(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {renderBubbles(item.id)}
                  <div style={{ display: "flex", gap: "15px", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
                    <span style={{ background: "rgba(255,193,7,0.15)", color: "#ffc107", padding: "4px 10px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "bold", fontFamily: "monospace" }}>
                      {item.num}
                    </span>
                    <p style={{ 
                      color: getBodyTextColor(item.id), 
                      fontSize: "0.98rem", 
                      lineHeight: "1.6", 
                      margin: 0,
                      transition: "color 0.25s ease"
                    }}>
                      {item.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TRUTHS FRENCH */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {truths.map((item) => (
                <div 
                  key={`fr-${item.id}`}
                  style={getCardStyle(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {renderBubbles(item.id)}
                  <div style={{ display: "flex", gap: "15px", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
                    <span style={{ background: "rgba(255,193,7,0.15)", color: "#ffc107", padding: "4px 10px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "bold", fontFamily: "monospace" }}>
                      {item.num}
                    </span>
                    <p style={{ 
                      color: getBodyTextColor(item.id), 
                      fontSize: "0.98rem", 
                      lineHeight: "1.6", 
                      margin: 0,
                      transition: "color 0.25s ease"
                    }}>
                      {item.fr}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

// --- EXTENSION EMITTER CSS ARCHITECTURE ---
const bubbleEffectsStyles = `
  .bubble-emitter-wrapper {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
  }

  .bubble-particle {
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: riseAndFade 2.2s infinite linear;
  }

  /* Structural Submenu Subcomponents Navigation Accent */
  .navbar .dropdown-menu a:hover {
    background-color: #0a1931 !important;
    color: #ffc107 !important;
    transition: background-color 0.2s ease-in-out;
  }

  @keyframes riseAndFade {
    0% {
      transform: translateY(0) scale(0.6);
      opacity: 0;
    }
    15% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.4;
    }
    100% {
      transform: translateY(-160px) scale(1.2);
      opacity: 0;
    }
  }
`;