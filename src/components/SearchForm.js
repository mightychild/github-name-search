import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchForm({ onSearch, loading }) {
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(username.trim() !== '' || username === '');
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className={`search-input-container ${!isValid ? 'invalid' : ''}`}>
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
          disabled={loading}
        />
      </div>
      <button 
        type="submit" 
        className="search-button"
        disabled={loading || !username.trim()}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {!isValid && <p className="validation-message">Please enter a username</p>}
    </form>
  );
}

export default SearchForm;