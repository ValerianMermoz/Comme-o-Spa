import React, { useRef, useEffect, useState } from "react";

function Presta() {
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
    <div className="Presta">
      <h2 className={`Prestatitre ${isVisible ? "reveal-visible" : ""}`}>
        Ce que je <span>vous</span> propose,
      </h2>

      <div className="conteneurpresta" ref={targetRef}>
        <div className={`boxpresta ${isVisible ? "reveal-visible" : ""}`}>
          <img
            src="https://i.postimg.cc/tJgJnxNr/Soin-corps.webp"
            width="300px"
            height="300px"
            className="imgpresta"
            alt="massage du dos"
          ></img>
          <div className="contentboxpresta">
            <h3>Soin du corps</h3>
          </div>
        </div>
        <div className={`boxpresta ${isVisible ? "reveal-visible" : ""}`}>
          <img
            src="https://i.postimg.cc/XYNWjbx8/Massages-1.webp"
            width="300px"
            height="300px"
            className="imgpresta"
            alt="huiles essentielles"
          ></img>
          <h3>Massages</h3>
        </div>
      </div>
    </div>
  );
}

export default Presta;
