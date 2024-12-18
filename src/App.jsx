import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() { 
  return (
    <>
      <Suspense fallback={<Loader />}>
       <Routes>
         <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage/>}></Route>
          <Route path='/catalog/:id/*' element={<CamperDetailsPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Route>     
          </Routes>
    </Suspense> 
  </>
  )
}

export default App