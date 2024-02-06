import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing(props) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/catalog");
  };

  return (
    <div className="divs">
      <h2>WHO'S WATCHING?</h2>

      <div className="boxs">
        {props.users.map((user) => (
          <Link to="/catalog" key={user.id}>
            <div
              className="box"
              onClick={handleUserClick}
              style={{
                backgroundColor: user.backgroundColor,
                color: "black",
                fontSize: 30,
                fontFamily: "Dancing Script, cursive",
              }}
            >
              {user.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
