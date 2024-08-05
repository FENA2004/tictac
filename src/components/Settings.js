// src/pages/SettingsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/UseStore';

const Settings = () => {
  const { background, boxColor, fontColor, setColors } = useStore();
  const navigate = useNavigate();

  const handleChangeBackground = (e) => {
    setColors(e.target.value, boxColor, fontColor);
  };

  const handleChangeBoxColor = (e) => {
    setColors(background, e.target.value, fontColor);
  };

  const handleChangeFontColor = (e) => {
    setColors(background, boxColor, e.target.value);
  };

  const handlePlayGame = () => navigate('/game');

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <label>
        Background Color:
        <input type="color" value={background} onChange={handleChangeBackground} />
      </label>
      <label>
        Box Color:
        <input type="color" value={boxColor} onChange={handleChangeBoxColor} />
      </label>
      <label>
        Font Color:
        <input type="color" value={fontColor} onChange={handleChangeFontColor} />
      </label>
      <button onClick={handlePlayGame}>Play Game</button>
    </div>
  );
};

export default Settings;
