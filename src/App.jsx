import "./App.css";
import { fetchApool } from "./functions/fetchApool";
import Welcome from "./components/welcome";
import Game from "./components/game";
import GameOver from "./components/gameOver";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("Game");
  const [gamePool, setGamePool] = useState([]);
  const [poolSize, setPoolSize] = useState(50);
  const [fetchedAPI, setfetchedAPI] = useState(0);
  //numPokePerRound is the number of cards per round
  const [numPokePerRound, setnumPokePerRound] = useState(6);

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
        <Welcome></Welcome>
      </>
    );
  else if (page === "Game")
    return (
      <>
        <Game
          gamePool={gamePool}
          poolSize={poolSize}
          numPokePerRound={numPokePerRound}
          setPage={setPage}
        ></Game>
      </>
    );
  else if (page === "GameOver")
    return (
      <>
        <GameOver></GameOver>
      </>
    );
}

export default App;
