import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiGitBranch } from 'react-icons/fi';

function RepositoryList({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?page=${page}&per_page=5&sort=updated`
        );
        const data = await response.json();
        setRepos(data);
        
        // Get total pages from link header
        const linkHeader = response.headers.get('Link');
        if (linkHeader) {
          const lastPageMatch = linkHeader.match(/page=(\d+)&per_page=\d+>; rel="last"/);
          if (lastPageMatch) {
            setTotalPages(parseInt(lastPageMatch[1]));
          }
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchRepos();
  }, [username, page]);

  return (
    <div className="repository-list">
      <h3>Recent Repositories</h3>
      {loading ? (
        <p>Loading repositories...</p>
      ) : (
        <>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <div className="repo-stats">
                  <span><FiStar /> {repo.stargazers_count}</span>
                  <span><FiGitBranch /> {repo.forks_count}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))} 
              disabled={page === 1}
            >
              <FiChevronLeft />
            </button>
            <span>Page {page} of {totalPages}</span>
            <button 
              onClick={() => setPage(p => p + 1)} 
              disabled={page === totalPages}
            >
              <FiChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default RepositoryList;