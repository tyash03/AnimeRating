import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";
import animeData from "../data/animeData";

const HomePage = () => {
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const topRatedAnime = animeData.filter((anime) => anime.rating > 8.5);
  const mostSearchedAnime = animeData.slice(0, 2);

  return (
    <div className="home-page">
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

      <div className="anime-section">
        <h2>🔥 Top Rated Anime</h2>
        <div className="anime-list">
          {topRatedAnime.map((anime) => (
            <div key={anime.id} className="anime-item">
              <img src={anime.image} alt={anime.title} className="anime-thumbnail" />
              <h3>{anime.title}</h3>
              <p>⭐ Rating: {anime.rating}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="anime-section">
        <h2>🔍 Most Searched Anime</h2>
        <div className="anime-list">
          {mostSearchedAnime.map((anime) => (
            <div key={anime.id} className="anime-item">
              <img src={anime.image} alt={anime.title} className="anime-thumbnail" />
              <h3>{anime.title}</h3>
              <p>🔥 Popular</p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default HomePage;
