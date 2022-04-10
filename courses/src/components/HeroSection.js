import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import {
  StartLink,
  Start,
} from "./Main/styles";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <StartLink to="/TagSelect" style={{ textDecoration: 'none' }}>
                    <Start>Get Started</Start>
        </StartLink>
      </div>
    </div>
  );
}

export default HeroSection;
