import PropTypes from "prop-types";
import Card from "./card";
import "../styles/round.css";

const Round = ({ pokemonPool, handleCardClick }) => {
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
  handleCardClick: PropTypes.func.isRequired,
};

export default Round;
