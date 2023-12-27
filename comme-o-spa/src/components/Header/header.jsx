import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const lienActif = useLocation();
  function handleClick() {
    const number = "07 56 84 55 27";
    window.open("tel:" + number);
  }
  return (
    <div className="header" id="header">
      <img src="https://i.postimg.cc/rFtPWFFj/Headerlogo.webp" className="Logo" alt="logo_header" />

      <nav className="headernav">
        <Link
          to="/"
          className={`link ${lienActif.pathname === "/" ? "actif" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Accueil
        </Link>
        <Link
          to="/Massages"
          className={`link ${
            lienActif.pathname === "/Massages" ? "actif" : ""
          }`}
        >
          Massage à domicile
        </Link>
        <Link
          to="/Tarifs"
          className={`link ${lienActif.pathname === "/Tarifs" ? "actif" : ""}`}
        >
          Tarifs
        </Link>
        <div className="number">
          <img
            src="https://i.goopics.net/w8ytt2.png"
            className="telephone"
            alt="telephone"
          />

          <p className="numero" onClick={handleClick}>07 56 84 55 27</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
