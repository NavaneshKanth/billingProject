import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agency_add from './components/master/Agency_Add.jsx';
import Home from './components/Home';
import Product_Add from './components/master/Product_Add';
import ProductPurchase from './components/operation/ProductPurchase';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/agencyadd' element={<Agency_add/>} />
          <Route exact path='/productadd' element={<Product_Add/>} />
          <Route exact path='/pr_purchase' element={<ProductPurchase/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
