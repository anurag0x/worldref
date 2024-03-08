import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    const loginData = {
      username: formData.email,
      password: formData.password,
    };
  
    fetch("https://testapi-w16c.onrender.com/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg)
        localStorage.setItem("token", JSON.stringify(data.token));
        window.location.href="/"
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label style={styles.label}>
          Email:
        </label>
          <input type="text" name="username"  onChange={handleInputChange} style={styles.input} />
        <br />
        <label style={styles.label}>
          Password:
        </label>
          <input type="password" name="password"onChange={handleInputChange} style={styles.input} />
        <br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <div style={{paddingTop:"50px",textAlign:"center"}}>
    <Link  to="/register" >
         Not  a member Please Register here
       </Link>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    padding:"5px"
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default Login;
