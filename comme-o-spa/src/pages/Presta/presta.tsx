import React,{ useRef, useEffect, useState } from "react";

function Presta () {
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
      <div className="Presta">
        <h2 className={`Prestatitre ${isVisible ? "reveal-visible" : ""}`}>
          Ce que je <span>vous</span> propose,
        </h2>

        <div className="conteneurpresta" ref={targetRef}>
          <div className={`boxpresta ${isVisible ? "reveal-visible" : ""}`}>
            <img
              src="https://i.goopics.net/i4rri8.png"
              className="imgpresta"
              alt="massage du dos"
            ></img>
            <div className="contentboxpresta">
              <h3>Soin du corps</h3>
            </div>
          </div>
          <div className={`boxpresta ${isVisible ? "reveal-visible" : ""}`}>
            <img
              src="https://i.goopics.net/w7vxhm.png"
              className="imgpresta"
              alt="huiles essentielles"
            ></img>
            <h3>Massages</h3>
          </div>
        </div>
      </div>

  );
};

export default Presta;
