import React from 'react';
import styled from 'styled-components';

const PricingSection = styled.section`
  padding: 4rem 5%;
  background-color: #f8f9fa;
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
`;

const PricingPlans = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Plan = styled.div`
  flex: 1;
  max-width: 300px;
  margin: 1rem;
  text-align: center;
`;

const Pricing = () => (
  <PricingSection>
    <h2>Pricing Plans</h2>
    <PricingPlans>
      <Plan>
        <h3>Basic</h3>
        <p>$9.99/month</p>
      </Plan>
      <Plan>
        <h3>Premium</h3>
        <p>$19.99/month</p>
      </Plan>
      <Plan>
        <h3>Enterprise</h3>
        <p>Contact us for pricing</p>
      </Plan>
    </PricingPlans>
  </PricingSection>
);

export default Pricing;
