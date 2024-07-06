// BookManager.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react'; // Importa useAuth0 para acceder al estado de autenticación
import './BookManager.css';

const BookManager = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0(); // Obtén el estado de autenticación y la función para obtener el access token
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          const token = await getAccessTokenSilently(); // Obten el access token de Auth0
          const response = await axios.get('http://127.0.0.1:5000/api/books/', {
            headers: {
              Authorization: `Bearer ${token}`, // Envía el access token en la cabecera de autorización
            },
          });
          setBooks(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <div>Inicia sesión para ver esta página.</div>; // Puedes mostrar un mensaje o redirigir a la página de inicio de sesión si no está autenticado
  }

  return (
    <div className='bookmanager-container'>
      <h1>BookManager</h1>
      <ul>
        {books && books.length > 0 ? (
          books.map((bookObj) => (
            <li className='book-container' key={bookObj.id_book}>
              <h2>{bookObj.book_title}</h2>
              <img className='bookimg' src={bookObj.book_cover} alt={bookObj.book_title} />
              <p>Author: {bookObj.author_name}</p>
              <p>Publication Date: {bookObj.publication_date}</p>
            </li>
          ))
        ) : (
          <li>No hay libros disponibles.</li>
        )}
      </ul>
    </div>
  );
};

export default BookManager;
