import Slider from "../../components/Carousel/carousel";
import Presta from "../Presta/presta.tsx"
import Aboutme from "../Aboutme/aboutme.tsx";
import Instacontact from "../Instacontact/instacontact.tsx";
import Footer from "../../components/Footer/footer.tsx";

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
