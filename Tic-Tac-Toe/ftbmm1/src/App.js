import "./styles.css";
import { useState } from "react";
export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState();
  const calculateWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const handleClick = (e) => {
    const newBoard = [...board];
    newBoard[e.target.id] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
    if (calculateWinner(board) || board[e.target.id]) {
      return;
    }
  };

  return (
    <div className="App">
      {winner ? <h2>Winner : {winner}</h2> : <h2>Next player :{player}</h2>}
      <div className="board">
        {board.map((item, idx) => {
          return (
            <>
              <div className="square" onClick={handleClick} id={idx}>
                {item}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
