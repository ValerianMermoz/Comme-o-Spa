import React, { useRef, useEffect, useState } from "react";

function Instacontact() {
  const targetRef: any = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
    <div className="Instacontact">
      <h2 className={`Instatitre ${isVisible ? "reveal-visible" : ""}`}>Retrouvez-moi sur Instagram</h2>
      <div className="conteneurinsta" ref={targetRef}>
        <a
          href="https://www.instagram.com/p/CxFgIgds3RH/?img_index=1"
          target="_blank"
        >
          <img
            src="https://i.goopics.net/dn7kpy.png"
            className={`insta1 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 1"
          />
        </a>
        <a href="https://www.instagram.com/p/CyDTINVsr3R/" target="_blank">
          <img
            src="https://i.goopics.net/s8v5pw.png"
            className={`insta2 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 2"
          />
        </a>
        <a href="https://www.instagram.com/p/Cw2ISHrsO5X/" target="_blank">
          <img
            src="https://i.goopics.net/pdtpyh.png"
            className={`insta3 ${isVisible ? "reveal-visible" : ""}`}
            alt=" Instagram 3"
          />
        </a>
        <a href="https://www.instagram.com/p/CynYEmIsz0w/" target="_blank">
          <img
            src="https://i.goopics.net/tcwvp8.png"
            className={`insta4 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 4"
          />
        </a>
        <a href="https://www.instagram.com/p/Cyxs5sTM9uW/" target="_blank">
          <img
            src="https://i.goopics.net/stpj3c.png"
            className={`insta5 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 5"
          />
        </a>
        <a href="https://www.instagram.com/p/CxaZaO-skmW/" target="_blank">
          <img
            src="https://i.goopics.net/htc722.png"
            className={`insta6 ${isVisible ? "reveal-visible2" : ""}`}
            alt=" Instagram 6"
          />
        </a>
      </div>
    </div>
  );
}

export default Instacontact;
