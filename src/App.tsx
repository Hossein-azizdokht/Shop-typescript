import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from './context/shopingCartContext'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
