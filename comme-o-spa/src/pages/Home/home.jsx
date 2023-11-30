import Slider from "../../components/Carousel/carousel";
import Presta from "../Presta/presta"
import Aboutme from "../Aboutme/aboutme";
import Instacontact from "../Instacontact/instacontact";
import Footer from "../../components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <Presta />
      <Aboutme />
      <Instacontact />
      <Footer />
    </div>
  );
};

export default Home;
