import PropTypes from "prop-types";
import Card from "./card";
import "../styles/round.css";

const Round = ({
  pokemonPool,
  drawPoke,
  selectedPool,
  setselectedPool,
  setPage,
}) => {
  function handleCardClick(pokeId) {
    console.log(`${pokeId} is clicked`);
    if (selectedPool.includes(pokeId)) {
      console.log("Game is over.");
      setPage("GameOver");
    } else {
      setselectedPool([...selectedPool, pokeId]);
      drawPoke();
    }
  }

  //drawPoke is the pokemonPool setter
  return (
    <div className="round-container">
      {pokemonPool.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokeId={pokemon.id}
          pokeName={pokemon.name}
          pokeImg={pokemon.img}
          handleCardClick={handleCardClick}
        ></Card>
      ))}
    </div>
  );
};

Round.propTypes = {
  pokemonPool: PropTypes.array.isRequired,
  drawPoke: PropTypes.func.isRequired,
  selectedPool: PropTypes.array.isRequired,
  setselectedPool: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Round;
