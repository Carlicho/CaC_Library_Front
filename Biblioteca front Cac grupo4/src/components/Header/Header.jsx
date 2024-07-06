import React from 'react';
import NavBar from './NavBar/Nav';
import styles from './Header.module.css';
import { TiShoppingCart } from 'react-icons/ti';
import LoginButton from '../Buttons/LoginButton';
import SearchBar2 from './SearchBar/SearchBar2';

const Header = ({ setResults }) => {
  return (
    <div>
      <div className={styles.Headertop}>
        <div className={styles.mainHeader}>
          <h1>Biblioteca Grupo 4</h1>
          <SearchBar2 setResults={setResults} />
          <LoginButton />
          <TiShoppingCart size="3.24rem" color='#ffffff'/>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
