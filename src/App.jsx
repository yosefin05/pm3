import React, { useState } from "react";
import "./App.css";

// Component imports
import Header from "./header";
import HaloButton from "./HaloButton";
import CardProduk from "./components/card";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./context/themecontext";
import ThemeToggle from "./components/themetoggle";
import Profile from "./components/profil";
import KartuSiswa from "./components/kartusiswa";
import Testimoni from "./components/testimoni";

// Reusable InputField Component
function InputField({ 
  label, 
  defaultValue, 
  onSubmit, 
  maxLength, 
  placeholder, 
  type = "text" 
}) {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const validate = (text) => {
    if (!text.trim()) return `${label} tidak boleh kosong.`;
    if (text.length > maxLength) return `Maksimal ${maxLength} karakter.`;
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validate(value);
    setError(msg);
    
    if (!msg && onSubmit) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  const handleReset = () => {
    setValue("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor={label.toLowerCase()} className="input-label">
        {label} <span className="required-asterisk">*</span>
      </label>

      <div className="input-container">
        {type === "textarea" ? (
          <textarea
            id={label.toLowerCase()}
            value={value}
            onChange={(e) => { 
              setValue(e.target.value); 
              setError(""); 
            }}
            placeholder={placeholder}
            maxLength={maxLength}
            rows="3"
            className={`input-field textarea-field ${error ? "input-error" : ""}`}
          />
        ) : (
          <input
            id={label.toLowerCase()}
            type={type}
            value={value}
            onChange={(e) => { 
              setValue(e.target.value); 
              setError(""); 
            }}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`input-field ${error ? "input-error" : ""}`}
          />
        )}

        <button type="submit" className="input-button">
          Simpan
        </button>
        <button 
          type="button" 
          onClick={handleReset} 
          className="input-button secondary"
        >
          Reset
        </button>
      </div>

      <div className="input-footer">
        <span className={`error-message ${error ? "visible" : ""}`}>
          {error || "\u00A0"}
        </span>
        <span className="char-counter">
          {value.length}/{maxLength}
        </span>
      </div>
    </form>
  );
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-section">
      <h2>Komponen Counter</h2>

      <div className="counter-display">
        <h3>Jumlah Klik: {count}</h3>
      </div>

      <div className="counter-buttons">
        <button 
          onClick={() => setCount((c) => c + 1)} 
          className="counter-button"
        >
          Klik untuk Menambah (+)
        </button>
        <button 
          onClick={() => setCount((c) => c - 1)} 
          className="counter-button"
        >
          Klik untuk mengurangi (-)
        </button>
        <button 
          onClick={() => setCount(0)} 
          className="counter-button"
        >
          Klik untuk mereset
        </button>
      </div>
    </section>
  );
}

function AppContent() {
  const [profilData, setProfilData] = useState({
    nama: "",
    kelas: "",
    deskripsi: ""
  });

  const handleViewDetail = (productName) => {
    alert(`Anda melihat detail: ${productName}`);
  };

  const handleBuyNow = (productName) => {
    alert(`Anda membeli: ${productName}`);
  };

  const handleSimpanNama = (namaBaru) => {
    setProfilData((p) => ({ ...p, nama: namaBaru }));
  };

  const handleSimpanKelas = (kelasBaru) => {
    setProfilData((p) => ({ ...p, kelas: kelasBaru }));
  };

  const handleSimpanDeskripsi = (deskripsiBaru) => {
    setProfilData((p) => ({ ...p, deskripsi: deskripsiBaru }));
  };

  return (
    <>
      <Header />
      <ThemeToggle />
      
      <div className="main-content">
        <div className="welcome-section">
          <h1>Selamat Datang di Kelompok 4!</h1>
          <HaloButton />
        </div>
        
        {/* Input Data Profil Section */}
        <div className="input-section">
          <h2>Isi Data Profil</h2>
          
          <InputField 
            label="Nama"
            defaultValue={profilData.nama}
            onSubmit={handleSimpanNama}
            maxLength={50}
            placeholder="Tulis nama lengkap Anda"
          />
          
          <InputField 
            label="Kelas"
            defaultValue={profilData.kelas}
            onSubmit={handleSimpanKelas}
            maxLength={20}
            placeholder="Contoh: XII SIJA 1"
          />
          
          <InputField 
            label="Deskripsi"
            defaultValue={profilData.deskripsi}
            onSubmit={handleSimpanDeskripsi}
            maxLength={150}
            placeholder="Deskripsikan diri Anda..."
            type="textarea"
          />
          
          {(profilData.nama || profilData.kelas || profilData.deskripsi) && (
            <div className="input-result">
              <h3>Data Profil Anda:</h3>
              {profilData.nama && <p>Nama: <strong>{profilData.nama}</strong></p>}
              {profilData.kelas && <p>Kelas: <strong>{profilData.kelas}</strong></p>}
              {profilData.deskripsi && <p>Deskripsi: <strong>{profilData.deskripsi}</strong></p>}
            </div>
          )}
        </div>
        
        {/* Counter Section */}
        <div className="counter-container">
          <Counter />
        </div>
        
        {/* Profile Section */}
        <div className="profile-container">
          <Profile data={profilData} />
        </div>
        
        {/* Kartu Siswa Section */}
        <div className="students-container">
          <h2>👥 Anggota Kelompok</h2>
          <div className="students-grid">
            <KartuSiswa nama="Josie Raditya" jurusan="SIJA" />
            <KartuSiswa nama="Fauzan Raditya" jurusan="ROBLOK" />
          </div>
        </div>
        
        {/* Produk Section */}
        <div className="products-container">
          <h2>🛍️ Produk Kami</h2>
          <p className="products-subtitle">
            Temukan produk terbaik dengan kualitas premium
          </p>
          
          <div className="products-grid">
            <CardProduk 
              name="RTX 5090" 
              price={4000} 
              description="Nvidia GPU terbaru dengan performa gaming dan rendering yang luar biasa." 
              onViewDetail={() => handleViewDetail("RTX 5090")}
              onBuyNow={() => handleBuyNow("RTX 5090")}
            />

            <CardProduk 
              name="Ryzen 9 9950X" 
              price={999} 
              description="Prosesor AMD terbaru dengan 16-core untuk gaming dan produktivitas maksimal." 
              onViewDetail={() => handleViewDetail("Ryzen 9 9950X")}
              onBuyNow={() => handleBuyNow("Ryzen 9 9950X")}
            />

            <CardProduk 
              name="Samsung Odyssey G9" 
              price={1499} 
              description="Monitor ultrawide 49 inci dengan refresh rate 240Hz untuk pengalaman immersive." 
              onViewDetail={() => handleViewDetail("Samsung Odyssey G9")}
              onBuyNow={() => handleBuyNow("Samsung Odyssey G9")}
            />
          </div>
        </div>
        
        {/* Testimoni Section */}
        <div className="testimonials-container">
          <h2>💬 Testimoni</h2>
          <div className="testimonials-grid">
            <Testimoni 
              nama="Josie" 
              isi="Lumayan susah tapi seru" 
              rating={4} 
            />
            <Testimoni 
              nama="Fauzan" 
              isi="Mending main roblok" 
              rating={1} 
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