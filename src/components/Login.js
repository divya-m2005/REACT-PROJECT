// // src/components/Login.js
// import React from 'react';
// import './Login.css';

// function Login({ onLogin }) {
//   const handleLogin = (event) => {
//     event.preventDefault();
//     onLogin();
//   };

//   return (
//     <section className="login">
//       <div className="login-container">
//         <h2>Login to Ebook Store</h2>
//         <form onSubmit={handleLogin}>
//           <label>Email:</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Password:</label>
//           <input type="password" placeholder="Enter your password" required />

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email.includes('@') || !email.endsWith('gmail.com')) {
      setErrorMessage('Please enter a valid Gmail address.');
      return;
    }

    if (!password) {
      setErrorMessage('Password cannot be empty.');
      return;
    }

    setErrorMessage(''); // Clear any previous errors
    onLogin();
  };

  return (
    <section className="login">
      <div className="login-container">
        <h2>Login to Ebook Store</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Login;
