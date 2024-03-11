import "./App.css";
import Cities from "./components/Cities";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import CircularProgress from "@mui/joy/CircularProgress";
import City from "./components/City";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function App() {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [mountCities, setMountedCities] = useState(false);
  const handleInput = function (value) {
    setCity(value);
  };
  const { data } = useSWR(
    mountCities ? `http://localhost:2001/weather/cities` : null,
    fetcher
  );
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    setMountedCities(true);
  }, []);
  return (
    <>
      {!data ? (
        <SearchBar handleInput={handleInput} />
      ) : (
        <>
          {" "}
          <SearchBar handleInput={handleInput} /> <Cities cities={data} />
        </>
      )}
    </>
  );
}
