import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './Components';
import { Home, Services, About, Contact } from './Pages';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;