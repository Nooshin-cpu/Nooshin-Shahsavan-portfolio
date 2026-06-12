import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import SBS from './pages/work/SBS';
import Veen from './pages/work/Veen';
import Delicato from './pages/work/Delicato';
import Zar from './pages/work/Zar';
import Workday from './pages/work/Workday';
import FunProject from './pages/work/FunProject';
import Bcit from './pages/work/Bcit';


const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work/sbs" element={<SBS />} />
              <Route path="/work/veen" element={<Veen />} />
              <Route path="/work/workday" element={<Workday />} />
              <Route path="/work/delicato" element={<Delicato />} />
              <Route path="/work/zar" element={<Zar />} />
              <Route path="/work/fun" element={<FunProject />} />
              <Route path="/work/bcit" element={<Bcit />} />
              <Route path="/work/savefood" element={<Bcit />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App; 