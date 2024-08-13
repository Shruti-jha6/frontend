import React, { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar'; // Corrected import path
import './Home.css';

const Home = () => {
    useEffect(() => {
        gsap.fromTo(".heading", 
          { y: '100vh', scale: 3, opacity: 0 }, // Start from below the screen with a large size
          { y: '0', scale: 1, opacity: 1, duration: 2, ease: 'power3.out' } // End at the center with original size and easing
        );
      }, []);
    
      return (
        <div>
          <Navbar />
          <header className="header">
            <h1 className="heading">Dear Zindagi</h1>
          </header>
        </div>
      );
  
};

export default Home;
