import React, { useState } from 'react';
import ModuleOne from './ModuleOne';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const tabs = document.querySelectorAll('.tab-content');
    const results = [];

    tabs.forEach((tab) => {
      const text = tab.innerText.toLowerCase();

      if (text.includes(searchTerm.toLowerCase())) {
        results.push(tab);
      }
    });

    setSearchResults(results);
  };

  return (
    <div>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
      <button onClick={handleSearchClick}>Search</button>
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((tab) => (
            <div key={tab.className}>{tab}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchPage;
