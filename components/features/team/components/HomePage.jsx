// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import techImg from '../assets/image.jpg';

const HomePage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Meet Our Team</h1>
      <Link to="/tech-team">
        <img 
          src={techImg} 
          alt="Tech Team" 
          style={{ width: '300px', cursor: 'pointer', border: '2px solid black' }} 
        />
      </Link>
    </div>
  );
};

export default HomePage;