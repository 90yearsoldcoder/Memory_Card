import PropTypes from "prop-types";
import { gameSettings } from "../settings/gameSettings";
import "../styles/welcome.css";
import { useState } from "react";

const Welcome = ({ setPage, setPoolSize, setnumPokePerRound }) => {
  const [selectedDiff, setSeletctedDiff] = useState("Medium");

  function handleDiffClick(e) {
    setSeletctedDiff(e.target.id);
  }
  function handleStartClick() {
    setPoolSize(gameSettings["poolSize"][selectedDiff]);
    setnumPokePerRound(gameSettings["pokePerRound"][selectedDiff]);
    setPage("Game");
  }
  function ButtonStyle(ind) {
    //console.log(ind);
    //console.log(selectedDiff);
    if (ind === selectedDiff) return "diff-button btnSelected";
    return "diff-button";
  }

  return (
    <div className="welcome-container">
      <div className="title">Welcome</div>
      <div>Do not click the same card twice</div>
      <div className="diff-select-container">
        <button
          className={ButtonStyle("Easy")}
          id="Easy"
          onClick={handleDiffClick}
        >
          Easy
        </button>
        <button
          className={ButtonStyle("Medium")}
          id="Medium"
          onClick={handleDiffClick}
        >
          Medium
        </button>
        <button
          id="Hard"
          className={ButtonStyle("Hard")}
          onClick={handleDiffClick}
        >
          Hard
        </button>
      </div>
      <button className="start-button" id="Start" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};

Welcome.propTypes = {
  setPage: PropTypes.func.isRequired,
  setPoolSize: PropTypes.func.isRequired,
  setnumPokePerRound: PropTypes.func.isRequired,
};

export default Welcome;
