import React, { useState } from 'react';
import Slider from 'react-slick';
import { bigDataExpertise } from './ExpertiseData';
import "./styles.scss"
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const Expertise: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    nextArrow: <div className="arrowRight" />,
    prevArrow: <div className="arrowLeft"/>,
  };

  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {bigDataExpertise.map((card, index) => (
          <div key={index} className={index === activeIndex ? "activeCard" : "card"}>
            {index === activeIndex ? (
              <div className="cardContent">
                <img src={card.image} alt="title" className="activeImage" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">See more</a>
              </div>
            ) : (
              <div className="cardContentSmall">
                <img src="image" alt="title" className="image"/>
                <h3>{card.title}</h3>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Expertise;
