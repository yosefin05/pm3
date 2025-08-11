import React from 'react';

function HaloButton() {
  function handleClick() {
    alert('Halo, React!');
  }

  return (
    <button onClick={handleClick}>
      Halo
    </button>
  );
}

export default HaloButton;
