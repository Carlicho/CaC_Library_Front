import './App.css';
import BookManager from './components/Main/BookManager/BookManager';
import Header from './components/Header/Header';
import { useState } from 'react';
import SearchResultsList from './components/Header/SearchBar/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // Estado para controlar la visibilidad de los resultados

  const handleSearch = (searchResults) => {
    setResults(searchResults);
    setShowResults(true); // Mostrar resultados de búsqueda
  };

  return (
    <div className='App-container'>
      <Header setResults={handleSearch} />
      {showResults ? (
        <SearchResultsList results={results} />
      ) : (
        <BookManager />
      )}
    </div>
  );
}

export default App;
