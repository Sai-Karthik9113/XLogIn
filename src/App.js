import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userAvailable, setUserAvailable] = useState();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setUserAvailable();
    } else {
        if (userName === 'user' && password === 'password') {
          setUserAvailable(true);
        } else {
          setUserAvailable(false);
        }
    }
  }


  return (
    <div className="App">
      <h1>Login Page</h1>
      {userAvailable === false && <p>Invalid username or password</p>}
      {userAvailable ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:<input type='text' placeholder='username' value={userName} onChange={handleUserNameChange} required />
          </label>
          <br />
          <label>
            Password:<input type='password' placeholder='password' value={password} onChange={handlePasswordChange} required />
          </label>
          <br />
          <button type='submit'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
