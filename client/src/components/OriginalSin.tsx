import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PointPair {
  id: number;
  en: string;
  fr: string;
}

const originalSinPoints: PointPair[] = [
  {
    id: 1,
    en: "The Bible does not say that Adam and Eve sinned because they ate an apple or another natural fruit. The apple theory is a denominational lie. The original sin was sexual and not alimentary (Pro 30:20; Ge 3:13).",
    fr: "La Bible ne dit pas qu’Adam et Eve ont péché parce qu’ils ont mangé une pomme ou un autre fruit naturel. La théorie de pomme est un mensonge dénominationel. Le péché originel était sexuel et non alimentaire (Pro 30 :20 ; Ge 3 :13)."
  },
  {
    id: 2,
    en: "The two trees that were in the midst of the Garden of Eden were spiritual trees, and not natural. The tree of life is Jesus Christ. The tree of knowledge of good and evil is the one who produces death (Ge 2 :9 ; Jn 15 :5 ; 3 :16 ; 4 :14 ; 5 :40 ; 6 : 35, 47, 54, 63, 68 ; 10 :28 ; 11 :25 ; 17 :2 ; Re 6 :8). Jesus offers the fruit of the spirit (Ga 5 :22).",
    fr: "Les deux arbres qui étaient au milieu du Jardin d’Eden étaient des arbres spirituels, et non naturels. L’arbre de vie est Jésus Christ. L’arbre de la connaissance du bien et du mal est celui qui produit la mort (Ge 2 :9 ; Jn 15 :5 ; 3 :16 ; 4 :14 ; 5 :40 ; 6 : 35, 47, 54, 63, 68 ; 10 :28 ; 11 :25 ; 17 :2 ; Ap 6 :8). Jésus offre le fruit de l’Esprit (Ga 5 :22)."
  },
  {
    id: 3,
    en: "The old serpent was not a reptile, but an animal that could speak, reason, and walk (Ge 1:24; 3:1, 4, 5, 14). God metamorphosed him after the original sin.",
    fr: "Le serpent ancien n’était pas un reptile, mais un animal qui pouvait parler, raisonner, et marcher (Ge 1 :24 ; 3 :1, 4, 5, 14). Dieu l’a métamorphosé après le péché originel."
  },
  {
    id: 4,
    en: "Satan, a fallen angel, was in the Garden of Eden (Ez 28:13-17; He 1:14). He entered into Judas to kill the second Adam (Jn 13:27; 1 Co 15:45). He used the serpent to lead Eve and her husband to death (Re 12:9; Ro 5:16-19; 1 Ti 2:12-15).",
    fr: "Satan, un ange déchu, était dans le jardin d’Eden (Ez 28 :13-17 ; He 1 :14). Il entra dans Judas pour faire mourir le second Adam (Jn 13 :27 ; 1 Co 15 :45). Il utilisa le serpent pour faire mourir Eve et son mari (Ap 12 :9 ; Ro 5 :16-19 ; 1 Ti 2 :12-15)."
  },
  {
    id: 5,
    en: "The original sin was adultery between Eve and the old serpent (Pro 30:20; Ge 3:6). Based on the eternal laws of God, Adam should have not taken Eve back after she had left him and had defiled herself with the serpent (De 24:1-4; 22:22).",
    fr: "Le péché originel était l’adultère entre Eve et le serpent ancien (Pro 30 :20 ; Ge 3 :6). Basant sur les lois éternelles de Dieu, Adam ne devait pas reprendre Eve après qu’elle l’avait laissé et s’était souillée avec le serpent (De 24 :1-4; 22 :22)."
  },
  {
    id: 6,
    en: "As sin came by one man, justification also comes by one man (Ro 5:19). As sin entered by the shedding of Eve’s virginity blood, forgiveness of sins came by the shedding of Christ’ blood (Ge 3:21; He 9:22).",
    fr: "De même que le péché vint par un homme, la justification vient aussi par un homme (Ro 5 :19). Comme le péché entra par l’effusion du sang de la virginité d’Eve, le pardon des péchés vient par l’effusion du Sang de Christ (Ge 3 :21; He 9 :22)."
  },
  {
    id: 7,
    en: "After sinning, Adam and Eve covered their nakedness. God began to talk to them about seeds, birth pains, marital and spiritual submission of the woman, and the woman’s desire that would be to her husband instead of to the serpent (Ge 3 :7, 15, 16 ; Ep 5 :22 ; 1 Ti 2 :12- 15 ; 1 Co 14 :33-37).",
    fr: "Apres avoir péché, Adam et Eve couvrirent leur nudité. Dieu commença à leur parler de postérité, de douleurs d’enfantement, de la soumission conjugale et spirituelle de la femme, et des désirs de la femme qui ne seraient plus portés vers le serpent, mais vers son mari (Ge 3 :7, 15, 16 ; Ep 5 :22 ; 1 Ti 2 :12- 15 ; 1 Co 14 :33-37)."
  },
  {
    id: 8,
    en: "After the original sin, Eve was proclaimed the mother of all living (Ge 3:20). The Holy Scriptures or the biblical genealogies have never declared Adam the father of all mankind (Ge 5:1-6; Luc 3:23, 38).",
    fr: "Suite au péché originel, Eve fut proclamée la mère de tous les vivants (Ge 3 :20). Les saintes écritures ou les généalogies bibliques n'ont jamais déclaré Adam le père de tous les humains (Ge 5 :1-6 ; Luc 3 :23, 38)."
  },
  {
    id: 9,
    en: "Adam knew Eve once. She conceived and gave birth to twin children, Cain and Abel. Eve stated that she had gotten a man from the Lord, not with Adam’s biological help (Ge 4:1-2). He knew Eve again, and she gave birth to Seth (Ge 4:25).",
    fr: "Adam connut Eve une fois. Elle conçut et enfanta deux enfants jumeaux, Caïn et Abel. Eve dit qu’elle forma Caïn avec l’aide de Dieu, non pas avec l’aide biologique d’Adam (Ge 4 :1-2). Il connut Eve encore, et elle enfanta Seth (Ge 4 :25)."
  },
  {
    id: 10,
    en: "Cain was of the old serpent, not of Adam (1Jn 3:12; Mt 13:19, 38; Ac 19:16; Re 12:9). Cain’s heirs were serpents (Mt 3:7; 13:38; 23:33).",
    fr: "Caïn était du serpent ancien, et non pas d’Adam (1Jn 3 :12 ; Mt 13:19, 38; Ac 19 :16 ; Ap 12 :9). Les descendants de Caïn étaient des serpents (Mt 3 :7 ; 13 :38 ; 23 :33)."
  },
  {
    id: 11,
    en: "Cain reflected his father (Ge 4) for he was jealous, rude, selfish, violent, wicked, impenitent etc. Adam and Eve, God’s seeds who were born for salvation, were punished for their disobedience (Ge 3:15-19). Cain, serpent’s seed who was born for perdition, was cursed (Ge 4 :11 ; Jn 17 :12 ; Ro 9 :22 ; 2 Ti 2 :10 ; 2 Pi 2 :12).",
    fr: "Caïn reflétait son père (Ge 4) car il était jaloux, orgueilleux, méchant, violent, rude, impénitent etc. Adam et Eve, des semences de Dieu nées pour le salut, furent punis à cause de leur désobéissance (Ge 3 :15-19). Caïn, semence du serpent née pour la perdition, fut maudit (Ge 4 :11 ; Jn 17 :12 ; Ro 9 :22 ; 2 Ti 2 :10 ; 2 Pi 2 :12)."
  },
  {
    id: 12,
    en: "All animals could reproduce by sexuality before and after the fall. Adultery or sexual perversion caused the fall in Eden, Noah’s flood, the destruction of Sodom, and will cause the destruction of the present world (Ge 1 :22 ; 6 :2-3 ; 19 :5-8 ; Luc 17 :26-30).",
    fr: "Tous les animaux devaient reproduire par la sexualité avant et après la chute. L’adultère ou la perversion sexuelle a causé la chute en Eden, le déluge de Noé, la destruction de Sodome et Gomorrhe, et causera la destruction du monde actuel (Ge 1 :22 ; 6 :2-3 ; 19 :5-8 ; Luc 17 :26-30)."
  }
];

