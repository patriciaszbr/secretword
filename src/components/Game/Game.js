import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Component Game</h1>
      <button onClick={verifyLetter}>verifyLetter</button>;
    </div>
  );
};

export default Game;
