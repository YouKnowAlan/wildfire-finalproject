import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Spinner from './component/features/Spinner';

const Home = lazy(() => import('./component/pages/Home'));
const Report = lazy(() => import('./component/pages/Report'));
const About = lazy(() => import('./component/pages/About'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
