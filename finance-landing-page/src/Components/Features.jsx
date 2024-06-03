
import React from 'react';
import styled from 'styled-components';
import featureImage1 from '../Assets/iPhoneFront.png'; 
import featureImage2 from '../Assets/iPhoneadv.png';
import featureImage3 from '../Assets/iPhonecustom.png';
import { FaRegStar } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  margin-top: -15%;

  @media (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  position: relative;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  img {
    width: 40%;
    margin: auto;
    height: auto;
    position: relative;
    z-index: 1;
    margin-top: 5%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureText = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: 1rem;
    color: #FF5555;
    font-weight: bold;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #666;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      svg {
        color: #ff5555;
        margin-right: 0.5rem;
      }

      .icon-text {
        display: flex;
        flex-direction: column;
      }

      h3 {
        font-size: 1.2rem;
        color: #ff5555;
        margin: 0;
      }

      p {
        font-size: 1rem;
        color: #666;
        margin: 0;
      }
    }
  }
`;

const AdvantagesSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  margin-top: -30%;

  p {
        font-size: 1rem;
        color: #666;
        margin: 0;
      }

  img {
    width: 40%;
    margin: auto;
    height: auto;
    position: relative;
    z-index: 1;
    margin-top: 5%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const FullyCustomizableSection = styled.section`
  padding: 4rem 5%;
  background-color: #fff;
  margin-top: -30%;

  p {
        font-size: 1rem;
        color: #666;
        margin: 0;
      }

  img {
    width: 40%;
    margin: auto;
    height: auto;
    position: relative;
    z-index: 1;
    margin-top: 5%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Features = () => (
  <>
    <FeaturesSection>
      <FeatureItem>
        <FeatureText>
          <h2>Features</h2>
          <h2>Uifry Premium</h2>
          <ul>
            <li>
              <FaRegStar size={24} />
              <div className="icon-text">
                <h3>Budgeting Intervals</h3>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arou Lorem Porttitor.</p>
              </div>
            </li>
            <li>
              <FaRegStar size={24} />
              <div className="icon-text">
                <h3>Budgeting Intervals</h3>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arou Lorem Porttitor.</p>
              </div>
            </li>
            <li>
              <FaRegStar size={24} />
              <div className="icon-text">
                <h3>Budgeting Intervals</h3>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arou Lorem Porttitor.</p>
              </div>
            </li>
          </ul>
        </FeatureText>
        <img src={featureImage1} alt="Feature 1" />
      </FeatureItem>
    </FeaturesSection>

    <AdvantagesSection>
      <FeatureItem>
        <img src={featureImage2} alt="Feature 2" />
        <FeatureText>
          <h2>Advantages</h2>
          <p>Uifry offers a range of exclusive benefits that make managing your finances easier and more efficient. With features such as budgeting intervals, customizable spending categories, and real-time transaction tracking, Uifry provides the tools you need to take control of your financial life. Additionally, our user-friendly interface and personalized recommendations ensure a seamless experience tailored to your unique needs.</p>

        </FeatureText>
        
      </FeatureItem>
    </AdvantagesSection>


    <FullyCustomizableSection>
      <FeatureItem>
        <FeatureText>
          <h2>Fully Customizable</h2>
          <p>Customize your Uifry experience to fit your exact needs. Whether it's adjusting budgeting intervals, creating custom spending categories, or setting personalized alerts, Uifry offers unparalleled flexibility to tailor your financial management approach.</p>
        </FeatureText>
        <img src={featureImage3} alt="Feature 3" />
      </FeatureItem>
    </FullyCustomizableSection>
  </>
);

export default Features;
