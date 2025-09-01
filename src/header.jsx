// src/header.jsx
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="website-name">
        <h1>Kelompok 4</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home">Beranda</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;