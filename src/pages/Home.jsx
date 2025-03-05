import Movie_card from "../components/Movie_card";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Saksham porn", date: "2024" },
    { id: 2, title: "Shubh porn", date: "2024" },
    { id: 3, title: "Adarsh porn", date: "2024" },
  ];

  const handleSearch = () => {
    alert("searching for " + searchQuery);
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input className="search-input" type="text" placeholder="Search here..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button className="search-btn">Search</button>
      </form>
      <div className="movies_grid">
        {movies.map((movie) => (
          <Movie_card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
