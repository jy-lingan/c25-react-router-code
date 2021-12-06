import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Blog from './components/pages/Blog';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
