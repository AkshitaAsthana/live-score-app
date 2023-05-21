import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm.js';
import Scoreboard from './components/Scoreboard.js';
import MatchCard from './components/MatchCard.js';
import ScoreUpdateForm from './components/ScoreUpdateForm.js';

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [liveScores, setLiveScores] = useState([]);

useEffect(() => {
// Fetch live scores from the backend server
const fetchLiveScores = async () => {
try {
const response = await axios.get('/api/live-scores');
setLiveScores(response.data);
} catch (error) {
console.error('Error fetching live scores:', error);
}
};


// Call the fetchLiveScores function
fetchLiveScores();
}, []);

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post('/api/login', {
      username: username,
      password: password
    });
    if (response.status === 200) {
      setIsLoggedIn(true);
    } else {
      console.log('Authentication failed');
    }
  } catch (error) {
    console.error('Error during authentication:', error);
  }
};


return (
<div>
{isLoggedIn ? (
<div>
<h1>Welcome, User!</h1>
<Scoreboard liveScores={liveScores} />
<MatchCard liveScores={liveScores} />
<ScoreUpdateForm />
{/* Render other components and app content here */}
</div>
) : (
<LoginForm handleLogin={handleLogin} />
)}
</div>
);
};

export default App;