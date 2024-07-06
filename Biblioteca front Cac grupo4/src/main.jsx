import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import SearchResultsPage from './components/Header/SearchBar/SearchResultsPage'; // Importa SearchResultsPage

const domain = 'dev-ftrqtu62cn1mp2ee.us.auth0.com';
const clientId = 'AWxApffW84M1VZJi0VTXsb1jzkBzCnkJ';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);