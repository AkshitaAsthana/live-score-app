import React from 'react';

const MatchCard = ({ match }) => {
  const { sport, team1, team2, score, players } = match;

  return (
    <div>
      <h3>{sport}</h3>
      <p>{team1} vs {team2}</p>
      <p>Score: {score}</p>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <p>{player.name}</p>
            <p>Score: {player.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchCard;
