import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchResultsList from './SearchResultsList';

const SearchResultsPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] }; 

  return (
    <div>
      <h1>Resultados de Búsqueda</h1>
      <SearchResultsList results={results} />
    </div>
  );
};

export default SearchResultsPage;
