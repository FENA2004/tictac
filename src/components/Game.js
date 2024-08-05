// src/pages/Game.js
import React, { useState } from 'react';
import useStore from '../store/UseStore';
import Board from '../components/Board';
import { useNavigate } from 'react-router-dom';
import './Game.css'; // Import Game-specific CSS if needed

const Game = () => {
  const { background, boxColor, fontColor, setGameStatus, resetGame } = useStore();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const navigate = useNavigate();

  const handleClick = index => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus('ended');
    } else if (newBoard.every(cell => cell)) {
      setGameStatus('draw');
    }
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    resetGame();
  };

  const handleQuit = () => {
    navigate('/');
  };

  const winner = calculateWinner(board);

  return (
    <div className="game-page" style={{ backgroundColor: background }}>
      <Board board={board} onClick={handleClick} winner={winner} />
      {winner && (
        <div className="game-result">
          <div className="winner-popup">
            <p>Winner: {winner}</p>
            <div className="game-buttons">
              <button className="play-again" onClick={handlePlayAgain}>Play Again</button>
              <button className="quit" onClick={handleQuit}>Quit</button>
            </div>
          </div>
        </div>
      )}
      {gameStatus === 'draw' && !winner && (
        <div className="game-result">
          <div className="draw-popup">
            <p>It's a draw!</p>
            <div className="game-buttons">
              <button className="play-again" onClick={handlePlayAgain}>Play Again</button>
              <button className="quit" onClick={handleQuit}>Quit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const calculateWinner = board => {
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
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default Game;
