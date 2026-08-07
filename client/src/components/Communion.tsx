import React, { useState } from 'react';

interface CommunionSection {
  id: string;
  questionEn: string;
  questionFr: string;
  en: string;
  fr: string;
}

const communionPoints: CommunionSection[] = [
  {
    id: 'a',
    questionEn: 'What does communion mean?',
    questionFr: 'Que veut dire communion?',
    en: `Communion means common union of the disciples of Jesus Christ through his body and blood represented by bread and wine. It is also called the Lord's supper or, in a denominational language, "the holy scene" (1Co 10:16; 11:20).`,
    fr: `Communion veut dire union commune des disciples de Jésus Christ en son corps et son sang représentés par du pain et du vin. Cela s'appelle aussi le repas du Seigneur ou, dans le langage dénominationel, "La Sainte Scène" (1Co 10:16; 11:20).`
  },
  {
    id: 'b',
    questionEn: 'What does communion consist of?',
    questionFr: 'En quoi consiste la communion?',
    en: `Communion in the assembly consists of consumption of bread, made with flour and water, and then grape wine. This meal symbolizes the Passover and a holocaust without salt, spice or grease (Mt 26:26-29; 1 Co 11:22-34; Le 1:3-16; 23; Ex 12:1-51; No 9:6-14).`,
    fr: `La communion dans l'assemblée consiste à consommer du pain, formé de farine et d'eau, et ensuite du vin de raisin. Ce repas symbolise la pâque et l'holocauste sans sel, épice, ou graisse (Mt 26:26-29; 1Co 11:22-34; Le 1:3-16; 23; Ex 12:1-51; No 9:6-14).`
  },
  {
    id: 'c',
    questionEn: 'Is it mandatory to take communion?',
    questionFr: 'Est-il obligatoire de prendre la communion?',
    en: `All true Christians must partake of the Lord's Supper instituted by Jesus during the last supper and observed by his disciples at night time. If someone who is about participating has an un-confessed sin, he will call the concerned individual to the side and confess before the meal. If that individual is absent, the believer will promise to God that he will confess as soon as possible after taking communion (Jn 13:1-15; Ac 20:11; Lu 17:4; Ja 4:16).`,
    fr: `Tout vrai Chrétien doit participer au repas du Seigneur institué par Jésus lors du dernier souper et observé par les disciples pendant la nuit. Si un eventuel participant a un péché non confessé, il appellera la personne concernée à coté et confessera avant le repas. Si cette personne est absente, le croyant promettra à Dieu qu'il confessera aussitôt possible après avoir pris la communion (Jn 13:1-15; Ac 20:11; Lu 17:4; Ja 4:16).`
  },
  {
    id: 'd',
    questionEn: 'What conditions should one meet in order to take communion?',
    questionFr: 'Quelle condition doit-on remplir pour participer à la communion?',
    en: `To take communion one must be justified through water baptism and sanctified by the truth; else one attracts judgment on oneself and should have been stopped. To take communion testifies that one walks according to the message of the hour and leads a life worthy of the Gospel before God and in men's eyes (Ac 2:38; 1Co 11:27-29).`,
    fr: `Pour participer à la communion on doit être justifié à travers le baptême d'eau et sanctifié par la vérité, autrement on attire un jugement sur soi-même et devait être empêché. Prendre la communion témoigne qu'on marche selon le message de l'heure et mène une vie digne de l'Evangile devant Dieu et aux yeux des hommes (Ac 2:38; 1Co 11:27-29).`
  },
  {
    id: 'e',
    questionEn: 'How is communion taken?',
    questionFr: 'Comment prendre la communion?',
    en: `The pastor blesses a bread, breaks it into several pieces which he hands to someone – a deacon – to allow each sanctified believer who comes forward to take a piece. After all the saints have eaten, the pastor prays on a cup of wine which he hands for distribution to the participants who come forward again (1Co 11:23-25; Mt 26:26).`,
    fr: `Le pasteur bénit un pain, le casse en plusieurs morceaux et le remet à quelqu'un – un diacre – pour permettre à chaque croyant sanctifié qui s'avance de prendre un morceau. Après que tous les saints ont mangé, le pasteur prie sur une coupe de vin qu'il passe pour distribution aux participants qui s'avancent à nouveau (1Co 11:23-25; Mt 26:26).`
  },
  {
    id: 'f',
    questionEn: 'Why should one take communion?',
    questionFr: 'Pourquoi doit-on prendre la communion?',
    en: `Jesus left three practical ordinances for the church (water baptism, communion and foot washing). Thus, one practices communion to obey Christ and testify that he died and will return to take his bride to the wedding supper of the Lamb in heaven where all the saints, including Abraham who received communion from Melchisedec, will seat at a table (1Co 11:26; Ge 14:18-20; Lu 22:21,30; Mt 8:11; Ap 19:9; 1Co 10:21-25; Mt 18:20; Jn 14:21).`,
    fr: `Jésus a laissé trois ordonnances pratiques pour l'église (baptême d'eau, communion, et lavement des pieds). La communion est un acte d'obéissance à Christ et un témoignage qu'il était mort et qu'il reviendra chercher son épouse pour l'amener au souper des noces de l'agneau dans le ciel où tous les saints, y compris Abraham qui a reçu la communion de Melchisédech, s'assiéront à table (1Co 11:26; Ge 14:18-20; Lu 22:21,30; Mt 8:11; Ap 19:9; 1Co 10:21-25; Mt 18:20; Jn 14:21).`
  },
  {
    id: 'g',
    questionEn: 'When should one have communion?',
    questionFr: 'Quand doit-on avoir la communion?',
    en: `Communion can be taken each time one is ready, and foot washing comes immediately after. Three or four times a year seem as valid as once a month. Under some difficult conditions, one can leave the foot washing for the following night. Just like two families could partake of a Passover lamb if one family was not enough, one can use more than one bread/cup/vase for the multitude spread into many groups with one cup per group (Ex 12:4; 1 Ti 5:10).`,
    fr: `La communion peut être prise chaque fois qu'on est disposé, et le lavement des pieds vient immédiatement après. Trois ou quatre fois par an semblent aussi valables qu'une fois par mois. Dans des conditions difficiles, on peut laisser le lavement des pieds pour le soir suivant. De même que deux familles pouvaient partager un agneau de Pâque si une famille était peu nombreuse, on peut utiliser plus d'un pain/coupe/cuvette pour la multitude repartie en plusieurs groupes avec une coupe par groupe (Ex 12:4; 1 Ti 5:10).`
  },
  {
    id: 'h',
    questionEn: 'Why should foot washing be practiced?',
    questionFr: 'Pourquoi doit-on pratiquer le lavement des pieds?',
    en: `All justified believers have a right to the washing of feet. As a token of humility, the brothers wash their feet mutually while the sisters do the same among themselves, one on one. Jesus says, "You must wash one another's feet" (Jn 13:14; 1Pe 5:6).`,
    fr: `Tous les croyants justifiés ont droit au lavement des pieds. En signe d'humilité, les frères se lavent les pieds mutuellement pendant que les sœurs font de même entre elles, une à une. Jésus dit, "Vous devez vous laver les pieds les uns les autres" (Jn 13:14; 1Pi 5:6).`
  }
];

