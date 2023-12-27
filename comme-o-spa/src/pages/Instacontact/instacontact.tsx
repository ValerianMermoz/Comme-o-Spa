import React, { useRef, useEffect, useState } from "react";

function Instacontact() {
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
    <div className="Instacontact">
      <h2 className={`Instatitre ${isVisible ? "reveal-visible" : ""}`}>
        Retrouvez-moi sur Instagram
      </h2>
      <div className="conteneurinsta" ref={targetRef}>
        <a
          href="https://www.instagram.com/p/CxFgIgds3RH/?img_index=1"
          target="_blank" rel="noreferrer"
        >
          <img
            src="https://i.postimg.cc/RCy5rtnv/insta1.webp"
            width="400px"
            height="400px"
            className={`insta1 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 1"
          />
        </a>
        <a href="https://www.instagram.com/p/CyDTINVsr3R/" target="_blank" rel="noreferrer">
          <img
            src="https://i.postimg.cc/fTd4Mbxm/insta2.webp"
            width="400px"
            height="400px"
            className={`insta2 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 2"
          />
        </a>
        <a href="https://www.instagram.com/p/Cw2ISHrsO5X/" target="_blank" rel="noreferrer">
          <img
            src="https://i.postimg.cc/cLGpCNmj/insta3.webp"
            width="400px"
            height="400px"
            className={`insta3 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 3"
          />
        </a>
        <a href="https://www.instagram.com/p/CynYEmIsz0w/" target="_blank" rel="noreferrer">
          <img
            src="https://i.postimg.cc/bvz40H49/insta4.webp"
            width="400px"
            height="400px"
            className={`insta4 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 4"
          />
        </a>
        <a href="https://www.instagram.com/p/Cyxs5sTM9uW/" target="_blank" rel="noreferrer">
          <img
            src="https://i.postimg.cc/y8hwSrpN/insta5.webp"
            width="400px"
            height="400px"
            className={`insta5 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 5"
          />
        </a>
        <a href="https://www.instagram.com/p/CxaZaO-skmW/" target="_blank" rel="noreferrer">
          <img
            src="https://i.postimg.cc/bJXPx2Hy/insta6.webp"
            width="400px"
            height="400px"
            className={`insta6 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 6"
          />
        </a>
      </div>
    </div>
  );
}

export default Instacontact;
