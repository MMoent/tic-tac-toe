import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangePlayerName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(prev => !prev);
    if(isEditing) onChangePlayerName(symbol, playerName);
  }
  const handleChange = (evt) => {
    setPlayerName(prevPlayerName => evt.target.value);  // two-way binding
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? <input type="text" value={playerName} onChange={handleChange} required /> : <span className="player-name">{playerName}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
