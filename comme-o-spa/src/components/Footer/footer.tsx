import Navfooter from "../Navfooter/navfooter";
import React, { useRef, useEffect, useState } from "react";

function Footer () {
  const targetRef: any = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries: any) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef]);
  return (
    <div className="Footer">
      <div className="iconesfooter" ref={targetRef}>
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/5af8wi.png"
            className={`iconef ${isVisible ? "reveal-visible" : ""}`}
            alt="icone maison" 
          />
          <h3 className={`text ${isVisible ? "reveal-visible" : ""}`}>Secteur Tournon, Valence, Saint-Peray</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/n7xqm1.png"
            className={`iconef ${isVisible ? "reveal-visible" : ""}`}
            alt="icone bio"
          />
          <h3 className={`text ${isVisible ? "reveal-visible" : ""}`}>Produits Bios & naturel</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/krhrfe.png"
            className={`iconef ${isVisible ? "reveal-visible" : ""}`}
            alt="icone bulle"
          />
          <h3 className={`text ${isVisible ? "reveal-visible" : ""}`}>Masseuse Bilingue</h3>
        </div>
      </div>
      <div className="imgfooter"></div>
      <Navfooter />
    </div>
  );
};

export default Footer;
