import React from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {

    const datas = [
        {
            id: 1,
            image: `https://i.goopics.net/fql4j9.jpg`,
            title: "Le soin directement chez vous",
            text: `Détendez-vous et profitez`
        },
        {
            id: 2,
            image: ``,
            title: "Titre du slider 2",
            text: `Description de la slide 2`
        },
        {
            id: 3,
            image: ``,
            title: "Titre du slider 3",
            text: `Description de la slide 3`
        },
    ]
    return (
        <Carousel  showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} >
        {datas.map(slide => (
            <div key={slide.id}>
                <img src={slide.image} className="imgcarousel" alt='' />
                <div className="overlay">
                    <h2 className="overlay__title">{slide.title}</h2>
                    <p className="overlay__text">{slide.text}</p>
                </div>
            </div>
        ))}
        </Carousel>
    )
}

export default Slider;
