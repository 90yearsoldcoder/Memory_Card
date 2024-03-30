import Round from "./round";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { uniqueRandomNumbers } from "../functions/fetchApool";

const Game = ({ gamePool, poolSize, numPokePerRound, setScore, setPage }) => {
  //pokemonPool is the list of pokemons in current round
  const [pokemonPool, setpokemonPool] = useState([]);
  //a pool containing the pokemon Id drawn before
  const [selectedPool, setselectedPool] = useState([]);

  const drawPoke = useCallback(() => {
    if (gamePool.length === 0) {
      console.log("Waiting for API");
      return;
    }
    console.log("drawing pokemon for this round");
    //console.log(gamePool);
    const randomIntArray = uniqueRandomNumbers(numPokePerRound, poolSize);
    let tmpPool = [];
    for (let num of randomIntArray) tmpPool.push(gamePool[num - 1]);
    setpokemonPool(tmpPool);
    console.log("drawing is done.");
  }, [gamePool, numPokePerRound, poolSize]);

  function handleCardClick(pokeId) {
    console.log(`${pokeId} is clicked`);
    setScore(selectedPool.length);
    if (selectedPool.includes(pokeId)) {
      console.log("Game is over.");
      setselectedPool([]);
      setPage("GameOver");
    } else {
      setselectedPool([...selectedPool, pokeId]);
      drawPoke();
    }
  }

  useEffect(() => {
    drawPoke();
  }, [drawPoke]);

  return (
    <Round pokemonPool={pokemonPool} handleCardClick={handleCardClick}></Round>
  );
};

Game.propTypes = {
  gamePool: PropTypes.array.isRequired,
  poolSize: PropTypes.number.isRequired,
  numPokePerRound: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Game;
