import React from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {

    const datas = [
        {
            id: 1,
            image: `https://i.goopics.net/fql4j9.jpg`,
            title: "Massage relaxant à domicile",
            text: `Modelage à visée non médicale / Réservé pour clientèle féminine`
        },
        {
            id: 2,
            image: `https://i.goopics.net/xhnnbb.png`,
            title: "Sur rendez-vous",
            text: `Le vendredi et le week-end`
        },
        {
            id: 3,
            image: `https://i.goopics.net/vvtykx.png`,
            title: "Réservez votre soin",
            text: `Avec une Esthéticienne SPA-Praticienne qualifiée`
        },
    ]
    return (
        <Carousel showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} autoPlay={true} interval={4000} infiniteLoop={true} stopOnHover={false} animationHandler={"fade"} >
        {datas.map(slide => (
            <div key={slide.id}>
                <img src={slide.image} className="imgcarousel" alt='' />
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
