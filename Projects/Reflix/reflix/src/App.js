import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Catalog from "./Components/Catalog";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";
function App() {
  function getInitUsers() {
    return USERS.map((user, id) => {
      return { ...user, id, budget: 9, rentedMovies: [] };
    });
  }

  const USERS = [
    { name: "Lyale", backgroundColor: "red" },
    { name: "Rawaby", backgroundColor: "rgb(197, 88, 88)" },
    { name: "Ramadan", backgroundColor: "rgb(51, 181, 51)" },
    { name: "Ahmad", backgroundColor: "rgb(236, 236, 62)" },
    { name: "Khalaila", backgroundColor: "rgb(128, 128, 128)" },
    { name: "Naarani", backgroundColor: "rgb(102,0,102)" },
  ];

  const [movies, setMovies] = useState([
    {
      id: 0,
      isRented: false,
      title: "Tarzan",
      year: 1999,
      img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
      descrShort:
        "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
    },
    {
      id: 1,
      isRented: false,
      title: "The Lion King",
      img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
      year: 1994,
      descrShort:
        "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
    },
    {
      id: 2,
      isRented: false,
      title: "Beauty and the Beast",
      year: 1991,
      img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
      descrShort:
        "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
    },
    {
      id: 3,
      isRented: false,
      title: "The Sword in the Stone",
      year: 1963,
      img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
      descrShort:
        "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
    },
    {
      id: 4,
      isRented: false,
      title: "Beauty and the Beast",
      year: 2016,
      img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
      descrShort:
        "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
    },
  ]);

  const [users, setUsers] = useState(getInitUsers());
  const [currentUserIndex, setCurrentUserIndex] = useState();
  const [budget, setBudget] = useState(20);
  const rentMovie = (movieId, currentUserBudget) => {
    const newMovies = [...movies];

    const rentedMovieIndex = newMovies.findIndex((mov) => mov.id === movieId);
    const isRented = newMovies[rentedMovieIndex].isRented;

    if (isRented) {
      currentUserBudget += 3;
      newMovies[rentedMovieIndex].isRented = false;
    } else {
      if (currentUserBudget - 3 < 0) {
        alert("Insufficient funds to rent this movie.");
        return;
      }
      newMovies[rentedMovieIndex].isRented = true;
      currentUserBudget -= 3;
    }
    setMovies(newMovies);
    setBudget(currentUserBudget);
  };

  const selectUser = (userId) => {
    setCurrentUserIndex(users.findIndex((user) => user.id === userId));
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Landing users={users} selectUser={selectUser} />}
          />
          <Route
            path="/catalog"
            element={
              <Catalog
                user={currentUserIndex !== null ? users[currentUserIndex] : {}}
                movies={movies}
                rentMovie={rentMovie}
              />
            }
          />

          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
