import Navfooter from "../Navfooter/navfooter";
import React, { useRef, useEffect, useState } from "react";

function Footer () {
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
    <div className="Footer">
      <div className="iconesfooter" ref={targetRef}>
        <div className="boxfooter">
          <img
            src="https://i.postimg.cc/K86Bdxn9/home.webp"
            className={`iconef ${isVisible ? "reveal-visible" : ""}`}
            alt="icone maison" 
          />
          <h3 className={`text ${isVisible ? "reveal-visible" : ""}`}>Secteur Tournon, Valence, Saint-Peray</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.postimg.cc/wj8bk81p/leaf.webp"
            className={`iconef ${isVisible ? "reveal-visible" : ""}`}
            alt="icone bio"
          />
          <h3 className={`text ${isVisible ? "reveal-visible" : ""}`}>Produits Bios & naturel</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.postimg.cc/X7DwkwX6/bubble.webp"
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
