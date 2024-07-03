import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookManager.css';

const BookManager = () => {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newPublicationDate, setNewPublicationDate] = useState('');
  const [newBookCover, setNewBookCover] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return axios.get('http://127.0.0.1:5000/api/books/')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleAddBook = () => {
    const newBook = {
      book_title: newBookTitle,
      author_name: newAuthorName,
      publication_date: newPublicationDate,
      book_cover: newBookCover
    };

    axios.post('http://127.0.0.1:5000/api/books/', newBook)
      .then((response) => {
        console.log('Book added:', response.data);
        fetchData();
        clearForm();
      })
      .catch((error) => console.error('Error handling:', error));
  };

  const handleEditBook = (id) => {
    console.log('Edit book with ID:', id);
  };

  const handleDeleteBook = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/books/${id}`)
      .then((response) => {
        console.log('Book deleted:', response.data);
        fetchData();
      })
      .catch((error) => console.error('Error deleting book:', error));
  };

  const clearForm = () => {
    setNewBookTitle('');
    setNewAuthorName('');
    setNewPublicationDate('');
    setNewBookCover('');
  };

  return (
    <div className='bookmanager-container'>
      <h1>BookManager</h1>
      <div className='add-book-form'>
        <h2>Agregar Nuevo Libro</h2>
        <input type='text' placeholder='Título' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
        <input type='text' placeholder='Autor' value={newAuthorName} onChange={(e) => setNewAuthorName(e.target.value)} />
        <input type='text' placeholder='Fecha de Publicación' value={newPublicationDate} onChange={(e) => setNewPublicationDate(e.target.value)} />
        <input type='text' placeholder='URL de Portada' value={newBookCover} onChange={(e) => setNewBookCover(e.target.value)} />
        <button onClick={handleAddBook}>Agregar</button>
      </div>

      <ul className='book-list'>
        {books && books.length > 0 && books.map((bookObj) => (
          <li className='book-container' key={bookObj.id_book}>
            <h2>{bookObj.book_title}</h2>
            <img className='bookimg' src={bookObj.book_cover} alt={bookObj.book_title} />
            <p>Author: {bookObj.author_name}</p>
            <p>Publication Date: {bookObj.publication_date}</p>
            <div className='book-actions'>
              <button onClick={() => handleEditBook(bookObj.id_book)}>Editar</button>
              <button onClick={() => handleDeleteBook(bookObj.id_book)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManager;