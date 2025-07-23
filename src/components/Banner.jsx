import React from 'react'
import BannerImg from '../assets/image.png';
import './Banner.css';


const Banner = () => {
  return (
    <div className='banner'>
      <img 
        src={BannerImg} 
        alt='banner' 
        className='banner-image' 
      />

      <div className='banner-text'>
        <h2>The impact of Technology on the <br />Workplace: How <br />Technology is Changing</h2>
      </div>
    </div>
  )
}

export default Banner
