import React from 'react';

const CardProduk = ({ name, price, description }) => {
  return (
    <div className="card-product">
      <div className="card-header">
        <h3 className="product-title">{name}</h3>
      </div>
      <div className="card-body">
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
      <div className="card-footer">
        <button className="card-btn">Lihat Detail</button>
        <button className="card-btn card-btn-primary">Beli Sekarang</button>
      </div>
    </div>
  );
};

export default CardProduk;