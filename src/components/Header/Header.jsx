import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        TravelTrucks
      </NavLink>
      <nav className={styles.nav}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}
        >
          Home
        </NavLink>
        <NavLink 
          to="/catalog" 
          className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
