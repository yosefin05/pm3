import React from 'react';
import "../App.css"; // Import dari App.css yang benar

export const Footer = () => {
  return (
    <>
      <footer className="footer"> {/* Gunakan class "footer" dari App.css */}
        <p>&copy; {new Date().getFullYear()} Kelompok 4. All rights reserved.</p>
      </footer>
    </>
  );
};