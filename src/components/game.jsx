import Round from "./round";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { uniqueRandomNumbers } from "../functions/fetchApool";

const Game = ({ gamePool, poolSize, numPokePerRound, setPage }) => {
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

  useEffect(() => {
    drawPoke();
  }, [drawPoke]);

  return (
    <Round
      pokemonPool={pokemonPool}
      drawPoke={drawPoke}
      selectedPool={selectedPool}
      setselectedPool={setselectedPool}
      setPage={setPage}
    ></Round>
  );
};

Game.propTypes = {
  gamePool: PropTypes.array.isRequired,
  poolSize: PropTypes.number.isRequired,
  numPokePerRound: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Game;
