import React from 'react';
import styled from 'styled-components';
import userImage from '../Assets/Group.png'; // Assuming you have a user image asset

const TestimonialsSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  position: relative;
  margin-top: -15%;

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
`;

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TestimonialImage = styled.img`
  width: 40%;
  max-width: 400px;
  margin-right:1rem;
  border-radius: 30%;
`;

const TestimonialContent = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: left;
  margin-top: -3%;
`;

const Testimonials = () => (
  <TestimonialsSection>
    <h2>Testimonials</h2>
    <h1>What Our Users Say About Us?</h1>
    <TestimonialsContainer>
      <TestimonialImage src={userImage} alt="User" />
      <TestimonialContent>
        <h3>The Best Financial Account App Ever!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur provident itaque magni repellendus qui dignissimos quis veniam mollitia, accusantium ea quia quidem aperiam et dicta dolores in saepe quas.</p>
        <p><strong>Nick Jonas</strong></p>
      </TestimonialContent>
    </TestimonialsContainer>
  </TestimonialsSection>
);

export default Testimonials;
