import Navfooter from "../Navfooter/navfooter";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconesfooter">
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/5af8wi.png"
            className="iconef"
            alt="icone maison"
          />
          <h3>Secteur Tournon, Valence, Saint-Peray</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/n7xqm1.png"
            className="iconef"
            alt="icone bio"
          />
          <h3>Produits Bios & naturel</h3>
        </div>
        <div className="boxfooter">
          <img
            src="https://i.goopics.net/krhrfe.png"
            className="iconef"
            alt="icone bulle"
          />
          <h3>Masseuse Bilingue</h3>
        </div>
      </div>
      <div className="imgfooter"></div>
      <Navfooter />
    </div>
  );
};

export default Footer;
