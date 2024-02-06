import React from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import "./Movie.css";

export default function Movie(props) {
  return (
    <div className="movie">
      <h2>{props.movie.title}</h2>

      <div className="rent" onClick={props.rentMovie}>
        {props.movie.isRented ? (
          <RemoveCircleIcon className="add-icon" />
        ) : (
          <AddCircleIcon className="add-icon" />
        )}
      </div>
      <Link to={`/movies/${props.movie.id}`}>
        <img src={props.movie.img} alt={props.movie.title} />
      </Link>
    </div>
  );
}
