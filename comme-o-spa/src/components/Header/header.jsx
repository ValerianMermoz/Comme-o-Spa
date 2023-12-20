import Logo from "../../assets/logocos.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, $setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      $setScrolled(window.scrollY > 100);
    });
  }, []);
  const lienActif = useLocation();
  return (
    <div
      className={scrolled ? "header-transparent" : "header"}
      style={{
        background: scrolled ? "#794C3C" : "transparent",
      }}
    >
      <img src={Logo} className="Logo" alt="logo_header" />

      <nav className="headernav">
        <Link
          to="/"
          className={`link ${lienActif.pathname === "/" ? "actif" : ""}`}
          style={{
            color: scrolled ? "#FFFFFF" : "#000000",
          }}
        >
          Accueil
        </Link>
        <Link
          to="/Massages"
          className={`link ${
            lienActif.pathname === "/Massages" ? "actif" : ""
          }`}
          style={{
            color: scrolled ? "#FFFFFF" : "#000000",
          }}
        >
          Massage à domicile
        </Link>
        <Link
          to="/Tarifs"
          className={`link ${lienActif.pathname === "/Tarifs" ? "actif" : ""}`}
          style={{
            color: scrolled ? "#FFFFFF" : "#000000",
          }}
        >
          Tarifs
        </Link>
        <div
          className="number"
          style={{
            border: scrolled ? "2px solid #FFFFFF" : "2px solid #000000", background: scrolled ? "" : ""
          }}
        >
          <img
            src="https://i.goopics.net/w8ytt2.png"
            className="telephone"
            alt="telephone"
            style={{
              color: scrolled ? "#FFFFFF" : "#000000",
            }}
          />

          <p
            className="numero"
            style={{
              color: scrolled ? "#FFFFFF" : "#000000",
            }}
          >
            07 56 84 55 27
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
