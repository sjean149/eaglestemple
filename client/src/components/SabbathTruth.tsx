import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface DoctrineSection {
  num: string;
  text: string;
}

interface LieItem {
  id: string;
  lie: string;
  truth: string;
}

const SabbathTruth: React.FC = () => {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const coreDoctrine: DoctrineSection[] = [
    {
      num: "1",
      text: "Sabbath means “rest,” not seven. In addition to the weekly Sabbath, Israel had to observe many other Sabbaths (Lev 23:21-32, 39). Adam, Noah, Abraham and the other original believers did not observe the Sabbath of the flesh (De 5:3, 15). God required the keeping of the Sabbath day starting with Moses (Ex 16:25-30). Since all the children of Israel were at the same place, they could enter and exit the Sabbath at the same time. The Law can make you a moral person, but not a Christian."
    },
    {
      num: "2",
      text: "The priests profaned the Sabbath and were blameless because God required them to offer two lambs each Sabbath day (No 28:9; Mat 12:5). The Pharisees broke the Sabbath by pulling their animals from a pit and circumcising babies on the Sabbath day (Luc 14:5; Jn 7:22-23; Ac 15:5; 21:21; Ga 5:6). Jesus and his disciples violated the Sabbath (Mt 12:1-8; 15:16-20; Jn 5:18; 9:16). God has never required all nations to keep the Sabbath day. The Sabbath was a sign between God and Israel, not between God and all the nations (Ex 31:16-17; De 5:15)."
    },
    {
      num: "3",
      text: "If someone decides to keep the seventh day Sabbath (Ex 20:10), he must also refuse to work for a whole year every seven years (Le 25:4-7), kindle no fire on that day (Ex 35:3), stone the violators (Ex 31:14; No 15:32-35) and keep the whole law (Ga 5:3; Ja 2:10). No man shall be justified by the works of the law (Ga 2:16; 4:21). All those who depend on the works of the law are under the curse (Ga 3:10-12) because the Law is not made for the righteous man, but for the ungodly (1 Ti 1:9-10). Being led by the Holy Spirit, we are not under the law, but under grace (Ro 6:14-15; Ga 5:18)."
    },
    {
      num: "4",
      text: "Jesus or the apostles never asked the Jewish/Gentile churches to keep the corporal Sabbath. During the conference of Jerusalem, the apostles prescribed the observation of some law related works, but not the Sabbath (Ac 15:10, 23-29). The Law of Moses required Sabbath for the body, but the grace of Jesus offers Sabbath to the soul (Mt 11:28-29). Whosoever receives the Spirit of the Word enters into rest (He 4:3; Ro 8:9), and fulfills the law of Christ (Ro 13:10; 1 Co 9:21). God rested from all his works once for all. Rest therefore of all your carnal works once for all by receiving the spirit of Christ, the seal of God (He 4:4, 10; Ga 5:19; Ep 4:30)."
    },
    {
      num: "5",
      text: "Jesus was resurrected on Sunday morning (Mk 16:9), and he gave the Holy Spirit to the apostles on the day of Pentecost, a Sunday, or 50th day after His resurrection (Ac 2:1-4). Paul resurrected a man on the first day of the week (Ac 20:7-12) and spoke about the first day collection (1 Co 16:2). Based on history, Christian Jews worshipped God on Sunday in the Jerusalem Temple and non Christian Jews worshipped on Saturday (Ac 4:4; 5:20, 41-42; 1 Co 10:20). It is good to judge all days equal (Ro 14:5). Jesus and the apostles taught every day (Lu 19:47; Ac 2:46; 5:42). Let no man judge you concerning the keeping of the Sabbath day, for it was a shadow of things to come. The body is in Christ (Col 2:16-17). Keeping days is a weak element that must be abandoned, else the preacher’s work is vain (Ga 4:8-11-12). The Law was not eternal because it gave way to grace (He 7:11-12; 8:7, 13). The Sabbath for the flesh was not eternal because it gave way to the Sabbath for the soul by the Holy Spirit (Mt 11:29)."
    }
  ];

  const falsitiesData: LieItem[] = [
    { id: '1', lie: "According to the Sabbatists, the seal of God is the Sabbath.", truth: "Based on the Bible the seal of God is the Holy Spirit, not the Sabbath (Ep 1:13; 4:30, Ez 9:4; Re 9:4)." },
    { id: '2', lie: "They say: God commanded Adam to observe the Sabbath.", truth: "God commanded observance of the Sabbath the first time to Israel by Moses (Ex 16:29; Ne 9:13-14)." },
    { id: '3', lie: "They say: The corporal Sabbath is for all Christian people.", truth: "The corporal Sabbath was prescribed only to Israel, just like animal sacrifices and circumcision (Ex 31:12-17; De 5:13-15; Nu 28:9; Jn 7:19-24; 1Co 10:20; Ge 17:10; Col 2:11; Ga 5:1-6)." },
    { id: '4', lie: "They say: The rest or Sabbath that Jesus Christ offers is the 7th day.", truth: "Christ has given rest for the soul, and not for the flesh (Mt 11:28-29; He 4:1-11; Ga 5:19; 1 Pi 4:14)." },
    { id: '5', lie: "According to the Sabbatists, Apostle Paul observed the Sabbath.", truth: "Paul stated that he had no physical rest since he arrived in Macedonia (2 Co 7:5; Ro 6:14)." },
    { id: '6', lie: "They want people to believe that Jesus observed the Sabbath and went to the temple only on the Sabbath day.", truth: "Jesus broke the physical Sabbath and taught in the temple daily (Jn 5:18; Mt 26:55; 12:1-8)." },
    { id: '7', lie: "They teach that Jesus’ apostles did not worship on Sunday, but every Sabbath.", truth: "The apostles worshipped God every day in the temple and in houses (Ac 2:46-47; 20:7). Historically, the 1st Christians worshipped in the temple on the 1st day, for the Jews offered sacrifices on the 7th day." },
    { id: '8', lie: "They say that the apostles asked the gentiles to observe the Sabbath in order to be saved.", truth: "The apostles did not teach Law, which entails the Sabbath. They said, \"Believe in the Lord Jesus and you will be saved.\" (Ac 15:10-21, 16:31, 2:38; Mt 28:20; Ne 9:13-14; 1Co 1:23; 9:18-23; Ga 3:24-25)." },
    { id: '9', lie: "They say: The word commandment always refers to the 10 commandments.", truth: "God commanded women not to preach in the church, just like Abraham to leave Chaldea or to offer Isaac into sacrifice (1 Co 14:33-37; Jn 12:50; Da 2:48; Jn 15:12; 1 Jn 3:23; Ep 2:15; Ez 20:21)." },
    { id: '10', lie: "They say: A doctor sees patients by appointment; God expects worship only on the Sabbath day.", truth: "Angels worship God unceasingly. David wanted to dwell in the temple always to behold God’s beauty. Jesus is with us every day to receive worship (Re 4:8-11; Ps 27:4; Lu 24:52; Mt 28:20)." },
    { id: '11', lie: "They say: Israel was led to slavery in Egypt because they had transgressed the Sabbath day.", truth: "The children of Israel went to Egypt because they had rejected Joseph by jealousy (Ac 7:9; Ge 15:13)." },
    { id: '12', lie: "They say: Moses’ book of law is abolished, but not the 10 commandments.", truth: "Jesus shows that the 10 commandments are part of the law and inseparable from it. God abolished or changed the testament from Sinai or commandments to Golgotha or grace (He 7:12-22; Mt 22:35-40)." },
    { id: '13', lie: "They say: God instituted marriage and Sabbath in Eden for all men.", truth: "All men are not called to marriage, or to the corporal Sabbath instituted in the desert for Israel. Neither Paul nor Jesus was married; both broke the 7th day rest (Mt 19:12; 1 Co 7; Ex 16:29)." },
    { id: '14', lie: "They say: If the Old Testament law is abolished, nothing prevents man from sinning.", truth: "The law of Christ condemns sin from its conception to its manifestation (1Co 6:10; Ja 1:15; Mt 7:21; He 7:12-22)." },
    { id: '15', lie: "They say: God wrote four laws on one table of stone and six on the other one.", truth: "The scripture does not explain the 10 law arrangement on the two tables which are broken (2Co 3:3)." },
    { id: '16', lie: "According to them, 7th day Sabbaths will be observed on the new earth or eternity according to Isa 66:23.", truth: "There will be no night nor moon in the New Jerusalem; Isa 66:23 would already fulfill (Re 21:25; 22:5)." },
    { id: '17', lie: "They say: The mark of the Beast is worship on Sunday to be imposed on the 7th day believers.", truth: "Daniel, Mordecai, the apostles, all were persecuted for their object of worship, not a day (Ac 4:18)." },
    { id: '18', lie: "They say: Saturday is the day of rest or the day of the Lord.", truth: "The day of rest is today, that is each day lived according to Jn 4:24. The day of the Lord is a period when the God of glory will bring vengeance on the unbelievers (He 4:3; Isa 13:9-13; 2:12-22)." },
    { id: '19', lie: "They say: On the 7th day, man must cease his works like God and start over on the 8th day.", truth: "God, showing achievement rather than fatigue, rested from all his works without restarting them. A Christian must cease his works of the flesh once for all (He 4:10; Ga 5:19-21; Ro 6:1-2)." },
    { id: '20', lie: "They say: Worshipping God on Sunday is a Catholic tradition.", truth: "Worship on the first-fruit of days has preceded Catholicism (Le 23:39; Job 38:7; Mt 28:1, 9; Lu 24:33)." },
    { id: '21', lie: "They say: The night of the first day of the week is our present Saturday night.", truth: "The 1st day evening is our present Sunday night, and not Saturday night (Ac 20:7; Jn 20:19)." },
    { id: '22', lie: "They say: The creation Sabbath and the initial six days consisted of 24 hours each.", truth: "Since the sun and the moon were created on the 4th day, the 1st days could not be solar/lunar or of 24 hours. A day for God is 1000 years for mankind (Ge 1:14-19; 2:17; 2 Pe 3:8)." },
    { id: '23', lie: "They say: Those who consider all the days equal do not worship or act for God.", truth: "Considering the days equal or unequal does not draw anyone near or far from God. The weekly and Canaanite Sabbaths were shadow/antitype of the baptism of the Holy Ghost (Ro 14:5; Mc 7:7)." },
    { id: '24', lie: "They say: The Adventist denomination is the true church because it extols the physical Sabbath.", truth: "All denominational titles are blasphemous names from the Devil and not from God. The Adventists do not observe the Old Testament Sabbath nor the one of New Testament (Col 2:16-23)." }
  ];

  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = 0.10;
      hoverAudioRef.current.play().catch(() => {});
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#030305', 
      minHeight: '100vh', 
      paddingTop: '130px', 
      paddingBottom: '120px',
      color: '#cbd5e1',
      overflowX: 'hidden'
    }}>
      <audio ref={hoverAudioRef} src="/sounds/hover.mp3" preload="auto" />

      <Container>
        {/* Navigation Breadcrumb */}
        <Link 
          to="/" 
          className="d-inline-flex align-items-center gap-2 mb-5 back-navigation"
          onMouseEnter={playHoverSound}
          style={{
            color: '#475569',
            textDecoration: 'none',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.82rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s'
          }}
        >
          <span>←</span> Back to Home
        </Link>

        {/* SECTION 1: Narrative Header Blocks */}
        <Row className="mb-5">
          <Col lg={12}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#fbbf24',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px'
            }}>
              Deep Scriptural Foundations
            </span>
            <h1 style={{
              fontFamily: "'Cinzel', Georgia, serif",
              color: '#ffffff',
              fontSize: '3.5rem',
              fontWeight: 700,
              letterSpacing: '1px',
              lineHeight: '1.2',
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}>
              Truth Concerning <br />
              <span style={{ color: '#fbbf24', textShadow: '0 0 35px rgba(251,191,36,0.12)' }}>The Sabbath</span>
            </h1>
          </Col>
        </Row>

        {/* Foundations List Block */}
        <Row className="g-4 mb-5 pb-5">
          {coreDoctrine.map((item) => (
            <Col key={item.num} md={12}>
              <div style={{
                backgroundColor: 'rgba(10, 10, 14, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.02)',
                borderRadius: '12px',
                padding: '35px',
                display: 'flex',
                gap: '24px'
              }}>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'rgba(251, 191, 36, 0.12)',
                  lineHeight: '1',
                  minWidth: '40px'
                }}>
                  {item.num.padStart(2, '0')}
                </div>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#94a3b8',
                  margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* SECTION 2: Interactive Kinetic Exhibition Grid */}
        <Row className="mt-5">
          <Col lg={12} className="text-center mb-5">
            <h2 style={{
              fontFamily: "'Cinzel', Georgia, serif",
              color: '#ffffff',
              fontSize: '2.2rem',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '16px'
            }}>
              24 Sabbatical Expositions <br />
              <span style={{ color: '#fbbf24', fontSize: '1.1rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '4px' }}>
                HOVER TO REVEAL TRUTH
              </span>
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#fbbf24', margin: '24px auto 0' }} />
          </Col>
        </Row>

        {/* Redesigned Clean Hover Reveal Card Matrix */}
        <Row className="g-4 architecture-grid">
          {falsitiesData.map((item) => (
            <Col key={item.id} lg={6} md={12}>
              <div
                className="kinetic-reveal-card"
                onMouseEnter={playHoverSound}
                style={{
                  backgroundColor: 'rgba(12, 12, 16, 0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Visual Top Highlight Accent Strip */}
                <div className="card-top-accent" />

                {/* Top Metas Layout */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#fbbf24',
                    background: 'rgba(251, 191, 36, 0.06)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(251, 191, 36, 0.1)'
                  }}>
                    {item.id.padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#ef4444'
                  }}>
                    Assertion
                  </span>
                </div>

                {/* The Front Element: Claim Card Content */}
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  lineHeight: '1.55',
                  color: '#ffffff',
                  margin: '0 0 16px 0',
                }}>
                  “{item.lie}”
                </h3>

                {/* Pure CSS Hover Activated Drawer */}
                <div className="hover-reveal-drawer">
                  <div style={{ minHeight: 0 }}>
                    <div style={{
                      marginTop: '12px',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.98rem',
                      lineHeight: '1.75',
                      color: '#cbd5e1'
                    }}>
                      <div style={{
                        color: '#10b981',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span className="live-dot" /> Scriptural Truth
                      </div>
                      {item.truth}
                    </div>
                  </div>
                </div>

                {/* Static Action Indicator Hint */}
                <div className="reveal-action-hint">
                  Hover to view refutation
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Embedded CSS Processing Framework */}
      <style>{`
        .back-navigation:hover {
          color: #fbbf24 !important;
          transform: translateX(-4px);
        }

        /* CARD ARCHITECTURE & HOVER DESIGN MATRIX */
        .kinetic-reveal-card {
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #ef4444;
          opacity: 0.3;
          transition: all 0.4s ease;
        }

        /* Pure CSS Hidden State for the Answer Drawer */
        .hover-reveal-drawer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transform: translateY(10px);
          transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.3s ease,
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Status Indicator text */
        .reveal-action-hint {
          font-size: 0.72rem;
          font-family: 'Montserrat', sans-serif;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: auto;
          padding-top: 15px;
          text-align: right;
          transition: all 0.3s ease;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
        }

        /* ACTIVE HOVER STATE MANIPULATION TRIPPERS */
        .kinetic-reveal-card:hover {
          transform: translateY(-5px);
          border-color: rgba(16, 185, 129, 0.25) !important;
          background-color: rgba(10, 16, 14, 0.95) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.03);
        }

        .kinetic-reveal-card:hover .card-top-accent {
          background: #10b981;
          opacity: 1;
        }

        /* Force Open the Hidden Content on Hover Only */
        .kinetic-reveal-card:hover .hover-reveal-drawer {
          grid-template-rows: 1fr;
          opacity: 1;
          transform: translateY(0);
        }

        .kinetic-reveal-card:hover .reveal-action-hint {
          color: #10b981;
          opacity: 0; /* Smoothly fades out hint when content shows */
        }
      `}</style>
    </div>
  );
};

export default SabbathTruth;