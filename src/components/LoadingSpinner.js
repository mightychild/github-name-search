import React from 'react';

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Fetching user data...</p>
    </div>
  );
}

export default LoadingSpinner;
