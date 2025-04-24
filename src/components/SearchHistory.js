
import React from 'react';
import { FiClock } from 'react-icons/fi';

function SearchHistory({ searches, onSearch }) {
  return (
    <div className="search-history">
      <h3><FiClock /> Search History</h3>
      <ul>
        {searches.map((search, index) => (
          <li key={index}>
            <button onClick={() => onSearch(search)}>
              {search}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;