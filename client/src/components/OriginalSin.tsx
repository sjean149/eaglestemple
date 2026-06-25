import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface DoctrinePoint {
  id: string;
  enMeta: string;
  frMeta: string;
  enText: string;
  frText: string;
}

const OriginalSin: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [activeId, setActiveId] = useState<string | null>('01');

  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  const doctrineData: DoctrinePoint[] = [
    {
      id: '01',
      enMeta: 'THE NATURE OF THE FALL',
      frMeta: 'LA NATURE DE LA CHUTE',
      enText: 'The Bible does not say that Adam and Eve sinned because they ate an apple or another natural fruit. The apple theory is a denominational lie. The original sin was sexual and not alimentary (Pro 30:20; Ge 3:13).',
      frText: 'La Bible ne dit pas qu’Adam et Eve ont péché parce qu’ils ont mangé une pomme ou un autre fruit naturel. La théorie de pomme est un mensonge dénominationel. Le péché originel était sexuel et non alimentaire (Pro 30 :20 ; Ge 3 :13).'
    },
    {
      id: '02',
      enMeta: 'THE SPIRITUAL TREES',
      frMeta: 'LES ARBRES SPIRITUELS',
      enText: 'The two trees that were in the midst of the Garden of Eden were spiritual trees, and not natural. The tree of life is Jesus Christ. The tree of knowledge of good and evil is the one who produces death (Ge 2:9; Jn 15:5; 3:16; 4:14; 5:40; 6:35, 47, 54, 63, 68; 10:28; 11:25; 17:2; Re 6:8). Jesus offers the fruit of the spirit (Ga 5:22).',
      frText: 'Les deux arbres qui étaient au milieu du Jardin d’Eden étaient des arbres spirituels, et non naturels. L’arbre de vie est Jésus Christ. L’arbre de la connaissance du bien et du mal est celui qui produit la mort (Ge 2 :9 ; Jn 15 :5 ; 3 :16 ; 4 :14 ; 5 :40 ; 6 : 35, 47, 54, 63, 68 ; 10 :28 ; 11 :25 ; 17 :2 ; Ap 6 :8). Jésus offre le fruit de l’Esprit (Ga 5 :22).'
    },
    {
      id: '03',
      enMeta: 'THE SERPENT’S FORM',
      frMeta: 'LA FORME DU SERPENT',
      enText: 'The old serpent was not a reptile, but an animal that could speak, reason, and walk (Ge 1:24; 3:1, 4, 5, 14). God metamorphosed him after the original sin.',
      frText: 'Le serpent ancien n’était pas un reptile, mais un animal qui pouvait parler, raisonner, et marcher (Ge 1 :24 ; 3 :1, 4, 5, 14). Dieu l’a métamorphosé après le péché originel.'
    },
    {
      id: '04',
      enMeta: 'THE DEMONIC AGENT',
      frMeta: 'L’AGENT DEMONIAQUE',
      enText: 'Satan, a fallen angel, was in the Garden of Eden (Ez 28:13-17; He 1:14). He entered into Judas to kill the second Adam (Jn 13:27; 1 Co 15:45). He used the serpent to lead Eve and her husband to death (Re 12:9; Ro 5:16-19; 1 Ti 2:12-15).',
      frText: 'Satan, un ange déchu, était dans le jardin d’Eden (Ez 28 :13-17 ; He 1 :14). Il entra dans Judas pour faire mourir le second Adam (Jn 13 :27 ; 1 Co 15 :45). Il utilisa le serpent pour faire mourir Eve et son mari (Ap 12 :9 ; Ro 5 :16-19 ; 1 Ti 2 :12-15).'
    },
    {
      id: '05',
      enMeta: 'THE ADULTERY IN EDEN',
      frMeta: 'L’ADULTERE EN EDEN',
      enText: 'The original sin was adultery between Eve and the old serpent (Pro 30:20; Ge 3:6). Based on the eternal laws of God, Adam should have not taken Eve back after she had left him and had defiled herself with the serpent (De 24:1-4; 22:22).',
      frText: 'Le péché originel était l’adultère entre Eve et le serpent ancien (Pro 30 :20 ; Ge 3 :6). Basant sur les lois éternelles de Dieu, Adam ne devait pas reprendre Eve après qu’elle l’avait laissé et s’était souillée avec le serpent (De 24 :1-4; 22 :22).'
    },
    {
      id: '06',
      enMeta: 'SHEDDING OF BLOOD',
      frMeta: 'L’EFFUSION DE SANG',
      enText: 'As sin came by one man, justification also comes by one man (Ro 5:19). As sin entered by the shedding of Eve’s virginity blood, forgiveness of sins came by the shedding of Christ’ blood (Ge 3:21; He 9:22).',
      frText: 'De même que le péché vint par un homme, la justification vient aussi par un homme (Ro 5 :19). Comme le péché entra par l’effusion du sang de la virginité d’Eve, le pardon des péchés vient par l’effusion du Sang de Christ (Ge 3 :21; He 9 :22).'
    },
    {
      id: '07',
      enMeta: 'THE SEED CONSEQUENCES',
      frMeta: 'LES CONSEQUENCES SUR LA SEMENCE',
      enText: 'After sinning, Adam and Eve covered their nakedness. God began to talk to them about seeds, birth pains, marital and spiritual submission of the woman, and the woman’s desire that would be to her husband instead of to the serpent (Ge 3:7, 15, 16; Ep 5:22; 1 Ti 2:12-15; 1 Co 14:33-37).',
      frText: 'Apres avoir péché, Adam et Eve couvrirent leur nudité. Dieu commença à leur parler de postérité, de douleurs d’enfantement, de la soumission conjugale et spirituelle de la femme, et des désirs de la femme qui ne seraient plus portés vers le serpent, mais vers son mari (Ge 3 :7, 15, 16 ; Ep 5 :22 ; 1 Ti 2 :12- 15 ; 1 Co 14 :33-37).'
    },
    {
      id: '08',
      enMeta: 'GENEALOGICAL ROOTS',
      frMeta: 'LES RACINES GENEALOGIQUES',
      enText: 'After the original sin, Eve was proclaimed the mother of all living (Ge 3:20). The Holy Scriptures or the biblical genealogies have never declared Adam the father of all mankind (Ge 5:1-6; Luc 3:23, 38).',
      frText: 'Suite au péché originel, Eve fut proclamée la mère de tous les vivants (Ge 3 :20). Les saintes écritures ou les généalogies bibliques n\'ont jamais déclaré Adam le père de tous les humains (Ge 5 :1-6 ; Luc 3 :23, 38).'
    },
    {
      id: '09',
      enMeta: 'THE SEPARATE CONCEPTION',
      frMeta: 'LA CONCEPTION SEPAREE',
      enText: 'Adam knew Eve once. She conceived and gave birth to twin children, Cain and Abel. Eve stated that she had gotten a man from the Lord, not with Adam’s biological help (Ge 4:1-2). He knew Eve again, and she gave birth to Seth (Ge 4:25).',
      frText: 'Adam connut Eve une fois. Elle conçut et enfanta deux enfants jumeaux, Caïn et Abel. Eve dit qu’elle forma Caïn avec l’aide de Dieu, non pas avec l’aide biologique d’Adam (Ge 4 :1-2). Il connut Eve encore, et elle enfanta Seth (Ge 4 :25).'
    },
    {
      id: '10',
      enMeta: 'THE SERPENT’S LINEAGE',
      frMeta: 'LA LIGNEE DU SERPENT',
      enText: 'Cain was of the old serpent, not of Adam (1Jn 3:12; Mt 13:19, 38; Ac 19:16; Re 12:9). Cain’s heirs were serpents (Mt 3:7; 13:38; 23:33).',
      frText: 'Caïn était du serpent ancien, et non pas d’Adam (1Jn 3 :12 ; Mt 13:19, 38; Ac 19 :16 ; Ap 12 :9). Les descendants de Caïn étaient des serpents (Mt 3 :7 ; 13 :38 ; 23 :33).'
    },
    {
      id: '11',
      enMeta: 'THE TWO SEEDS DISTINCTION',
      frMeta: 'LA DISTINCTION DES DEUX SEMENCES',
      enText: 'Cain reflected his father (Ge 4) for he was jealous, rude, selfish, violent, wicked, impenitent etc. Adam and Eve, God’s seeds who were born for salvation, were punished for their disobedience (Ge 3:15-19). Cain, serpent’s seed who was born for perdition, was cursed (Ge 4:11; Jn 17:12; Ro 9:22; 2 Ti 2:10; 2 Pi 2:12).',
      frText: 'Caïn reflétait son père (Ge 4) car il était jaloux, orgueilleux, méchant, violent, rude, impénitent etc. Adam et Eve, des semences de Dieu nées pour le salut, furent punis à cause de leur désobéissance (Ge 3 :15-19). Caïn, semence du serpent née pour la perdition, fut maudit (Ge 4 :11 ; Jn 17 :12 ; Ro 9 :22 ; 2 Ti 2 :10 ; 2 Pi 2 :12).'
    },
    {
      id: '12',
      enMeta: 'JUDGMENT BY PERVERSION',
      frMeta: 'LE JUGEMENT PAR LA PERVERSION',
      enText: 'All animals could reproduce by sexuality before and after the fall. Adultery or sexual perversion caused the fall in Eden, Noah’s flood, the destruction of Sodom, and will cause the destruction of the present world (Ge 1:22; 6:2-3; 19:5-8; Luc 17:26-30).',
      frText: 'Tous les animaux devaient reproduire par la sexualité avant et après la chute. L’adultère ou la perversion sexuelle a causé la chute en Eden, le déluge de Noé, la destruction de Sodome et Gomorrhe, et causera la destruction du monde actuel (Ge 1 :22 ; 6 :2-3 ; 19 :5-8 ; Luc 17 :26-30).'
    }
  ];

  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = 0.12;
      hoverAudioRef.current.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.volume = 0.30;
      clickAudioRef.current.play().catch(() => {});
    }
  };

  const handleToggle = (id: string) => {
    playClickSound();
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={{ 
      backgroundColor: '#030304', 
      minHeight: '100vh', 
      paddingTop: '140px', 
      paddingBottom: '100px',
      overflowX: 'hidden'
    }}>
      <audio ref={hoverAudioRef} src="/sounds/hover.mp3" preload="auto" />
      <audio ref={clickAudioRef} src="/sounds/click.mp3" preload="auto" />

      <Container>
        {/* Header Navigation Toolbar */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <Link 
            to="/" 
            className="d-inline-flex align-items-center gap-2 back-nav-link"
            onMouseEnter={playHoverSound}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
          >
            <span>←</span> Foundations
          </Link>

          {/* Bilingual Switch Control Module */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(251, 191, 36, 0.15)',
            padding: '4px',
            borderRadius: '6px',
            display: 'flex',
            gap: '4px'
          }}>
            <button 
              onClick={() => { playClickSound(); setLang('en'); }}
              style={{
                background: lang === 'en' ? '#fbbf24' : 'transparent',
                color: lang === 'en' ? '#000000' : '#94a3b8',
                border: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '6px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s'
              }}
            >
              EN
            </button>
            <button 
              onClick={() => { playClickSound(); setLang('fr'); }}
              style={{
                background: lang === 'fr' ? '#fbbf24' : 'transparent',
                color: lang === 'fr' ? '#000000' : '#94a3b8',
                border: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '6px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s'
              }}
            >
              FR
            </button>
          </div>
        </div>

        <Row className="g-5">
          {/* LEFT SIDE PANEL: Static Sticky Codex Column */}
          <Col lg={5} className="position-relative">
            <div style={{ position: 'sticky', top: '160px' }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}>
                {lang === 'en' ? 'The Mystery Revealed' : 'Le Mystère Révélé'}
              </span>
              
              <h1 style={{
                fontFamily: "'Cinzel', Georgia, serif",
                color: '#ffffff',
                fontSize: '3rem',
                fontWeight: 700,
                lineHeight: '1.15',
                letterSpacing: '1px'
              }}>
                {lang === 'en' ? 'The Original' : 'Le Péché'} <br />
                <span style={{ color: '#fbbf24', textShadow: '0 0 35px rgba(251,191,36,0.12)' }}>
                  {lang === 'en' ? 'Sin' : 'Originel'}
                </span>
              </h1>
              
              <p className="mt-4" style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#64748b',
                fontSize: '0.95rem',
                lineHeight: '1.75',
                maxWidth: '90%'
              }}>
                {lang === 'en' 
                  ? 'A strict analytical breakdown of the events in Eden, removing denominational traditions to restore structural truth.'
                  : 'Une déconstruction scripturaire rigoureuse des événements d’Éden, dépouillée des traditions pour restaurer la vérité fondamentale.'}
              </p>

              {/* Crimson/Amber Ethereal Warning Sphere Vector */}
              <div style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, rgba(220,38,38,0.03) 0%, rgba(251,191,36,0.02) 50%, transparent 100%)',
                top: '60px',
                left: '-60px',
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'blur(20px)'
              }} />
            </div>
          </Col>

          {/* RIGHT SIDE PANEL: Sequential Matrix Rows */}
          <Col lg={7}>
            <div className="d-flex flex-column gap-3">
              {doctrineData.map((item, index) => {
                const isOpen = activeId === item.id;
                return (
                  <div 
                    key={item.id}
                    className={`sin-codex-card ${isOpen ? 'sin-active' : ''}`}
                    onMouseEnter={playHoverSound}
                    onClick={() => handleToggle(item.id)}
                    style={{
                      backgroundColor: isOpen ? 'rgba(12, 12, 14, 0.95)' : 'rgba(8, 8, 10, 0.3)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: isOpen ? '1px solid rgba(251, 191, 36, 0.35)' : '1px solid rgba(255, 255, 255, 0.03)',
                      boxShadow: isOpen ? '0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(239,68,68,0.02)' : 'none',
                      borderRadius: '6px',
                      padding: '24px 28px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      animation: 'sinFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
                      animationDelay: `${index * 0.06}s`
                    }}
                  >
                    {/* Background Massive Layout Track Number */}
                    <div style={{
                      position: 'absolute',
                      right: '24px',
                      top: '12px',
                      fontFamily: "'Cinzel', serif",
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: isOpen ? 'rgba(251, 191, 36, 0.08)' : 'rgba(255,255,255,0.015)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                      transition: 'color 0.3s'
                    }}>
                      {item.id}
                    </div>

                    {/* Meta Section Title Text */}
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      color: isOpen ? '#fbbf24' : '#475569',
                      marginBottom: '10px',
                      transition: 'color 0.3s'
                    }}>
                      {lang === 'en' ? item.enMeta : item.frMeta}
                    </div>

                    {/* Inline Summary Abstract */}
                    <div className="d-flex align-items-center justify-content-between gap-4">
                      <h3 style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: isOpen ? '#ffffff' : '#94a3b8',
                        margin: 0,
                        lineHeight: '1.5',
                        maxWidth: '88%',
                        transition: 'color 0.3s'
                      }}>
                        {lang === 'en' 
                          ? item.enText.split('.')[0] + '.' 
                          : item.frText.split('.')[0] + '.'}
                      </h3>
                      
                      {/* Operational Chevron Transform Vector */}
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={isOpen ? '#fbbf24' : '#475569'} 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.3s',
                          flexShrink: 0
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>

                    {/* Full Matrix Context Drawer */}
                    <div style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ minHeight: 0 }}>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '0.95rem',
                          lineHeight: '1.75',
                          color: '#cbd5e1',
                          margin: 0,
                          paddingTop: '16px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          marginTop: '16px'
                        }}>
                          {lang === 'en' ? item.enText : item.frText}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Embedded CSS Engine */}
      <style>{`
        @keyframes sinFadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-nav-link:hover {
          color: #fbbf24 !important;
        }

        /* Hover states for interactive matrix cells */
        .sin-codex-card:not(.sin-active):hover {
          border-color: rgba(251, 191, 36, 0.15) !important;
          background-color: rgba(12, 12, 15, 0.5) !important;
          transform: translateX(4px);
        }

        .sin-codex-card:not(.sin-active):hover h3 {
          color: #e2e8f0 !important;
        }

        /* Fine indicator bar on deep active focus */
        .sin-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, #fbbf24, #ef4444);
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default OriginalSin;