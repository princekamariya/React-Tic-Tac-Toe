import { useState, useEffect } from "react";
import "./index.css";
import SquareComponent from "./SquareComponent";
const initialState = ["", "", "", "", "", "", "", "", ""];
function App() {
  let [gameState, updateGameState] = useState(initialState);
  const [isXTurn, updateIsXTurn] = useState(false);

  const onSquareClicked = (index) => {
    let string = Array.from(gameState);
    string[index] = isXTurn ? "X" : "O";
    updateIsXTurn(!isXTurn);
    updateGameState(string);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner !== null) {
      setTimeout(() => updateGameState(initialState), 1000);
      alert(`Winner is ${winner}`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <p className="heading-text">React Tic Tac Toe</p>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          state={gameState[0]}
          onClick={() => onSquareClicked(0)}
        />
        <SquareComponent
          className="b-bottom-right"
          state={gameState[1]}
          onClick={() => onSquareClicked(1)}
        />
        <SquareComponent
          className="b-bottom"
          state={gameState[2]}
          onClick={() => onSquareClicked(2)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          state={gameState[3]}
          onClick={() => onSquareClicked(3)}
        />
        <SquareComponent
          className="b-bottom-right"
          state={gameState[4]}
          onClick={() => onSquareClicked(4)}
        />
        <SquareComponent
          className="b-bottom"
          state={gameState[5]}
          onClick={() => onSquareClicked(5)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-right"
          state={gameState[6]}
          onClick={() => onSquareClicked(6)}
        />
        <SquareComponent
          className="b-right"
          state={gameState[7]}
          onClick={() => onSquareClicked(7)}
        />
        <SquareComponent
          state={gameState[8]}
          onClick={() => onSquareClicked(8)}
        />
      </div>
      <button
        className="clear-button"
        onClick={() => {
          updateGameState(initialState);
        }}
      >
        Clear Game
      </button>
    </div>
  );
}

export default App;
