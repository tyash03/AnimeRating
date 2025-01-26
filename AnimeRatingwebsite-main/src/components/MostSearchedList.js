import React from "react";

const MostSearchedList = ({ animeData }) => {
  const mostSearchedAnime = animeData.slice(0, 2);

  return (
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
  );
};

export default MostSearchedList;
