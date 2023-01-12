import React, { useState, useEffect } from "react";
import axios from "axios";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";
import SportsKabaddiSharpIcon from "@mui/icons-material/SportsKabaddiSharp";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  // This hook gets the data after being rendered
  // For more information on how to use the pokemon api got to the url commented out below
  //https://pokeapi.co/
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}
        `);
      // A great way to check that you are getting something back from an API
      // console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <h1>
        Select a Pokemon <span style={{ color: "red" }}> {num} </span>
        <ArrowDropDownCircleIcon fontSize="large" />{" "}
      </h1>
      <h2>
        My name is <span style={{ color: "red" }}> {name} </span>
        <BadgeSharpIcon fontSize="large" />
      </h2>
      <h3>
        I have{" "}
        <span style={{ color: "red" }}>{moves} dope moves, come at me bro</span>{" "}
        <SportsKabaddiSharpIcon fontSize="large" color="action" />
      </h3>
      <select
        name="select-pokemon-dropdown"
        id="pokemon-id"
        aria-label="pokemon-id"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
        <option value="6"> 6</option>
        <option value="7"> 7</option>
        <option value="8"> 8</option>
        <option value="9"> 9</option>
        <option value="10"> 10</option>
        <option value="11"> 11</option>
        <option value="12"> 12</option>
        <option value="13"> 13</option>
        <option value="14"> 14</option>
        <option value="15"> 15</option>
      </select>
    </>
  );
};

export default Pokemon;
