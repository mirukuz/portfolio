import React from 'react';
import "../styles/spinner.css"

export default function Loader() {
  return (
    <div style={loaderStyles}>
      <div className="spinner" />
    </div>
  );
}

const loaderStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  zIndex: 20, // High z-index
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
