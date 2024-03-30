import PropTypes from "prop-types";
import { gameSettings } from "../settings/gameSettings";

const Welcome = ({ setPage, setPoolSize, setnumPokePerRound }) => {
  function handleDiffClick(e) {
    //console.log(e.target.id);
    setPoolSize(gameSettings["poolSize"][e.target.id]);
    setnumPokePerRound(gameSettings["pokePerRound"][e.target.id]);
  }
  function handleStartClick() {
    setPage("Game");
  }

  return (
    <>
      <p>Welcome</p>
      <div className="diff-select-container">
        <button className="diff-button" id="Easy" onClick={handleDiffClick}>
          Easy
        </button>
        <button className="diff-button" id="Medium" onClick={handleDiffClick}>
          Medium
        </button>
        <button
          className="diff-button"
          id="Difficult"
          onClick={handleDiffClick}
        >
          Difficult
        </button>
      </div>
      <button className="start-button" id="Start" onClick={handleStartClick}>
        Start
      </button>
    </>
  );
};

Welcome.propTypes = {
  setPage: PropTypes.func.isRequired,
  setPoolSize: PropTypes.func.isRequired,
  setnumPokePerRound: PropTypes.func.isRequired,
};

export default Welcome;
