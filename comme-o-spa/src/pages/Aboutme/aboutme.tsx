import React, { useRef, useEffect, useState } from "react";

function Aboutme () {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const localTargetRef = targetRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    }, options);

    if (localTargetRef) observer.observe(localTargetRef);

    return () => {
      if (localTargetRef) observer.unobserve(localTargetRef);
    };
  }, [targetRef]);
  return (
    <div id="aboutme">
      <div className="conteneurimgaboutme">
      </div>
      <div className={`conteneurtextaboutme ${isVisible ? "reveal-visible" : ""}`} ref={targetRef}>
        <h2>Qui suis-je ?</h2>
        <p>
          Je m'apelle Olivia et je suis SPA Praticienne diplômée depuis 2011.
          Les soins proposés sont le résultat de mes 7 années d'expérience en
          SPA et balnéothérapie en France comme à l'étranger.
        </p>
        <p>
          Suite à cela, j'ai ressenti le besoin de faire une pause et élargir
          mes horizons professionnels. C'est ainsi que j'occupe depuis quelques
          années, un travail administratif. Et même si mon métier me plaît, je
          sentais qu'il me manquait quelque chose.
        </p>
        <p>
          Maman de deux petites filles, ma seconde grossesse a été l'élément
          déclencheur de mon nouvel objectif : conjuguer ma passion pour les
          soins tout en gardant un équilibre professionnel. Voici donc comme
          d'une grossesse, sont nés un bébé et une idée !
        </p>
        <p>Chaque femme a besoin de son moment pour se détendre, se recentrer, maintenir son équilibre de vie ou reprendre confiance.</p>
        <h3>CHAQUE FEMME A BESOIN DE COMME Ô SPA !</h3>
      </div>
    </div>
  );
};

export default Aboutme;
