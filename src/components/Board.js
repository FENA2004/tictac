import React from 'react';
import useStore from '../store/UseStore';


const Board = ({ board, onClick, winner }) => {
  const { boxColor, fontColor } = useStore();

  const renderBox = (value, index) => {
    const isWinningBox = winner && board[index] === winner;
    return (
      <div
        key={index}
        className={`box ${isWinningBox ? 'winner' : ''}`}
        style={{ backgroundColor: boxColor, color: fontColor }}
        onClick={() => onClick(index)}
      >
        {value}
      </div>
    );
  };

  return (
    <div className="board">
      {board.map((value, index) => renderBox(value, index))}
    </div>
  );
};

export default Board;
