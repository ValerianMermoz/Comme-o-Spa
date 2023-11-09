import Logo from "./assets/logo.png";
import Nav from "./components/nav";
import Imgcarroussel from "./assets/carroussel.png";

function Home() {
  return (
    <div className="homescreen">
      <img src={Logo}></img>
      <Nav />
      <img src={Imgcarroussel}></img>
    </div>
  );
}

export default Home;
