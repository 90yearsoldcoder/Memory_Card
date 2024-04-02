import PropTypes from "prop-types";
import { gameSettings } from "../settings/gameSettings";
import "../styles/welcome.css";
import { useState } from "react";

const Welcome = ({ poolSize, setPage, setPoolSize, setnumPokePerRound }) => {
  function handleDiffClick(e) {
    //console.log("button clicked " + e.target.id);
    setPoolSize(gameSettings["poolSize"][e.target.id]);
    setnumPokePerRound(gameSettings["pokePerRound"][e.target.id]);
  }
  function handleStartClick() {
    setPage("Game");
  }
  function ButtonStyle(ind) {
    //console.log(ind);
    //console.log(buttonSelected);
    let diff = "Medium";
    for (let key of Object.keys(gameSettings["poolSize"]))
      if (poolSize == gameSettings["poolSize"][key]) diff = key;

    if (ind === diff) return "diff-button btnSelected";
    return "diff-button";
  }

  return (
    <div className="welcome-container">
      <div className="title">Welcome</div>
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
  poolSize: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setPoolSize: PropTypes.func.isRequired,
  setnumPokePerRound: PropTypes.func.isRequired,
};

export default Welcome;
