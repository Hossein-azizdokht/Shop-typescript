import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from './context/shopingCartContext'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Breadcrumbs from './components/breadcrumb';
import Header from './components/nav/nav';



function App() {

  return (
    <ShoppingCartProvider>
      {/* <Navbar /> */}
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
