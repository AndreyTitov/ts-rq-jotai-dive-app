import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import Product from './Product/Product';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={'/products/:productId'} element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
