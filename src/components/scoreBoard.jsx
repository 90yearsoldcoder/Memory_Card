import PropTypes from "prop-types";
import "../styles/scoreBoard.css";

const ScoreBoard = ({ score, highestScore }) => {
  return (
    <>
      <div className="score-container">
        <div>
          Score: <span style={{ fontWeight: "bold" }}>{score}</span>{" "}
        </div>
        <div>Highest Score: {highestScore}</div>
      </div>
    </>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
