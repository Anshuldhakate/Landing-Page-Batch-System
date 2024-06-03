// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import heroImage from '../Assets/iPhone.png'; // Adjust the path based on your project structure
import { FaPlay } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent), #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 85, 85, 1) 20%, rgba(253, 229, 152, 0) 70%);
    z-index: 0;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    right: -10px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 85, 85, 1) 0%, rgba(253, 229, 152, 0) 70%);
    z-index: 0;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2rem;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroText = styled.div`
  max-width: 50%;

  h1 {
    font-size: 3rem;
    color: #000;
    font-weight: bold;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.2rem;
    color: #666;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      padding: 1rem 2rem;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      background-color: #000;
      color: #fff;
      border-radius: 0.5rem;
    }

    .watch-video {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: transparent;
      color: #000;

      svg {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .buttons {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;

const HeroImage = styled.div`
  max-width: 50%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroText>
      <h1>Make The Best Financial Decisions</h1>
      <p>
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing
        Sociis Arou Lorem Porttitor.
      </p>
      <div className="buttons">
        <button>Get Started</button>
        <button className="watch-video">
          <FaPlay />
          Watch Video
        </button>
      </div>
    </HeroText>
    <HeroImage>
      <img src={heroImage} alt="Hero" />
    </HeroImage>
  </HeroSection>
);

export default Hero;
