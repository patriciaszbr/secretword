import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1> Inicio</h1>
      <p>clique no botao abaixo para começar a jogar</p>

      <button onClick={startGame}>Iniciar o Jogo</button>
    </div>
  );
};

export default StartScreen;
