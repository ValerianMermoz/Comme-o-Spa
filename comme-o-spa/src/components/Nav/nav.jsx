import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const lienActif = useLocation();
  return (
    <div className="navbar">
      <nav className="headernav">
        <Link to="/"className={`link ${lienActif.pathname === '/' ? 'actif' : ''}`}>Accueil</Link>
        <Link to="/Massages" className={`link ${lienActif.pathname === '/Massages' ? 'actif' : ''}`}>Massage à domicile</Link>
        <Link to="/Tarifs" className={`link ${lienActif.pathname === '/Tarifs' ? 'actif' : ''}`}>Tarifs</Link>
        <img src="https://i.goopics.net/4ujmmk.png" className="telephone" alt="telephone"/>
      </nav>
    </div>
  );
};

export default Nav;
