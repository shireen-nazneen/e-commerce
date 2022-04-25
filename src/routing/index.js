import React from 'react';
import {
    Routes, Route
} from "react-router-dom";
import Navbar from '../components/navbar'
import CartPage from '../pages/cart';
import Homepage from '../pages/home';
import Product from '../pages/product';
import Profile from '../pages/profile';

const AppRouting = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/home/:category' element={<Homepage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/product/:productid' element={<Product />} />
            </Routes>
        </div>
    )
}

export default AppRouting;