// src/components/Gallery.js
import React from 'react';
import styled from 'styled-components';

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .gallery-item {
    flex: 1;
    max-width: 300px;
    margin: 1rem;
    text-align: center;
  }
`;

const Gallery = () => (
  <GallerySection>
    <h2>App Interface</h2>
    <div className="gallery">
      <div className="gallery-item">
        <img src="screenshot1.png" alt="Screenshot 1" />
      </div>
      <div className="gallery-item">
        <img src="screenshot2.png" alt="Screenshot 2" />
      </div>
      <div className="gallery-item">
        <img src="screenshot3.png" alt="Screenshot 3" />
      </div>
    </div>
  </GallerySection>
);

export default Gallery;
