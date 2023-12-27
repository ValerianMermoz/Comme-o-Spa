import React from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "../../assets/Slide1.jpg"
import Slide2 from "../../assets/Slide2.jpg"
import Slide3 from "../../assets/Slide3.jpg"


function Slider() {

    const datas = [
        {
            id: 1,
            image: Slide1,
            title: "Massage relaxant à domicile",
            text: `Modelage à visée non médicale / Réservé pour clientèle féminine`,
            alt: `Produits soins`
        },
        {
            id: 2,
            image: Slide2,
            title: "Sur rendez-vous",
            text: `Le vendredi et le week-end`,
            alt: `Séance massage`
        },
        {
            id: 3,
            image: Slide3,
            title: "Réservez votre soin",
            text: `Avec une Esthéticienne SPA-Praticienne qualifiée`,
            alt: `Gros plan dos`
        },
    ]
    return (
        <Carousel showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} autoPlay={true} interval={4000} infiniteLoop={true} stopOnHover={false} animationHandler={"fade"} >
        {datas.map(slide => (
            <div key={slide.id}>
                <img src={slide.image} className="imgcarousel" width="1600px" height="1100px" alt={slide.alt} />

                <div className="overlay">
                    <h1 className="overlay__title">{slide.title}</h1>
                    <h2 className="overlay__text">{slide.text}</h2>
                </div>
            </div>
        ))}
        </Carousel>
    )
}

export default Slider;
