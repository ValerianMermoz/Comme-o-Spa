import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navfooter = () => {
  return (
    <div className="headerlogo">
      <img src={Logo} className="Logo" alt="logo_footer" />
      <nav className="footernav">
        <Link>Télécharger ma carte de visite</Link>
        <Link to="/Mentions">Mentions légales</Link>
      </nav>
    </div>
  );
};

export default Navfooter;
