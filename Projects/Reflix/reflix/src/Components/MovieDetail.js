import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail(props) {
  const { id } = useParams();
  const movie = props.movies.find((m) => m.id == id);

  return (
    <div class="movie-class">
      <h2>{movie.title}</h2>
      <div>{movie.descrShort}</div>
      <img src={movie.img} />
    </div>
  );
}
