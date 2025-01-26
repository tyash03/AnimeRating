import React from "react";

const TopRatedList = ({ animeData }) => {
  const topRatedAnime = animeData.filter((anime) => anime.rating > 8.5);

  return (
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
  );
};

export default TopRatedList;
