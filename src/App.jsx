import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBarr from './components/AppBarr/AppBarr';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CatalogPage = React.lazy(() => import('./pages/CatalogPage'));
const CamperDetailsPage = React.lazy(() => import('./pages/CamperDetailsPage'));

function App() {
  return (
    <Router>
      <AppBarr />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

