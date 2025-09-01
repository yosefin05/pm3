import React from "react";
import "./App.css";
import Header from "./header";
import HaloButton from "./halobutton";
import CardProduk from "./components/card";
import { Footer } from "./components/footer"; // Import Footer

function App() {
  return (
    <>
      <Header />
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
              description="Nvidia GPU SUPERPOWER dengan arsitektur terbaru untuk gaming dan rendering tanpa batas." 
            />

            <CardProduk 
              name="Ryzen 9 9950X" 
              price={999} 
              description="Prosesor terbaru dengan 16-core untuk performa maksimal dalam gaming dan produktivitas." 
            />

            <CardProduk 
              name="Samsung Odyssey G9" 
              price={1499} 
              description="Monitor ultrawide 49 inci dengan refresh rate 240Hz dan resolusi 5120x1440." 
            />
          </div>
        </div>
      </div>
      <Footer /> {/* Tambahkan Footer di sini */}
    </>
  );
}

export default App;