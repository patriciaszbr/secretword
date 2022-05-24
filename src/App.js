// CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";

// Importacao dos dados
import { wordList } from "./data/words";

// Components
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";
import StartScreen from "./components/StartScreen/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "gameOver" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "gameOver" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
