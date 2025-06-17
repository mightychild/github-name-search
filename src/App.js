import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import SearchForm from './components/SearchForm';
import SearchHistory from './components/SearchHistory';
import RepositoryList from './components/RepositoryList';
import ThemeToggle from './components/ThemeToggle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';
import './theme.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useLocalStorage('searchHistory', []);
  const [darkMode, setDarkMode] = useDarkMode();

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
      setSearchHistory(prev => 
        [username, ...prev.filter(item => item !== username)].slice(0, 5)
      );
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1 className="app-title">GitHub Profile Finder</h1>
            <p className="app-subtitle">Search for any GitHub user by their username</p>
          </div>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>
      
      <main className="app-content">
        <div className="search-section">
          <SearchForm onSearch={fetchUserData} loading={loading} />
          {searchHistory.length > 0 && (
            <SearchHistory 
              searches={searchHistory} 
              onSearch={fetchUserData} 
            />
          )}
        </div>
        
        <div className="results-container">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {userData && (
            <div className="profile-section">
              <UserProfile user={userData} />
              <RepositoryList username={userData.login} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Built with React and GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
