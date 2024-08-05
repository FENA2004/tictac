import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const handlePlayGame = () => navigate('/game');
  const handleSettings = () => navigate('/settings');

  return (
    <div className="home-page">
      <h1>Tic Tac Toe</h1>
      <button onClick={handlePlayGame}>Play Game</button>
      <button onClick={handleSettings}>Settings</button>
    </div>
  );
};

export default Home;
