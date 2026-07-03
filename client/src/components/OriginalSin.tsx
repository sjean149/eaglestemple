import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

interface ExpositionItem {
  en: string;
  fr: string;
  accentColor: string;      
  bgGradient: string;       
  borderGradient: string;   
  sparkleColors: string[];  
}

class Sparkle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  decay: number;

  constructor(x: number, y: number, colors: string[]) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1.5;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    this.speedX = Math.cos(angle) * speed;
    this.speedY = Math.sin(angle) * speed;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = 1;
    this.decay = Math.random() * 0.02 + 0.015; 
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const OriginalSin: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Sparkle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isMouseMovingRef = useRef<boolean>(false);

  const expositionData: ExpositionItem[] = [
    {
      en: "The mystery of the original sin does not lie in the simple eating of a physical fruit from a natural tree. Scripture reveals that the Garden of Eden was a spiritual setting containing deeper mysteries of life and custom choices.",
      fr: "Le mystère du péché originel ne réside pas dans le simple fait de manger un fruit physique provenant d'un arbre naturel. L'Écriture révèle que le jardin d'Éden était un cadre spirituel contenant des mystères profonds de vie et de choix comportementaux.",
      accentColor: '#fbbf24', 
      bgGradient: 'rgba(251, 191, 36, 0.03)',
      borderGradient: 'linear-gradient(135deg, #fbbf24, #f59e0b, transparent)',
      sparkleColors: ['#fbbf24', '#fef08a', '#ffffff', '#f59e0b']
    },
    {
      en: "The serpent was not a mere silent reptile crawling on its belly initially, but a highly intelligent, upright creature capable of reason, speech, and deception, positioned closest to the human domain.",
      fr: "Le serpent n'était pas un simple reptile muet rampant sur son ventre à l'origine, mais une créature hautement intelligente, verticale, capable de raisonner, de parler et de tromper, positionnée au plus près du domaine humain.",
      accentColor: '#06b6d4', 
      bgGradient: 'rgba(6, 182, 212, 0.04)',
      borderGradient: 'linear-gradient(135deg, #06b6d4, #3b82f6, transparent)',
      sparkleColors: ['#06b6d4', '#67e8f9', '#ffffff', '#22d3ee']
    },
    {
      en: "Through seduction and the distortion of the spoken Word of God, a holy lineage was interrupted, introducing the fall of man and the immediate necessity for redemption through the ultimate Seed of the woman.",
      fr: "Par la séduction et la distorsion de la Parole parlée de Dieu, une lignée sainte a été interrompue, introduisant la chute de l'homme et la nécessité immédiate de la rédemption par la Semence ultime de la femme.",
      accentColor: '#d97706', 
      bgGradient: 'rgba(217, 119, 6, 0.04)',
      borderGradient: 'linear-gradient(135deg, #f59e0b, #b45309, transparent)',
      sparkleColors: ['#d97706', '#f59e0b', '#fef3c7', '#ffffff'] 
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (hoveredIndex !== null && isMouseMovingRef.current) {
        const activeColors = expositionData[hoveredIndex].sparkleColors;
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(new Sparkle(mousePosRef.current.x, mousePosRef.current.y, activeColors));
        }
        isMouseMovingRef.current = false;
      }

      particlesRef.current = particlesRef.current.filter(p => {
        p.update();
        p.draw(ctx);
        return p.opacity > 0;
      });

      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [hoveredIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY };
    isMouseMovingRef.current = true;
  };

  const getFrenchCardState = (index: number) => {
    if (hoveredIndex === null) return 'default-visible';
    if (hoveredIndex === index) return 'active-reveal';
    return 'faded-hidden';
  };

  return (
    <>
      <NavBar />

      <canvas 
        ref={canvasRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999, 
          pointerEvents: 'none' 
        }}
      />

      <div 
        className="original-sin-wrapper"
        style={{
          backgroundColor: '#050505',
          minHeight: '100vh',
          paddingTop: '160px', 
          paddingBottom: '100px',
          color: '#e2e8f0',
          fontFamily: "'Montserrat', sans-serif"
        }}
        onMouseMove={handleMouseMove}
      >
        <Container>
          <div className="text-center mb-5">
            <h1 style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#ffffff', textShadow: '0 2px 15px rgba(255,255,255,0.15)', letterSpacing: '3px' }} className="display-4 fw-bold mb-3">THE ORIGINAL SIN</h1>
            <h5 style={{ color: '#fbbf24', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.9rem', opacity: 0.9 }}>Le Péché Originel — Parallel Alignment Interface</h5>
            <div className="mx-auto my-4" style={{ width: '120px', height: '2px', background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)', boxShadow: '0 0 10px #fbbf24' }} />
          </div>

          {/* COLUMN HEADERS - Separated to stay perfectly on top of columns */}
          <Row className="mb-3 d-none d-lg-flex">
            <Col lg={6} className="pe-lg-5">
              <div className="language-header d-flex align-items-center gap-2">
                <span className="badge-flag">🇺🇸</span>
                <h3 className="mb-0 dynamic-panel-title">English Exposition</h3>
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5">
              <div className="language-header d-flex align-items-center gap-2">
                <span className="badge-flag">🇫🇷</span>
                <h3 className="mb-0 dynamic-panel-title">Exposition en Français</h3>
              </div>
            </Col>
          </Row>

          {/* PARALLEL ROW ARCHITECTURE: Locks paragraphs into pairs horizontally */}
          <div className="bilingual-matrix d-flex flex-column gap-4">
            {expositionData.map((item, index) => (
              <Row key={`row-${index}`} className="g-4 g-lg-5 align-items-stretch">
                
                {/* LEFT ELEMENT: ENGLISH */}
                <Col lg={6} className="pe-lg-5 col-matrix-left">
                  {/* Mobile Header Guard */}
                  <div className="language-header d-flex d-lg-none align-items-center gap-2 mb-2">
                    <span className="badge-flag">🇺🇸</span>
                    <h3 className="mb-0 dynamic-panel-title">English</h3>
                  </div>
                  <div 
                    className={`bilingual-para para-index-${index} ${hoveredIndex === index ? 'active-hover-state' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Visual Corner Deco */}
                    <div className="corner-deco top-left" />
                    <div className="corner-deco bottom-right" />
                    
                    <div className="inner-content-wrapper">
                      {item.en}
                    </div>
                  </div>
                </Col>

                {/* RIGHT ELEMENT: FRENCH */}
                <Col lg={6} className="ps-lg-5 col-matrix-right">
                  {/* Mobile Header Guard */}
                  <div className="language-header d-flex d-lg-none align-items-center gap-2 mb-2 mt-3">
                    <span className="badge-flag">🇫🇷</span>
                    <h3 className="mb-0 dynamic-panel-title">Français</h3>
                  </div>
                  <div 
                    className={`bilingual-para french-card para-index-${index} ${getFrenchCardState(index)}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Visual Corner Deco */}
                    <div className="corner-deco top-left" />
                    <div className="corner-deco bottom-right" />

                    <div className="inner-content-wrapper">
                      {item.fr}
                    </div>
                  </div>
                </Col>

              </Row>
            ))}
          </div>
        </Container>

        {/* CSS Alignment and Corner Accent Engine */}
        <style>{`
          /* MATRIX FORCE ALIGNMENT */
          .col-matrix-left, .col-matrix-right {
            display: flex;
            flex-direction: column;
          }
          .col-matrix-left .bilingual-para, .col-matrix-right .bilingual-para {
            flex: 1; /* Forces both elements inside a row to stretch to match the taller companion */
            display: flex;
            flex-direction: column;
          }
          .bilingual-para .inner-content-wrapper {
            flex: 1; /* Ensures internal padding and background match parent height seamlessly */
          }

          /* STYLISH INITIAL STATIC BORDERS */
          .bilingual-para {
            position: relative;
            background: rgba(255, 255, 255, 0.01);
            border-radius: 8px;
            padding: 1px; 
            font-size: 1.02rem;
            line-height: 1.75;
            color: #cbd5e1;
            cursor: pointer;
            z-index: 1;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          /* The Initial Visible Border Wrapper */
          .bilingual-para::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 8px;
            padding: 1px; /* Border thickness */
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 70%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            transition: background 0.5s ease, padding 0.3s ease;
            z-index: -1;
          }

          /* INITIAL CORNER BRACKETS DECORATION */
          .corner-deco {
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid rgba(255, 255, 255, 0.25);
            pointer-events: none;
            z-index: 2;
            transition: all 0.4s ease;
          }
          .corner-deco.top-left {
            top: -1px; left: -1px;
            border-right: none; border-bottom: none;
            border-top-left-radius: 8px;
          }
          .corner-deco.bottom-right {
            bottom: -1px; right: -1px;
            border-left: none; border-top: none;
            border-bottom-right-radius: 8px;
          }

          /* Inner frame styling container */
          .inner-content-wrapper {
            background: #0b0b0e;
            padding: 24px 28px;
            border-radius: 7px;
            transition: background 0.4s ease, color 0.4s ease;
          }

          /* Default fading structural properties */
          .french-card.default-visible { opacity: 1; filter: blur(0px); transform: scale(1); }
          .french-card.faded-hidden { opacity: 0.02 !important; filter: blur(10px) !important; transform: scale(0.97); pointer-events: none; }

          .dynamic-panel-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.15rem;
            font-weight: 600;
            color: #94a3b8;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .badge-flag { font-size: 1.3rem; }

          /* ======================================================= */
          /* THEMATIC LUXURY DYNAMIC SHIFT MATRICES                  */
          /* ======================================================= */

          .bilingual-para:hover::before, 
          .french-card.active-reveal::before {
            padding: 1.5px;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
          }

          /* SECTION INDEX 0: GOLD SHIFT */
          .para-index-0:hover::before, .french-card.para-index-0.active-reveal::before {
            background: ${expositionData[0].borderGradient};
          }
          .para-index-0:hover .corner-deco, .french-card.para-index-0.active-reveal .corner-deco {
            border-color: #fbbf24;
            box-shadow: 0 0 8px #fbbf24;
          }
          .para-index-0:hover .inner-content-wrapper, .french-card.para-index-0.active-reveal .inner-content-wrapper {
            background: radial-gradient(circle at top left, rgba(251, 191, 36, 0.05), #0c0c10 75%) !important;
            color: #fef08a !important;
          }
          .para-index-0:hover, .french-card.para-index-0.active-reveal {
            box-shadow: 0 10px 30px rgba(251, 191, 36, 0.08);
            transform: translateY(-2px);
          }

          /* SECTION INDEX 1: CYAN SHIFT */
          .para-index-1:hover::before, .french-card.para-index-1.active-reveal::before {
            background: ${expositionData[1].borderGradient};
          }
          .para-index-1:hover .corner-deco, .french-card.para-index-1.active-reveal .corner-deco {
            border-color: #06b6d4;
            box-shadow: 0 0 8px #06b6d4;
          }
          .para-index-1:hover .inner-content-wrapper, .french-card.para-index-1.active-reveal .inner-content-wrapper {
            background: radial-gradient(circle at top left, rgba(6, 182, 212, 0.06), #0c0c10 75%) !important;
            color: #e0e7ff !important;
          }
          .para-index-1:hover, .french-card.para-index-1.active-reveal {
            box-shadow: 0 10px 30px rgba(6, 182, 212, 0.08);
            transform: translateY(-2px);
          }

          /* SECTION INDEX 2: DESERT TAN SHIFT */
          .para-index-2:hover::before, .french-card.para-index-2.active-reveal::before {
            background: ${expositionData[2].borderGradient};
          }
          .para-index-2:hover .corner-deco, .french-card.para-index-2.active-reveal .corner-deco {
            border-color: #f59e0b;
            box-shadow: 0 0 8px #f59e0b;
          }
          .para-index-2:hover .inner-content-wrapper, .french-card.para-index-2.active-reveal .inner-content-wrapper {
            background: radial-gradient(circle at top left, rgba(217, 119, 6, 0.06), #0c0c10 75%) !important;
            color: #fde68a !important;
          }
          .para-index-2:hover, .french-card.para-index-2.active-reveal {
            box-shadow: 0 10px 30px rgba(217, 119, 6, 0.08);
            transform: translateY(-2px);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default OriginalSin;