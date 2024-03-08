import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </li>
        <li style={styles.li}>
        <Link onClick={()=>localStorage.clear()} to="/login" style={styles.link}>
           LogOut
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  li: {
    marginRight: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

export default Navbar;
