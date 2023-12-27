import Slider from "../../components/Carousel/carousel";
import Presta from "../Presta/presta.tsx";
import Aboutme from "../Aboutme/aboutme.tsx";
import Instacontact from "../Instacontact/instacontact.tsx";
import Footer from "../../components/Footer/footer.tsx";



function Home() {
  return (
    <div>
      <script id="CookieDeclaration" src="https://consent.cookiebot.com/c9d60bfb-40f0-4ab3-bc0b-6058c47f768c/cd.js" type="text/javascript" async></script>
      <Slider />
      <Presta />
      <Aboutme />
      <Instacontact />
      <Footer />
    </div>
  );
}

export default Home;
