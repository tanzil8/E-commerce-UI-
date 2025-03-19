import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import BillingDetailsPage from './page/OrderDetail';

const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<div className='bg-gray-100'><Cart/></div>} />
        <Route path="/billingdetail" element={<BillingDetailsPage/>} />

      </Routes>
    </BrowserRouter>
 
  );
};

export default App;
