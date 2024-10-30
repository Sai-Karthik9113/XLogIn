import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      if (userName === 'user' && password === 'password') {
        setUserStatus('valid');
      } else {
        setUserStatus('invalid');
      }
  }


  return (
    <div className="App">
      <h1>Login Page</h1>
      {userStatus === 'invalid' && <p>Invalid username or password</p>}
      {userStatus === 'valid' ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' placeholder='username' value={userName} onChange={handleUserNameChange} required />
          <br />
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' placeholder='password' value={password} onChange={handlePasswordChange} required />
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