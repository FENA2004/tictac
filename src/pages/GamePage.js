import React, { useState, useEffect } from 'react';
import useStore from '../store/UseStore';
import { useNavigate } from 'react-router-dom';
import '../style/GamePage.css';

const GamePage = () => {
  const { background, boxColor, fontColor, resetGame } = useStore();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatusLocal] = useState(null); 
  const navigate = useNavigate();

  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index] || gameStatus) return;

    boardCopy[index] = isXNext ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXNext(!isXNext);

    const winner = calculateWinner(boardCopy);
    if (winner) {
      setGameStatusLocal(`${winner} wins!`);
    } else if (!boardCopy.includes(null)) {
      setGameStatusLocal('It\'s a draw!');
    }
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatusLocal(null);
  };

  const handleQuit = () => {
    resetGame();
    navigate('/');
  };

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  return (
    <div className="game-page">
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={`box ${value ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
            style={{ backgroundColor: boxColor, color: fontColor }}
          >
            {value}
          </div>
        ))}
      </div>
      {gameStatus && (
        <div className="game-result">
          <div className={gameStatus.includes('wins') ? 'winner-popup' : 'draw-popup'}>
            {gameStatus}
          </div>
          <div className="game-buttons">
            <button className="play-again" onClick={handlePlayAgain}>
              Play Again
            </button>
            <button className="quit" onClick={handleQuit}>
              Quit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
