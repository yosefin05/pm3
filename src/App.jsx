import React from "react";
import "./App.css";
import Header from "./header";
import HaloButton from "./halobutton";
import CardProduk from "./components/card";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./context/themecontext";
import ThemeToggle from "./components/themetoggle";

function AppContent() {
  return (
    <>
      <Header />
      <ThemeToggle /> {/* Tambahkan toggle button */}
      <div className="main-content">
        <div className="welcome-section">
          <h1>Selamat Datang di Kelompok 4!</h1>
          <HaloButton />
        </div>
        
        <div className="products-container">
          <h2>🛍️ Produk Kami</h2>
          <p className="products-subtitle">Temukan produk terbaik dengan kualitas premium</p>
          
          <div className="products-grid">
            <CardProduk 
              name="RTX 5090" 
              price={4000} 
              description="Nvidia GPU terbaru dengan performa gaming dan rendering yang luar biasa." 
            />

            <CardProduk 
              name="Ryzen 9 9950X" 
              price={999} 
              description="Prosesor AMD terbaru dengan 16-core untuk gaming dan produktivitas maksimal." 
            />

            <CardProduk 
              name="Samsung Odyssey G9" 
              price={1499} 
              description="Monitor ultrawide 49 inci dengan refresh rate 240Hz untuk pengalaman immersive." 
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;