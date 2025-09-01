import React from "react";
import "./App.css";
import Header from "./Header";
import HaloButton from "./HaloButton";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h1>Selamat Datang di Kelompok 4!</h1>
        <HaloButton />
      </div>
    </>
  );
}

export default App;
