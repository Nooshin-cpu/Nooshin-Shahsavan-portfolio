import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


const App: React.FC = () => {
  return (
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
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App; 