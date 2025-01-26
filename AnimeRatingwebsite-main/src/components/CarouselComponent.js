import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ animeData, openModal }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {animeData.map((anime) => (
        <div key={anime.id} className="card">
          <img src={anime.image} alt={anime.title} className="anime-image" />
          <h2>{anime.title}</h2>
          <button className="btn" onClick={() => openModal(`Rating: ${anime.rating}`)}>
            Show Rating
          </button>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
