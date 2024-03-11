import React, { useState } from "react";
import Movie from "./Movie";
import TextField from "@mui/material/TextField";

import "./Catalog.css";
export default function Catalog(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = () => {
    return (
      props.movies &&
      props.movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  const rentedMovies = filteredMovies().filter((movie) => movie.isRented);
  return (
    <div>
      <TextField
        className="search"
        label="Search  by title"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        <h2>Rented Movies:</h2>
        <div className="catalog">
          {rentedMovies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              isRented={true}
              rentMovie={() => props.rentMovie(movie.id)}
            />
          ))}
        </div>
      </div>
      <h2>Catalog:</h2>

      <h2 className="budget-class">Budget:$</h2>
      <div className="catalog">
        {filteredMovies() &&
          filteredMovies().map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              rentMovie={() => props.rentMovie(movie.id)}
            />
          ))}
      </div>
    </div>
  );
}
