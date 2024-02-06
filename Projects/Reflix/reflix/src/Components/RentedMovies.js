import React from "react";
import Movie from "./Movie";

const RentedMovies = (props) => {
  return (
    <div className="rented-movies-container">
      <h2>Rented:</h2>
      <div className="rented-movies">
        {props.rentedMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            isRented={true}
            rentMovie={() => {}}
            unRentMovie={() => props.unRentMovie(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default RentedMovies;
