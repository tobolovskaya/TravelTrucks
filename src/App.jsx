import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CamperDetailPage from './pages/CamperDetailPage';
import Header from './components/Header';  // Створимо компонент Header для меню навігації

const App = () => {
  return (
    <Router>
      <Header /> {/* Для навігації по сторінках */}
      <Routes>
        <Route path="/" element={<HomePage />} />          {/* Домашня сторінка */}
        <Route path="/catalog" element={<CatalogPage />} /> {/* Каталог кемперів */}
        <Route path="/catalog/:id" element={<CamperDetailPage />} /> {/* Окремий кемпер */}
      </Routes>
    </Router>
  );
};

export default App;
