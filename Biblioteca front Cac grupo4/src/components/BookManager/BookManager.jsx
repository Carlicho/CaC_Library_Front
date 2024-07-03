import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './BookManager.css'

const BookManager = () => {
  const [books, setBooks] = useState([]);

  const fetchData = () => {
    return axios.get('http://127.0.0.1:5000/api/books/')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bookmanager-container'>
      <h1>BookManager</h1>
      <ul>
        {books && books.length > 0 && books.map((bookObj) => (
          <li className='book-container' key={bookObj.id_book}>
            <h2>{bookObj.book_title}</h2>
            <img className='bookimg' src={bookObj.book_cover} alt={bookObj.book_title} />
            <p>Author: {bookObj.author_name}</p>
            <p>Publication Date: {bookObj.publication_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManager;