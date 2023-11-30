import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";

const Navfooter = () => {
  return (
    <div className="headerlogo">
      <img src={Logo} className="Logo" alt="Logo" />
      <nav className="footernav">
        <Link>Télécharger ma carte de visite</Link>
        <Link to="/Mentions">Mentions légales</Link>
      </nav>
    </div>
  );
};

export default Navfooter;
