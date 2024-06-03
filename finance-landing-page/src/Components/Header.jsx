// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/logo.png'; // Import the logo image

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-container {
    display: flex;
    align-items: center;

    img {
      height: 40px; /* Adjust the height as needed */
    }

    .logo-text {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Open Sans', sans-serif;
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    flex: 1;

    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 0 1rem;
        cursor: pointer;

        &:hover {
          color: #FF5555;
        }
      }
    }

    @media (max-width: 768px) {
      display: ${props => (props.open ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;

      ul {
        flex-direction: column;
        width: 100%;

        li {
          margin: 1rem 0;
          text-align: center;
        }
      }
    }
  }

  .download-button {
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
      
      &:hover {
        background-color: #333333;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin: 1rem 0;
    }
  }

  .menu-icon {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav open={menuOpen}>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <div className="logo-text">uifry</div>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="download-button">
        <button>Download Now</button>
      </div>
    </Nav>
  );
};

export default Header;
