import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Explicitly import the animated water asset from the images folder
import waterBg from './images/water.gif';

interface QAItem {
  id: string;
  qFr: string;
  aFr: string;
  qEn: string;
  aEn: string;
}

interface TruthItem {
  id: string;
  textFr: string;
  textEn: string;
}

const BaptismTruth: React.FC = () => {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const hoverStars = Array.from({ length: 14 }).map((_, i) => ({
    top: `${Math.sin(i) * 35 + 50}%`,
    left: `${Math.cos(i * 2.3) * 42 + 50}%`,
    delay: `${i * 0.08}s`,
    scale: (i % 3) * 0.3 + 0.7,
  }));

  const baptismQA: QAItem[] = [
    {
      id: "A",
      qFr: "Que veut dire baptiser?",
      aFr: "Baptiser vient du mot Grec “Baptizein” qui signifie immerger ou plonger. Etre baptisé veut dire être immergé dans l’eau dans le nom du Seigneur Jésus Christ. Le baptême est un engagement envers Dieu (1 Pe 3:20-21. Ac 2:38).",
      qEn: "What does it mean to be baptized?",
      aEn: "Baptize comes from the Greek word “Baptizein,” which means to immerse or sink. To be baptized means to be immersed in water in the name of the Lord Jesus Christ. Baptism is a vow with God (1 Pe 3:20-21. Ac 2:38)."
    },
    {
      id: "B",
      qFr: "Pourquoi une personne doit-elle recevoir le baptême par immersion dans l’eau au lieu d’effusion, d’aspersion ou d’autres façons?",
      aFr: "Le baptême d’eau identifie le croyant à la mort, l’ensevelissement et la résurrection de Jésus Christ (Ro 6:4: Ac 10:47; Ep 5:26; Jn 4:1-2).",
      qEn: "Why should a person receive baptism by immersion in water instead of by effusion, sprinkling or other methods?",
      aEn: "Water baptism identifies the believer with the death, burial and resurrection of Jesus Christ (Ro 6:4: Ac 10:47; Ep 5:26; Jn 4:1-2)."
    },
    {
      id: "C",
      qFr: "Dans quel nom doit-on baptiser?",
      aFr: "Tout le monde doit être baptisé dans le nom du Seigneur Jésus Christ, qui est le Dieu véritable (Ac 4:12; 8: 5, 14-17; 19:1-7; Col 3:17; Phi 2:10; 1 Jn 5:20; Ac 2:38).",
      qEn: "In what name should a person be baptized?",
      aEn: "Everyone should be baptized in the name of the Lord Jesus Christ, who is the true God (Ac 4:12; 8: 5, 14-17; 19:1-7; Col 3:17; Phi 2:10; 1 Jn 5:20; Ac 2:38)."
    },
    {
      id: "D",
      qFr: "Il y a t’il aucune condition à remplir pour recevoir le baptême?",
      aFr: "Pour recevoir le baptême on doit se repentir et croire en Jésus Christ comme Seigneur et Sauveur (Ac 8:36-38; Ac 2:38).",
      qEn: "Is there any requirement to meet in order to receive baptism?",
      aEn: "To receive baptism one must repent and believe in Jesus Christ as Lord and Savior (Ac 8:36-38; Ac 2:38)."
    },
    {
      id: "E",
      qFr: "Qui peut-être baptisé?",
      aFr: "Quiconque se repent et consent au baptême d’eau dans le nom du Seigneur Jésus Christ doit être baptisé (Mc 16:16; Ac 8:12; Mt 3:13; Mc 2:17; Mt 11:28).",
      qEn: "Who can get baptized?",
      aEn: "Anyone who repents and consents to water baptism in the name of the Lord Jesus Christ should get baptized (Mk16:16; Ac 8:12; Mt 3:13; Mc 2:17; Mt 11:28)."
    },
    {
      id: "F",
      qFr: "Quand doit-on recevoir le baptême?",
      aFr: "Une personne doit se faire baptiser aussitôt qu’elle se repent, désire le baptême, et rencontre de l’eau (Ac 8:36; Ac 16:32-34; Ac 22:16; Ac 2:41).",
      qEn: "When should a person get baptized?",
      aEn: "A person should get baptized as soon as he/she repents, desires baptism, and finds water (Ac 8:36; Ac 16:32-34; Ac 22:16; Ac 2:41)."
    },
    {
      id: "G",
      qFr: "Pourquoi doit-on recevoir le baptême?",
      aFr: "Chaque personne doit se repentir et être baptisée dans le nom du Seigneur Jésus Christ en vue de recevoir le pardon des pêchés et le Saint Esprit (MK 16 :16 ; Ro 3:23; Ac 2:38-39).",
      qEn: "Why should a person be baptized?",
      aEn: "Every person should repent and be baptized in the name of the Lord Jesus Christ in order to receive forgiveness of sins and the Holy Spirit (Mk 16:16; Ro 3:23; Ac 2:38-39)."
    }
  ];

  const truthsData: TruthItem[] = [
    {
      id: '1',
      textFr: "Aucun bébé dans la Bible n’a jamais été baptisé. Pour être baptisé on doit croire (Mc 16:16), se repentir (Ac 2:38), et être immergé dans l’eau (1Pi 3:20-21, Mt 3:16).",
      textEn: "Babies were never baptized in the Bible. To be baptized one must believe (Mc 16:16), repent (Ac 2:38), and be immersed in water (1Pi 3:20-21, Mt 3:16)."
    },
    {
      id: '2',
      textFr: "Personne dans la Bible n’a jamais été baptisé par effusion ou aspersion. Des gens furent baptisés (immergés) dans le Jourdain (Mt 3:6). Jésus sortit de l’eau (Mt 3:16).",
      textEn: "No one was baptized in the Bible by pouring or sprinkling. People were baptized (immersed) in the Jordan (Mt 3:6). Jesus went up straightway out of the water (Mt 3:16)."
    },
    {
      id: '3',
      textFr: "Personne dans la Bible n’a jamais été baptisé dans les titres de Père, Fils et Saint Esprit. Des milliers de gens furent baptisés dans le nom du Seigneur Jésus Christ (Ac 2:36-41; 8:5,14-16; 10:48; 19:1-7; 22:16; 1 Co 1:11-13).",
      textEn: "Nobody in the Bible was ever baptized in the titles Father, Son, and Holy Spirit. Thousands of people were baptized in the name of the Lord Jesus Christ (Ac 2:36-41; 8:5,14-16; 10:48; 19:1-7; 22:16; 1 Co 1:11-13)."
    },
    {
      id: '4',
      textFr: "Le diable est appelé père, fils et esprit dans la Bible (Jn 8:44; Es 14:12; Mc 1:23-27; Co 3:17). Beaucoup de gens (Latinos et autres) sont appelés Jésus, mais il y a un seul Seigneur Jésus Christ (Ac 2:36; 13:6; Lu 3:29; 1 Co 8:6).",
      textEn: "The Bible calls the devil father, son, and spirit (Jn 8:44; Es 14:12; Mc 1:23-27; Co 3:17). Many people (Spanish and others) are called Jesus, but there is only one Lord Jesus Christ (Ac 2:36; 13:6; Lu 3:29; 1 Co 8:6)."
    },
    {
      id: '5',
      textFr: "Jésus n’a pas demandé aux apôtres de répéter les titres Père, Fils, et Saint Esprit lors du baptême. Il les a demandés d’utiliser le nom du Père, du Fils et du Saint Esprit. Ce nom est seigneur Jésus Christ (Mt 28:19; Ac 2:36-38; Mt 1:21; Lu 1:31; Col 3:17; Phi 2:10: Ac 4:10-12; Jn 1:1-2,14; 14:10; 2 Co 5:19; Es 9:5; 35:4-6).",
      textEn: "Jesus did not tell the apostles to repeat the titles Father, Son, and Holy Ghost during baptisms. He told them to use the name of the Father, and of the Son, and of the Holy Ghost. That name is Lord Jesus Christ (Mt 28:19; Ac 2:36-38; Mt 1:21; Lu 1:31; Col 3:17; Phi 2:10: Ac 4:10-12; Jn 1:1-2, 14; 14:10; 2 Co 5:19; Es 9:5; 35:4-6)."
    },
    {
      id: '6',
      textFr: "Un seul verset dans la Bible (Mt 28:19) mentionne Père, Fils et Saint Esprit en rapport au baptême, mais il n’y avait aucun baptême effectué en Mt 28:16-20. Mathieu et les autres apôtres savaient que le nom du fils est Jésus (Mt 1:21), le père est le Saint Esprit (Jn 4:24; Lu 2:35) et porte le même nom que le fils (Jn 5:43; 14:8-10; 1Jn 5:20).",
      textEn: "Only one verse in the Bible (Mt 28:19) mentions Father, Son and Holy Spirit in connection with baptism, but no baptism was performed in Mt 28:16-20. Matthew and the other apostles knew that the name of the son is Jesus (Mt 1:21), the father is the Holy Spirit (Jn 4:24; Lu 2:35) and has the same name as the son (Jn 5:43; 14:8-10; 1Jn 5:20)."
    },
    {
      id: '7',
      textFr: "Selon Mt 28:16-20, les premiers apôtres reçurent la commission de baptiser les gens. Ils ne baptisèrent personne dans les titres de Père, Fils et Saint Esprit. Ils ordonnèrent à tout le monde (Juifs, Samaritains, et Païens) de se repentir et d’être baptisé dans le nom de Jésus Christ (Ac 2:36-39; 8:5,14-17; 10:24, 48; 19:1-7).",
      textEn: "According to Mt 28:16-20, the first apostles were commissioned to baptize people. They never baptized anyone in the titles of Father, Son and Holy Ghost. They ordered everyone (Jews, Samaritans, and Gentiles) to repent and be baptized in the name of Jesus Christ (Ac 2:36-39; 8: 5, 14-17; 10:24,48;19:1-7)."
    },
    {
      id: '8',
      textFr: "Les apôtres furent remplis du Saint Esprit avant de baptiser environ 3000 personnes dans le nom de Jésus Christ le jour de la Pentecôte. Le Saint Esprit, qui est l’Esprit de Dieu, était à ce moment là en eux, les enseignant et les guidant dans toute la vérité (Ac 2:4; 2:38-41; Jn 14:26; 16:13).",
      textEn: "The apostles were filled with the Holy Ghost before they baptized about 3000 people in the name of Jesus Christ on the day of Pentecost. The Holy Ghost, which is the Spirit of God, was at that time in them, teaching and guiding them into all truth (Ac 2:4; 2:38-41; Jn 14:26; 16:13)."
    },
    {
      id: '9',
      textFr: "Jésus a accompli de grands miracles à travers les apôtres, montrant qu’il a approuvé leur ministère et leur enseignement sur le baptême d’eau et les autres points doctrinaux (Ac 3:1-8; 5:1-10; 5:15-16; 8:32-41; 12:6-11; 13:4-12; 14:8-10; 28:3-6; He 6:2). Dieu veut que tout le monde obéisse aux enseignements des apôtres (Mt 10:40; 28:20; Jn 17:20; Jn 4:1-2; 21:17; Ac 5:19-20; 1 Co 3:10-12; Ga 1:8; Ep 2:20).",
      textEn: "Jesus performed great miracles through the apostles, showing that he approved their ministry and their teaching about water baptism and other doctrines (Ac 3:1-8; 5:1-10; 5:15-16; 8:32-41; 12:6-11; 13:4-12; 14:8-10; 28:3-6; He 6:2). God wants everyone to obey the apostles’ teachings (Mt 10:40; 28:20; Jn 17:20; Jn 4:1-2; 21:17; Ac 5:19-20; 1 Co 3:10-12; Ga 1:8; Ep 2:20)."
    },
    {
      id: '10',
      textFr: "Il existe plusieurs faux baptêmes, mais Dieu a pourvu un seul vrai baptême d’eau à travers les apôtres (Ep 4: 5-6, 1 Co 8: 5-6; 1 Co 15:29; Ac 13:6; Ac 2:38). Les croyants déjà immergés dans les trois titres doivent être immergés à nouveau dans le nom du Seigneur Jésus Christ (Ac 19:1-7).",
      textEn: "There are many false baptisms and false gods, but God has provided only one true water baptism through the apostles (Ep 4: 5-6, 1 Co 8: 5-6; 1 Co 15:29; Ac 13:6; Ac 2:38). Believers who were immersed in the three titles must be immersed again in the name of the Lord Jesus Christ (Ac 19:1-7)."
    },
    {
      id: '11',
      textFr: "Le baptême dans les titres de Père, Fils et Saint Esprit vient de l’église Catholique, et non pas de Dieu. Selon l’histoire, l’église Catholique a retranché le nom de Jésus Christ dans le baptême d’eau et l’a remplacé par les “trois titres saints” au troisième siècle après Jésus Christ (Mt 5:34; Ga 1:8; Ap 22:18-19; Pro 30: 5-6).",
      textEn: "Based on history, the Catholic Church removed the name of Jesus Christ from water baptism and replaced it with the “three holy titles” in the third century after Christ (Mt 5:34; Ga 1:8; Re 22:18-19; Pro 30: 5-6)."
    },
    {
      id: '12',
      textFr: "Ne soyez pas un anti-Christ. Si vous aimez Jésus, repentez-vous et soyez baptisé en son nom (Col 3:17; Ac 2:38; 2 Jn 1:10; Ro 3:4; Es 28:10; Mt 11:25; 13:11; 2 Ti 3:16; He 10:7; Lu 24:49, Jn 14:14). Dans l’application spirituelle, vous devez entrer « Seigneur Jésus Christ » dans le casier qui réclame le « nom du père ».",
      textEn: "Don’t be an anti-Christ. If you love Jesus, repent and be baptized in His name today (Col 3:17; Ac 2:38; 2 Jn 1:10; Ro 3:4; Is 28:10; Mt 11:25; 13:11; 2 Ti 3:16; He 10:7; Lu 24:49). In the spiritual application, you must put “Lord Jesus Christ” in the section calling for the “name of the father.”"
    }
  ];

  const handleRowHover = (id: string | null) => {
    setActiveHoverId(id);
    if (id && hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = 0.08;
      hoverAudioRef.current.play().catch(() => {});
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#02040a', 
      minHeight: '100vh', 
      color: '#cbd5e1',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <audio ref={hoverAudioRef} src="/sounds/hover.mp3" preload="auto" />

      {/* DYNAMIC WATER BACKGROUND ENGINE */}
      <div 
        className="ocean-static-background-canvas" 
        style={{ backgroundImage: `url(${waterBg})` }} 
      />

      {/* STICKY APPLICATION HEADER */}
      <header className="main-platform-header">
        <Container className="d-flex align-items-center justify-content-between h-100">
          <div className="platform-logo">
            THE <span className="highlight">MESSAGE</span> EXHIBITION
          </div>
          <nav className="platform-nav d-none d-md-flex align-items-center gap-4">
            <Link to="/" className="nav-item-link">Home</Link>
            <Link to="/doctrines" className="nav-item-link active">Doctrines</Link>
           <Link to="/original-sin" className="nav-item-link">Original Sin</Link>
            <Link to="/media-archive" className="nav-item-link">Media Archive</Link>
          </nav>
        </Container>
      </header>

      {/* SCROLLABLE INTERACTIVE BODY CONTAINER */}
      <main style={{ flex: '1 0 auto', paddingTop: '110px', paddingBottom: '70px', position: 'relative', zIndex: 1 }}>
        <Container fluid="xl">
          
          <Link to="/" className="d-inline-flex align-items-center gap-2 mb-4 back-navigation">
            <span>←</span> Back to Dashboard / Retour au Tableau
          </Link>

          {/* Core Feature Hero Banner */}
          <Row className="align-items-center g-4 mb-5">
            <Col lg={12}>
              <span className="section-meta-tag">Sacred Ordinances / Ordonnances Sacrées</span>
              <h1 className="hero-compact-title">
                Water Baptism <br />
                <span className="gold-shimmer-text">Baptême d'Eau</span>
              </h1>
              <p className="hero-compact-lead">
                A definitive multi-lingual scriptural exposition detailing the requirements, execution, and divine truths establishing true validation under the name of the Lord Jesus Christ.
              </p>
            </Col>
          </Row>

          {/* SECTIONS ALIGNMENT MATRIX */}
          <div className="section-language-header-bar mb-4">
            <div className="lang-indicator-title text-start text-uppercase tracking-wider">Compte Rendu en Français</div>
            <div className="lang-indicator-title text-center text-uppercase tracking-wider" style={{color: '#94a3b8'}}>HOVER ROW TO REVEAL SCRIPTURE</div>
            <div className="lang-indicator-title text-end text-uppercase tracking-wider" style={{color: '#fde047'}}>English Formulation Matrix</div>
          </div>

          <div className="qa-dual-chain mb-5">
            {baptismQA.map((item) => {
              const isRevealed = activeHoverId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`parallel-qa-row ${isRevealed ? 'row-revealed' : ''}`}
                  onMouseEnter={() => handleRowHover(item.id)}
                  onMouseLeave={() => handleRowHover(null)}
                >
                  <div className="qa-center-axis-node">{item.id}</div>
                  
                  {/* Hover Star Burst Particles */}
                  {isRevealed && (
                    <div className="starfield-overlay-container">
                      {hoverStars.map((star, idx) => (
                        <div 
                          key={idx}
                          className="celestial-hover-star"
                          style={{
                            top: star.top,
                            left: star.left,
                            animationDelay: star.delay,
                            transform: `scale(${star.scale})`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <Row className="g-4 w-100 m-0 position-relative" style={{ zIndex: 2 }}>
                    {/* French Linguistic Segment */}
                    <Col md={6} className="pe-md-4 border-right-split">
                      <div className="lang-qa-block french-zone">
                        <h3 className="qa-question-heading">{item.qFr}</h3>
                        <div className="static-height-content-container">
                          <p className={`qa-answer-paragraph fr-text-tint hidden-reveal-element ${isRevealed ? 'element-revealed' : ''}`}>
                            {item.aFr}
                          </p>
                          <div className={`veil-prompt-text center-veil-absolute ${isRevealed ? 'element-hidden' : ''}`}>
                            ✦ Hover to unfold translation ✦
                          </div>
                        </div>
                      </div>
                    </Col>
                    
                    {/* English Linguistic Segment */}
                    <Col md={6} className="ps-md-4">
                      <div className="lang-qa-block english-zone">
                        <h3 className="qa-question-heading">{item.qEn}</h3>
                        <div className="static-height-content-container">
                          <p className={`qa-answer-paragraph en-text-tint hidden-reveal-element ${isRevealed ? 'element-revealed' : ''}`}>
                            {item.aEn}
                          </p>
                          <div className={`veil-prompt-text center-veil-absolute ${isRevealed ? 'element-hidden' : ''}`} style={{color: '#fde047'}}>
                            ✦ Survoler pour révéler ✦
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>

          {/* SECTION 2: 12 CORE THEOLOGICAL FACTS */}
          <Row className="mt-5">
            <Col lg={12} className="text-center mb-5">
              <h2 className="exposition-matrix-title">
                Truth Surrounding Baptism / Vérités Concernant le Baptême
              </h2>
              <p className="subtitle-action-hint">HOVER BLOCKS TO UTTERLY SHATTER THE PLATES & DISCOVER ACCURATE SCRIPTURE</p>
              <div className="accent-bar-gold" />
            </Col>
          </Row>

          <Row className="g-4 interactive-shatter-grid">
            {truthsData.map((item) => (
              <Col key={item.id} lg={12}>
                <div className="shatter-card-viewport" onMouseEnter={() => handleRowHover(null)}>
                  <div className="truth-underlayer-content">
                    <div className="center-identity-stamp">TRUTH {item.id}</div>
                    <Row className="g-4 h-100 align-items-center">
                      <Col md={6} className="pe-md-4 border-right-split-green">
                        <span className="mini-badge-fr">FR</span>
                        <p className="text-truth-statement fr-text-tint">{item.textFr}</p>
                      </Col>
                      <Col md={6} className="ps-md-4">
                        <span className="mini-badge-en">EN</span>
                        <p className="text-truth-statement en-text-tint">{item.textEn}</p>
                      </Col>
                    </Row>
                  </div>

                  <div className="shatter-glass-cover">
                    <div className="shatter-fragment fragment-tl">
                      <div className="fragment-interior-content">
                        <h3 className="plate-veiled-title">EXPOSITION MATRIX // AREA {item.id}-TL</h3>
                      </div>
                    </div>
                    <div className="shatter-fragment fragment-tr">
                      <div className="fragment-interior-content">
                        <h3 className="plate-veiled-title">EXPOSITION MATRIX // AREA {item.id}-TR</h3>
                      </div>
                    </div>
                    <div className="shatter-fragment fragment-bl">
                      <div className="fragment-interior-content">
                        <h3 className="plate-veiled-title">EXPOSITION MATRIX // AREA {item.id}-BL</h3>
                      </div>
                    </div>
                    <div className="shatter-fragment fragment-br">
                      <div className="fragment-interior-content">
                        <h3 className="plate-veiled-title">EXPOSITION MATRIX // AREA {item.id}-BR</h3>
                      </div>
                    </div>
                    <div className="shatter-prompt-badge">
                      <span className="pulse-dot"></span> SEALED DOCTRINE {item.id}
                    </div>
                  </div>

                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </main>

      {/* CORE FRAMEWORK FOOTER */}
      <footer className="main-platform-footer" style={{ position: 'relative', zIndex: 1 }}>
        <Container fluid="xl">
          <Row className="py-4 align-items-center justify-content-between border-top-divider">
            <Col md={6} className="mb-3 mb-md-0">
              <div className="footer-brand-title">
                THE <span className="highlight">MESSAGE</span> EXHIBITION
              </div>
              <p className="footer-brand-subtext">
                Dedicated to systematic, line-by-line theological refutations and expository clarity across languages.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <div className="footer-links-matrix d-flex justify-content-md-end gap-3">
                <Link to="/privacy" className="foot-item-link">Privacy</Link>
                <Link to="/terms" className="foot-item-link">Terms</Link>
              </div>
            </Col>
          </Row>
          <div className="text-center pt-2 pb-3 sub-copyright">
            © {new Date().getFullYear()} THE MESSAGE EXHIBITION. ALL RIGHTS RESERVED.
          </div>
        </Container>
      </footer>

      <style>{`
        /* CLEAN HIGH-VISIBILITY IMMERSIVE ENGINE */
        .ocean-static-background-canvas {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none; z-index: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* ENHANCED ACCESSIBILITY TWEAKS */
          opacity: 0.45; /* Boosted visibility from 0.14 for maximum clarity of waterBg */
          filter: contrast(120%) brightness(95%); /* Sharpen water patterns behind UI elements */
        }

        /* LIQUID STATIC HEIGHT FLUID JUMP PREVENTER */
        .static-height-content-container {
          position: relative;
          min-height: 105px;
          display: flex;
          align-items: flex-start;
          width: 100%;
        }

        .hidden-reveal-element {
          position: absolute;
          top: 0; left: 0; width: 100%;
          opacity: 0;
          transform: translateY(0);
          transition: opacity 0.35s ease;
          pointer-events: none;
          margin: 0;
        }

        .hidden-reveal-element.element-revealed {
          opacity: 1;
          pointer-events: auto;
          position: relative;
        }

        .center-veil-absolute {
          position: absolute;
          top: 0; left: 0; width: 100%;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .element-hidden {
          opacity: 0 !important;
        }

        /* CELESTIAL STARBURST HOVER RENDERING */
        .starfield-overlay-container {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 1; overflow: hidden;
        }
        .celestial-hover-star {
          position: absolute; width: 5px; height: 5px;
          background: #ffffff; border-radius: 50%;
          box-shadow: 0 0 12px 3px rgba(251, 191, 36, 0.95), 0 0 22px 5px #ffffff;
          opacity: 0; animation: burstStar 1.3s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
        }
        @keyframes burstStar {
          0% { transform: scale(0) translateY(0); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: scale(1.4) translateY(-40px); opacity: 0; }
        }

        /* DISTINGUISHING TYPOGRAPHY TINTS WITH BOOSTED READABILITY RULES */
        .fr-text-tint { 
          color: #e2e8f0 !important; 
          font-weight: 600; 
          font-size: 1.05rem !important; /* Increased font scale for crisp text projection */
          line-height: 1.65;
          text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.95); /* Deep high-contrast text shield */
        }
        .en-text-tint { 
          color: #fde047 !important; 
          font-weight: 600; 
          font-size: 1.05rem !important; /* Increased font scale for crisp text projection */
          line-height: 1.65;
          text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.95), 0px 0px 4px rgba(253, 224, 71, 0.2); 
        }

        .veil-prompt-text {
          font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700;
          letter-spacing: 2px; color: #94a3b8; padding-top: 5px;
          text-transform: uppercase; animation: flashPrompt 2s infinite ease-in-out;
        }
        @keyframes flashPrompt { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }

        /* REVOLUTIONARY STRUCTURAL BASE GRID */
        .main-platform-header {
          position: fixed; top: 0; left: 0; width: 100%; height: 75px;
          background: rgba(2, 4, 10, 0.93); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04); z-index: 1000;
        }
        .platform-logo { font-family: 'Cinzel', serif; font-size: 1.25rem; font-weight: 700; color: #ffffff; letter-spacing: 2px; }
        .platform-logo .highlight { color: #fbbf24; }
        .nav-item-link {
          font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: #94a3b8; text-decoration: none;
          letter-spacing: 2px; text-transform: uppercase; font-weight: 600; transition: color 0.3s;
        }
        .nav-item-link:hover, .nav-item-link.active { color: #fbbf24; }

        .section-language-header-bar {
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(2, 4, 10, 0.65); border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 14px 24px; border-radius: 6px; position: relative; z-index: 2;
        }
        .lang-indicator-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 0.8rem; color: #e2e8f0; letter-spacing: 2px; width: 33%; }

        .qa-dual-chain { display: flex; flex-direction: column; gap: 20px; position: relative; z-index: 2; }
        .parallel-qa-row {
          position: relative; background: rgba(4, 8, 16, 0.88); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.03); border-radius: 12px;
          padding: 24px 0; display: flex; align-items: center; transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .parallel-qa-row:hover, .parallel-qa-row.row-revealed {
          background: rgba(6, 15, 30, 0.94); border-color: rgba(251, 191, 36, 0.3);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }

        .qa-center-axis-node {
          position: absolute; left: 50%; top: 28px; transform: translateX(-50%);
          width: 36px; height: 36px; background: #fbbf24; color: #000; font-family: 'Cinzel', serif;
          font-weight: 900; display: flex; align-items: center; justify-content: center;
          border-radius: 50%; border: 4px solid #02040a; z-index: 10; box-shadow: 0 0 15px rgba(251,191,36,0.25);
        }
        .border-right-split { border-right: 1px solid rgba(255, 255, 255, 0.04); }
        
        @media(max-width: 768px) {
          .border-right-split { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 15px; }
          .qa-center-axis-node { display: none; }
          .lang-indicator-title { width: 100%; text-align: center !important; margin-bottom: 5px; }
          .section-language-header-bar { flex-direction: column; }
          .static-height-content-container { min-height: auto; }
        }

        .lang-qa-block { padding: 4px 10px; }
        .qa-question-heading { font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 14px; line-height: 1.4; min-height: 48px; }
        .qa-answer-paragraph { font-family: 'Montserrat', sans-serif; font-size: 0.92rem; line-height: 1.65; text-align: justify; margin: 0; }

        .back-navigation {
          color: #475569; text-decoration: none; font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem; letter-spacing: 1.5px; text-transform: uppercase; transition: all 0.3s;
        }
        .back-navigation:hover { color: #fbbf24; transform: translateX(-3px); }
        .section-meta-tag {
          font-family: 'Montserrat', sans-serif; color: #fbbf24; font-size: 0.8rem; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 12px;
        }
        .hero-compact-title {
          font-family: 'Cinzel', serif; color: #ffffff; font-size: 2.8rem; font-weight: 700;
          letter-spacing: 1px; line-height: 1.2; margin-bottom: 16px; text-transform: uppercase;
        }
        .gold-shimmer-text { color: #fbbf24; }
        .hero-compact-lead { font-family: 'Montserrat', sans-serif; font-size: 0.98rem; line-height: 1.7; color: #94a3b8; }

        .exposition-matrix-title { font-family: 'Cinzel', serif; color: #ffffff; font-size: 1.6rem; font-weight: 700; letter-spacing: 2px; }
        .subtitle-action-hint { color: #fbbf24; font-size: 0.75rem; font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 3px; margin-top: 8px; display: block; }
        .accent-bar-gold { width: 50px; height: 2px; background: #fbbf24; margin: 16px auto 0; }

        /* THE 12 TRUTHS SHATTER EFFECTS GRID */
        .shatter-card-viewport {
          position: relative; width: 100%; min-height: 200px;
          background: rgba(3, 6, 12, 0.92); backdrop-filter: blur(6px); border-radius: 14px;
          border: 1px solid rgba(16, 185, 129, 0.15); overflow: hidden;
          box-shadow: 0 20px 45px rgba(0,0,0,0.6); perspective: 1200px;
        }
        .truth-underlayer-content {
          position: absolute; inset: 0; padding: 24px 32px; z-index: 1;
          display: flex; flex-direction: column; justify-content: center;
        }
        .center-identity-stamp {
          position: absolute; right: 20px; top: 15px; font-family: 'Cinzel', serif;
          font-weight: 800; font-size: 1.4rem; color: rgba(16, 185, 129, 0.08); pointer-events: none;
        }
        .border-right-split-green { border-right: 1px solid rgba(16, 185, 129, 0.15); }
        .mini-badge-fr, .mini-badge-en {
          font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 800;
          padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 8px;
        }
        .mini-badge-fr { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .mini-badge-en { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
        .text-truth-statement { font-family: 'Montserrat', sans-serif; font-size: 0.88rem; line-height: 1.6; margin: 0; text-align: justify; }

        .shatter-glass-cover { position: absolute; inset: 0; z-index: 5; transform-style: preserve-3d; pointer-events: none; }
        .shatter-fragment {
          position: absolute; width: 100%; height: 100%; background: #050912; overflow: hidden;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
          pointer-events: auto; border: 1px solid rgba(255,255,255,0.02);
        }
        .fragment-interior-content {
          position: absolute; width: 100%; height: 100%; background: radial-gradient(circle at center, #08101c 0%, #020409 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .plate-veiled-title { font-family: 'Cinzel', serif; font-size: 0.72rem; color: rgba(255,255,255,0.12); letter-spacing: 4px; text-transform: uppercase; }

        /* CLIP PATTERNS FOR SHATTER COVER PLANES */
        .fragment-tl { clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%); }
        .fragment-tr { clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%); }
        .fragment-bl { clip-path: polygon(0 50%, 50% 50%, 50% 100%, 0 100%); }
        .fragment-br { clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%); }

        /* ACTIVE SHATTER TRANSFORM INTERACTIONS */
        .shatter-card-viewport:hover .fragment-tl { transform: translate3d(-30px, -30px, 40px) rotateX(-10deg) rotateY(-10deg); opacity: 0; }
        .shatter-card-viewport:hover .fragment-tr { transform: translate3d(30px, -30px, 40px) rotateX(-10deg) rotateY(10deg); opacity: 0; }
        .shatter-card-viewport:hover .fragment-bl { transform: translate3d(-30px, 30px, 40px) rotateX(10deg) rotateY(-10deg); opacity: 0; }
        .shatter-card-viewport:hover .fragment-br { transform: translate3d(30px, 30px, 40px) rotateX(10deg) rotateY(10deg); opacity: 0; }

        .shatter-prompt-badge {
          position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%);
          background: rgba(2,4,10,0.85); border: 1px solid rgba(16,185,129,0.3);
          color: #10b981; font-family: 'Montserrat', sans-serif; font-size: 0.65rem;
          font-weight: 700; padding: 4px 12px; border-radius: 20px; letter-spacing: 2px;
          display: flex; align-items: center; gap: 6px; transition: opacity 0.3s;
        }
        .shatter-card-viewport:hover .shatter-prompt-badge { opacity: 0; }
        .pulse-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: tokenPulse 1.5s infinite; }
        @keyframes tokenPulse { 0% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 1; } 100% { transform: scale(0.8); opacity: 0.5; } }
      `}</style>
    </div>
  );
};

export default BaptismTruth;