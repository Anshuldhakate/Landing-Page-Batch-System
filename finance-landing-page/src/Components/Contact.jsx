import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 85, 85, 1) 20%, rgba(253, 229, 152, 0) 70%);
    z-index: 0;
    opacity: 0.5;
    top: -20px;
    left: -20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 85, 85, 1) 0%, rgba(253, 229, 152, 0) 70%);
    z-index: 0;
    opacity: 0.5;
    bottom: -20px;
    right: -20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input, textarea {
      width: 100%;
      max-width: 500px;
      margin: 0.5rem 0;
      padding: 1rem;
    }

    button {
      padding: 1rem 2rem;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

const Contact = () => (
  <ContactSection>
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </ContactSection>
);

export default Contact;
