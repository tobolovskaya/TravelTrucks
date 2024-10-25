import React from 'react';
import { Link } from 'react-router-dom';
import { HeroContainer, HomeSection, HeroTitle, HeroLink, HeroText, HomeMainContent } from "./HomePage.styled.js";

const HomePage = () => {

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
};

export default HomePage;