export default function OriginalSin() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="original-sin-page-wrapper w-100 min-vh-100 text-light bg-black">
    

      <main className="container-fluid py-5" style={{ maxWidth: "1280px", marginTop: "80px" }}>
        
        {/* Header Section */}
        <div className="text-center mb-5 px-3">
          <span className="text-warning text-uppercase tracking-widest fw-bold mb-2 d-block small">
            DOCTRINAL STUDY • ÉTUDE DOCTRINALE
          </span>
          <h1 
            className="display-4 fw-bold text-white mb-3" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            TRUTH CONCERNING THE ORIGINAL SIN
          </h1>
          <h2 
            className="h4 text-warning fw-normal mb-4" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            VÉRITÉ CONCERNANT LE PÉCHÉ ORIGINEL
          </h2>
          <hr className="border-warning opacity-25 w-25 mx-auto my-4" />
        </div>

        {/* Column Headers */}
        <div className="row g-4 mb-4 d-none d-md-flex text-uppercase fw-bold text-warning small px-2">
          <div className="col-md-6 border-bottom border-warning pb-2">
            ENGLISH VERSION
          </div>
          <div className="col-md-6 border-bottom border-warning pb-2">
            VERSION FRANÇAISE
          </div>
        </div>

        {/* Parallel Interactive Study Grid */}
        <div className="d-flex flex-column gap-3">
          {originalSinPoints.map((item) => {
            const isHovered = activeId === item.id;
            
            const cardStyle: React.CSSProperties = {
              backgroundColor: isHovered ? "rgba(234, 179, 8, 0.08)" : "#0d1322",
              border: isHovered ? "2px solid #eab308" : "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "20px",
              transition: "all 0.25s ease-in-out",
              boxShadow: isHovered ? "0 0 15px rgba(234, 179, 8, 0.25)" : "none",
              cursor: "pointer"
            };

            return (
              <div 
                key={item.id}
                className="row g-3"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* English Side */}
                <div className="col-12 col-md-6">
                  <div style={cardStyle} className="h-100 d-flex gap-3">
                    <span className="fw-bold text-warning" style={{ minWidth: "28px" }}>
                      {item.id}.
                    </span>
                    <p className="mb-0 text-light" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                      {item.en}
                    </p>
                  </div>
                </div>

                {/* French Side */}
                <div className="col-12 col-md-6">
                  <div style={cardStyle} className="h-100 d-flex gap-3">
                    <span className="fw-bold text-warning" style={{ minWidth: "28px" }}>
                      {item.id}.
                    </span>
                    <p className="mb-0 text-light" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                      {item.fr}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

     
    </div>
  );
}