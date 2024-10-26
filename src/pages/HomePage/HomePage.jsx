import React from 'react';
import { Link } from 'react-router-dom';
import { HeroContainer, HomeSection, HeroTitle, HeroLink, HeroText, HomeMainContent } from "./HomePage.styled.js";

const HomePage = () => {
<<<<<<< Updated upstream

  return  (
  
  <HomeMainContent>
  <HomeSection>
    <HeroContainer>

      <HeroTitle>Campers of your dreams</HeroTitle>
      <HeroText>You can find everything you want in our catalog</HeroText>
    <HeroLink to="/catalog">View Now</HeroLink>
    </HeroContainer>
      </HomeSection>;
      </HomeMainContent>)
=======
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerTitle}>
            <h1>Campers of your dreams</h1>
            <p className={styles.bannerText}>You can find everything you want in our catalog</p>
          </div>
          <Link to="/catalog" className={styles.btnPrimary}>View Now</Link>
        </div>
      </div>
    </div>
  );
>>>>>>> Stashed changes
};

export default HomePage;
