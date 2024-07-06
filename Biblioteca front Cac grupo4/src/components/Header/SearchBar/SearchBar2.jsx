import { useState } from 'react';
import styles from './Searchbar.module.css';

const SearchBar2 = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('http://127.0.0.1:5000/api/books/')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((Book) => {
          return (
            value &&
            Book &&
            Book.nombre &&
            Book.nombre.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results); // Actualizar resultados en el estado de App
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const SearchHandleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className={styles.inputBox}>
        <input
          placeholder='Buscador'
          className={styles.searchInput}
          value={input}
          onChange={(e) => {
            SearchHandleChange(e.target.value);
          }}
        />
        <button
          className={styles.inputbtn}
          onClick={() => {
            fetchData(input);
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar2;
