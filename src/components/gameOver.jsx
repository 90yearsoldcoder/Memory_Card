import PropTypes from "prop-types";
import "../styles/gameOver.css";

const GameOver = ({ setPage }) => {
  function handleClick(page) {
    setPage(page);
  }
  return (
    <div className="gameOver-container">
      <p>Game Over</p>
      <button className="GameOver-button" onClick={() => handleClick("Game")}>
        Try Again
      </button>
      <button
        className="GameOver-button"
        onClick={() => handleClick("Welcome")}
      >
        Return
      </button>
    </div>
  );
};

GameOver.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default GameOver;
