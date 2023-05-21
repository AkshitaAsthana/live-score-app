import React, { useState } from 'react';
import axios from 'axios';

const ScoreUpdateForm = ({ matchId, onUpdate }) => {
  const [newScore, setNewScore] = useState('');
  const [error, setError] = useState('');

  const handleScoreChange = (e) => {
    setNewScore(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await axios.post(
        `http://localhost:3000/api/score-update/${matchId}`,
        { score: newScore }
      );

      if (response.status === 200) {
        onUpdate();
      } else {
        setError('Failed to update score');
      }
    } catch (error) {
      setError('An error occurred during score update');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Update Score</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="score">New Score</label>
          <input
            type="text"
            id="score"
            value={newScore}
            onChange={handleScoreChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Update Score</button>
      </form>
    </div>
  );
};

export default ScoreUpdateForm;
