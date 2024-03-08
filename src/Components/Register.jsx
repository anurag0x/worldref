import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
   
      e.preventDefault();
    
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
    
      fetch("https://testapi-w16c.onrender.com/users/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
        body: JSON.stringify(loginData),
      })
        .then((res) => res.json())
        .then((data) => {
         if(data.msg){
          alert(data.msg)
          return window.location.href="/login"
         }
        })
        .catch((error) => {
          console.error('Error during login:', error);
        });
    };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <label style={styles.label}>
          Email: 
        </label>
          <input type="email" name="username" onChange={handleInputChange} style={styles.input} />
        <br />
        <label style={styles.label}>
          Password:
        </label>
          <input type="password" name="password"  onChange={handleInputChange} style={styles.input} />
        <br />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
     
      
    <div style={{paddingTop:"50px",textAlign:"center"}}>
    <Link  to="/login" >
         Already a member Please Login here
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
    marginBottom: '8px',
    fontSize: '16px',
    color: '#333',
    
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '15px',
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

export default Register;
