// src/pages/SignIn.jsx
import React from 'react';

const SignIn = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Sign In</h1>
    <form>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button type="submit">Sign In</button>
    </form>
  </div>
);

export default SignIn;
