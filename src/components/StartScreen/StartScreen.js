import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1> Componnent Start Screen</h1>
      <p>clique no botao abaixo para começar a jogar</p>

      <button onClick={startGame}>startGame</button>
    </div>
  );
};

export default StartScreen;
