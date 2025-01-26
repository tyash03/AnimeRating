import React, { useState } from "react";
import animeData from "../data/animeData";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = animeData.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
      <div className="search-results">
        {results.map((anime) => (
          <div key={anime.id} className="card">
            <img src={anime.image} alt={anime.title} className="anime-thumbnail" />
            <h2>{anime.title}</h2>
            <p>Rating: {anime.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
