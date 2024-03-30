import PropTypes from "prop-types";

const ScoreBoard = ({ score, highestScore }) => {
  return (
    <>
      <p>Score: {score}</p>
      <p>Highest Score: {highestScore}</p>
    </>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
