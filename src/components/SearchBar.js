import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="field has-addons" style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="control">
    <input
      className="input"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Exact Name Match Plz..."
    />
    </div>
      <div className="control">
        <button onClick={handleSearch} className="button is-focused is-rounded is-dark is-responsive">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;