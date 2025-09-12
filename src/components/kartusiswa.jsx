import React from 'react';

const KartuSiswa = ({ nama, jurusan }) => {
  return (
    <div className="student-card">
      <div className="student-header">
        <h3>{nama}</h3>
      </div>
      <div className="student-body">
        <p className="student-jurusan">{jurusan}</p>
        <p className="student-description">
          Anggota kelompok 4 yang berkontribusi dalam pembuatan website ini.
        </p>
      </div>
    </div>
  );
};

export default KartuSiswa;