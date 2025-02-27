import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Snowdrop from './pages/Snowdrop';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Snowdrop' element={<Snowdrop />} />
      </Routes>
      <Footer />
  </Router>
  )
}

export default App;
