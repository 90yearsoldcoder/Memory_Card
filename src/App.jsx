import "./App.css";
import { fetchApool } from "./functions/fetchApool";
import Welcome from "./components/welcome";
import Game from "./components/game";
import GameOver from "./components/gameOver";
import ScoreBoard from "./components/scoreBoard";
import { useState, useEffect } from "react";
import { gameSettings } from "./settings/gameSettings";

function getOrDefault(key, defaultValue) {
  const value = parseInt(localStorage.getItem(key));
  return value !== null ? value : defaultValue;
}

function App() {
  const [page, setPage] = useState("Welcome");
  const [gamePool, setGamePool] = useState([]);
  const [poolSize, setPoolSize] = useState(gameSettings["poolSize"]["Medium"]);
  const [fetchedAPI, setfetchedAPI] = useState(0);
  //numPokePerRound is the number of cards per round
  const [numPokePerRound, setnumPokePerRound] = useState(
    gameSettings["pokePerRound"]["Medium"]
  );
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(
    getOrDefault("highestScore", 0)
  );

  //Effect for API asking
  useEffect(() => {
    let isMounted = true; // Flag to track mounted state
    fetchApool({
      poolSize: poolSize,
      setLoaded: (value) => {
        if (isMounted) setfetchedAPI(value);
      },
    }).then((responses) => {
      //console.log(responses);
      setGamePool(responses);
    });
    return () => {
      isMounted = false; // Component is unmounting, ignore pending updates
      setfetchedAPI(0);
    };
  }, [poolSize]);

  //Effect for updating local highest Score
  useEffect(() => {
    localStorage.setItem("highestScore", highestScore);
  }, [highestScore]);

  //Effect for comparing score and highest score
  useEffect(() => {
    if (score > highestScore) setHighestScore(score);
  }, [score, highestScore]);

  //page routes(not an elegant one, but works when we donot have routes)
  if (poolSize != fetchedAPI)
    return (
      <>
        <div>Loading</div>
        <div>poolSize: {poolSize}</div>
        <div>fetched Pokemon: {fetchedAPI}</div>
      </>
    );
  else if (page === "Welcome")
    return (
      <>
        <ScoreBoard score={score} highestScore={highestScore}></ScoreBoard>
        <Welcome
          setPage={setPage}
          setPoolSize={setPoolSize}
          setnumPokePerRound={setnumPokePerRound}
        ></Welcome>
      </>
    );
  else if (page === "Game")
    return (
      <>
        <ScoreBoard score={score} highestScore={highestScore}></ScoreBoard>
        <Game
          gamePool={gamePool}
          poolSize={poolSize}
          numPokePerRound={numPokePerRound}
          setScore={setScore}
          setPage={setPage}
        ></Game>
      </>
    );
  else if (page === "GameOver")
    return (
      <>
        <ScoreBoard score={score} highestScore={highestScore}></ScoreBoard>
        <GameOver setPage={setPage}></GameOver>
      </>
    );
}

export default App;
