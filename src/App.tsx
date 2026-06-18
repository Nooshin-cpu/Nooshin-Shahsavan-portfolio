import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';

// Project pages — code-split so their heavy assets only load on demand
const SBS       = lazy(() => import('./pages/work/SBS'));
const Veen      = lazy(() => import('./pages/work/Veen'));
const Delicato  = lazy(() => import('./pages/work/Delicato'));
const Zar       = lazy(() => import('./pages/work/Zar'));
const Workday   = lazy(() => import('./pages/work/Workday'));
const FunProject = lazy(() => import('./pages/work/FunProject'));
const Bcit           = lazy(() => import('./pages/work/Bcit'));
const BcitMarketing  = lazy(() => import('./pages/work/BcitMarketing'));

const PageLoader: React.FC = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
    fontSize: '1rem',
    letterSpacing: '0.05em',
  }}>
    Loading…
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/about"        element={<About />} />
                <Route path="/work"         element={<Work />} />
                <Route path="/resume"       element={<Resume />} />
                <Route path="/work/sbs"     element={<SBS />} />
                <Route path="/work/veen"    element={<Veen />} />
                <Route path="/work/workday" element={<Workday />} />
                <Route path="/work/delicato" element={<Delicato />} />
                <Route path="/work/zar"     element={<Zar />} />
                <Route path="/work/fun"     element={<FunProject />} />
                <Route path="/work/bcit"            element={<Bcit />} />
                <Route path="/work/bcit-marketing"  element={<BcitMarketing />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
