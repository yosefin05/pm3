import React from 'react';

const Profile = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src="/Library books.jpg"
          alt="Foto Siswa"
        />
      </div>
      <div className="profile-info">
        <h2>{data.nama || "Nama belum diisi"}</h2>
        <h3>{data.kelas || "Kelas belum diisi"}</h3>
        <p>
          {data.deskripsi || "Kami seorang siswa SMK Telkom SDA dan sedang belajar React.js."}
        </p>
      </div>
    </div>
  );
};

export default Profile;