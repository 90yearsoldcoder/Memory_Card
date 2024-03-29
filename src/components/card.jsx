import PropTypes from "prop-types";
import "../styles/card.css";

const Card = ({ pokeId, pokeName, pokeImg, handleCardClick }) => {
  return (
    <div className="card" onClick={() => handleCardClick(pokeId)}>
      <img src={pokeImg} alt={pokeName} className="card-img" />
      <p className="card-name">{pokeName}</p>
    </div>
  );
};

Card.propTypes = {
  pokeId: PropTypes.number.isRequired,
  pokeName: PropTypes.string.isRequired,
  pokeImg: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default Card;
