import React, { useState } from 'react'
import './Header.css'


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search for:', searchTerm)
    };
  return (
    <div>
      <header className='header'>
        <div className='logo'>MetaBlog</div>
        <nav className='nav'>
            <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Single Post</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                type="text"
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type='submit'>Go</button>
            </form>
        </nav>
      </header>
    </div>
  )
}

export default Header
