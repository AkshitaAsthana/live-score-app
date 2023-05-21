import React from 'react';
import './Scoreboard.css'; // Import the CSS file for Scoreboard component

const Scoreboard = ({ matches }) => {
  return (
    <div className="scoreboard-container">
      <h2 className="scoreboard-heading">Live Scores</h2>
      {matches.length > 0 ? (
        <ul className="scoreboard-list">
          {matches.map((match) => (
            <li key={match.id} className="scoreboard-item">
              <h3 className="match-sport">{match.sport}</h3>
              <p className="match-teams">{match.team1} vs {match.team2}</p>
              <p className="match-score">Score: {match.score}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-matches-message">No matches available</p>
      )}
    </div>
  );
};

export default Scoreboard;