export default function Communion() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="communion-page-wrapper w-100 min-vh-100 text-light bg-black" style={{ paddingTop: "100px" }}>
      <main className="container-fluid py-5" style={{ maxWidth: "1280px" }}>
        
        {/* Header Section */}
        <div className="text-center mb-5 px-3">
          <span className="text-warning text-uppercase tracking-widest fw-bold mb-2 d-block small">
            DOCTRINAL STUDY • ÉTUDE DOCTRINALE
          </span>
          <h1 
            className="display-4 fw-bold text-white mb-2" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            COMMUNION
          </h1>
          <h2 
            className="h4 text-warning fw-normal mb-4" 
            style={{ fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif" }}
          >
            LA SAINTE CÈNE ET LE LAVEMENT DES PIEDS
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
          {communionPoints.map((item) => {
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
                  <div style={cardStyle} className="h-100 d-flex flex-column gap-2">
                    <div className="d-flex gap-2 align-items-baseline">
                      <span className="fw-bold text-warning">{item.id}.</span>
                      <h3 className="h6 fw-bold text-warning mb-0">{item.questionEn}</h3>
                    </div>
                    <p className="mb-0 text-light" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                      {item.en}
                    </p>
                  </div>
                </div>

                {/* French Side */}
                <div className="col-12 col-md-6">
                  <div style={cardStyle} className="h-100 d-flex flex-column gap-2">
                    <div className="d-flex gap-2 align-items-baseline">
                      <span className="fw-bold text-warning">{item.id}.</span>
                      <h3 className="h6 fw-bold text-warning mb-0">{item.questionFr}</h3>
                    </div>
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