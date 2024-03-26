import PropTypes from "prop-types";
import "../styles/card.css";

const Card = ({ pokeId, pokeName, pokeImg, selectedOneSetter }) => {
  const handleCardClick = () => {
    console.log(pokeName + " is clicked");
    selectedOneSetter(pokeId);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={pokeImg} alt={pokeName} className="card-img" />
      <p className="card-name">{pokeName}</p>
    </div>
  );
};

Card.propTypes = {
  pokeId: PropTypes.number.isRequired,
  pokeName: PropTypes.string.isRequired,
  pokeImg: PropTypes.string.isRequired,
  selectedOneSetter: PropTypes.func.isRequired,
};

export default Card;
