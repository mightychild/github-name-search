import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import SearchForm from './components/SearchForm';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(response.status === 404 ? 'User not found' : 'Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">GitHub Profile Finder</h1>
        <p className="app-subtitle">Search for any GitHub user by their username</p>
      </header>
      
      <main className="app-content">
        <SearchForm onSearch={fetchUserData} loading={loading} />
        
        <div className="results-container">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {userData && <UserProfile user={userData} />}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Built with React and GitHub API</p>
      </footer>
    </div>
  );
}

export default App;