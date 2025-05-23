import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import BillingDetailsPage from './page/OrderDetail';
import Signup from './page/Signup';
import Login from './page/login';
import Productdetail from './page/productdetail';
import Contact from './page/contect';
import About from './page/about';
import { AuthProvider } from './contexts/AuthContext.jsx';



const App = () => {
  return (
    <AuthProvider>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<div className='bg-gray-100'><Cart/></div>} />
        <Route path="/billingdetail" element={<div className='bg-gray-100'><BillingDetailsPage/></div>} />
        <Route path="/signup" element={<div className='bg-gray-100'><Signup/></div>} />
        <Route path="/login" element={<div className='bg-gray-100'><Login/></div>} />
        <Route path="/productdetail" element={<div className='bg-gray-100 '><Productdetail/></div>} />
        <Route path="/contact" element={<div className='bg-gray-100 '><Contact/></div>} />
        <Route path="/about" element={<div className='bg-gray-100 '><About/></div>} />
 

      </Routes>
    </BrowserRouter>
    </AuthProvider>
 
  );
};

export default App;
