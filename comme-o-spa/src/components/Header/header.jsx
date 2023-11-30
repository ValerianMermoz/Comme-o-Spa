import Logo from "../../assets/logo.png";
import Nav from "../Nav/nav";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, $setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      $setScrolled(window.scrollY > 200);
    });
  }, []);
  return (
    <div>
      <div
        className={scrolled ? "header-transparent" :  "header"}
        style={{
          background: scrolled ? "#c68f7b" : "transparent", 
        }}
      >
        <img src={Logo} className="Logo" alt="logo"></img>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
