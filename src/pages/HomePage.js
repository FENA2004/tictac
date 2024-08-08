import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Tic Tac Toe</h1>
      <button onClick={() => navigate('/game')}>Play Game</button>
      <button onClick={() => navigate('/settings')}>Settings</button>
    </div>
  );
};

export default HomePage;
