import "./App.css";
import { fetchApool } from "./functions/fetchApool";
import Welcome from "./components/welcome";
import Game from "./components/game";
import GameOver from "./components/gameOver";
import { useState, useEffect } from "react";
import { gameSettings } from "./settings/gameSettings";

function App() {
  const [page, setPage] = useState("Welcome");
  const [gamePool, setGamePool] = useState([]);
  const [poolSize, setPoolSize] = useState(gameSettings["poolSize"]["Medium"]);
  const [fetchedAPI, setfetchedAPI] = useState(0);
  //numPokePerRound is the number of cards per round
  const [numPokePerRound, setnumPokePerRound] = useState(
    gameSettings["pokePerRound"]["Medium"]
  );

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
        <GameOver setPage={setPage}></GameOver>
      </>
    );
}

export default App;
