import PropTypes from "prop-types";

const GameOver = ({ setPage }) => {
  function handleClick(page) {
    setPage(page);
  }
  return (
    <>
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
    </>
  );
};

GameOver.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default GameOver;
