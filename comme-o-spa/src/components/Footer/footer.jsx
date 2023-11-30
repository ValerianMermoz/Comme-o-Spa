import Navfooter from "../Navfooter/navfooter";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconesfooter">
        <div className="boxfooter">
          <img src="https://i.goopics.net/5af8wi.png" className="iconef" alt="icone maison" />
          <p>A domicile</p>
        </div>
        <div className="boxfooter">
          <img src="https://i.goopics.net/n7xqm1.png" className="iconef" alt="icone bio" />
          <p>Produits Bios & naturel</p>
        </div>
        <div className="boxfooter">
          <img src="https://i.goopics.net/krhrfe.png" className="iconef" alt="icone bulle" />
          <p>Masseuse Bilingue</p>
        </div>
      </div>
      <div className="imgfooter"></div>
      <Navfooter />
    </div>
  );
};

export default Footer;
