import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppBarr.module.css';

const AppBarr = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>TravelTrucks</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/catalog" className={styles.navLink}>Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBarr;
