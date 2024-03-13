import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there are stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset any previous errors
    setEmailError('');
    setPasswordError('');

    // Email validation
    if (!username) {
      setEmailError('Enter Signum Id');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    // If "Remember Me" is checked, store credentials in local storage
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // If "Remember Me" is not checked, clear stored credentials
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    // If all validations pass, you can proceed with your authentication logic
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the home page ("/")
    navigate('/')
  };

  return (
    <div className="App">
      <div className='login-container'>
      <div className="container">
        <h2>Login To Your Account</h2>
        <h4>Enter Your Signum & LAN Password to login</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Signum"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <div className='remember-me'>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className='button-container'>
            <button type="submit">Login</button>
            {/* <button onClick={() => { window.location.href = "/signup"; }}>Sign Up</button> */}
          </div>
        </form>
        {/* Link to SignUp page */}
        
      </div>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
// import './Login.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory(); // Get the history object from useHistory

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('your-authentication-api-endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // If login is successful, redirect to the home page
//         history.push('/home');
//       } else {
//         // If login fails, you can handle it accordingly (e.g., display an error message)
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h2>Login To Your Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username or Email"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


