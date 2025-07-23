import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    image: "/src/assets/office.png",
    title: "Stay Curious.",
    subtitle: "Discover stories, thinking, and expertise from writers on any topic.",
    buttonText: "Start Reading"
  },
  {
    image: "/src/assets/ai.jpg",
    title: "Explore Ideas.",
    subtitle: "Read, write and interact with a community of curious minds.",
    buttonText: "Join Us"
  },
  {
    image: "/src/assets/bitcoin.jpg",
    title: "Inspire Change.",
    subtitle: "Bitdeer Boosts Bitcoin Reserves by 75%, Reaching 1,039 BTC in Just Two Months.",
    buttonText: "Get Started"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button>{slide.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
