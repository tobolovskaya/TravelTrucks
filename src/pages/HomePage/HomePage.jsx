import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Campers of your dreams</h1>
          <p className={styles.bannerText}>You can find everything you want in our catalog</p>
          <Link to="/catalog" className={styles.btnPrimary}>View Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
