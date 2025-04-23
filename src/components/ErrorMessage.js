import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <FiAlertTriangle className="error-icon" />
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;