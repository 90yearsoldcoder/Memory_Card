import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./card";

const Round = ({ pokemonPool, drawPoke }) => {
  const [selectedOne, setSelectedOne] = useState(-1);

  useEffect(() => {
    console.log(`Selected ${selectedOne}, lets shuffle and draw the cards`);
  }, [selectedOne]);

  //drawPoke is the pokemonPool setter
  return (
    <div>
      {pokemonPool.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokeId={pokemon.id}
          pokeName={pokemon.name}
          pokeImg={pokemon.img}
          selectedOneSetter={setSelectedOne}
        ></Card>
      ))}
    </div>
  );
};

Round.propTypes = {
  pokemonPool: PropTypes.array.isRequired,
  drawPoke: PropTypes.func.isRequired,
};

export default Round;
