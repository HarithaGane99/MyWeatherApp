import React, { useState } from 'react';
import './LogInForm.css';
import WeatherDisplay from './WeatherDisplay';

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <input class="credentials"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input class="credentials"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/><br/><br/>
          <button onClick={handleLogin}>Login</button>
          <p className="error-message">{error}</p>
        </div>
      ) : (
        <div>
            <WeatherDisplay/>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

