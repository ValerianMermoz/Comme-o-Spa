import React from "react";
import { Link } from "react-router-dom";


const Navfooter = () => {
  return (
    <div className="footerconteneur">
      <a href="mailto:commeospa07@gmail.com">
        {" "}
        <img src="https://i.postimg.cc/52Y876FY/email.webp" className="email" alt="lien pour m'envoyer un email" />
      </a>
      <nav className="footernav">
        <a className="linkfooter" href="./Flyer.pdf" target="_blank">
          Télécharger ma carte de visite
        </a>
        <Link to="/Mentions" className="linkfooter">
          Mentions légales
        </Link>
      </nav>
    </div>
  );
};

export default Navfooter;
