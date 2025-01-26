import React from "react";
import animeData from "../data/animeData";

const TopRatedPage = () => {
  const topRated = animeData.filter((anime) => anime.rating > 8.5);

  return (
    <div className="top-rated-page">
      {topRated.map((anime) => (
        <div key={anime.id} className="card">
          <img src={anime.image} alt={anime.title} className="anime-thumbnail" />
          <h2>{anime.title}</h2>
          <p>Rating: {anime.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default TopRatedPage;
