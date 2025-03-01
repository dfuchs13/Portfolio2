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
import Logo from './pages/Logo';
import Illustrations from './pages/Illustrations';
import Goodness from './pages/Goodness';
import School from './pages/School';
import Video from './pages/Video';
import AAHMN from './pages/AAHMN';
import Klondike from './pages/Klondike';
import State from './pages/State';
import Biology from './pages/Biology';
import IIT from './pages/IIT';

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
          <Route path='/Logo' element={<Logo />} />
          <Route path='/Illustrations' element={<Illustrations />} />
          <Route path='/Goodness' element={<Goodness />} />
          <Route path='/School' element={<School />} />
          <Route path='/Video' element={<Video />} />
          <Route path='/AAHMN' element={<AAHMN />} />
          <Route path='/Klondike' element={<Klondike />} />
          <Route path='/State' element={<State />} />
          <Route path='/Biology' element={<Biology />} />
          <Route path='/IIT' element={<IIT />} />
      </Routes>
      <Footer />
  </Router>
  )
}

export default App;
