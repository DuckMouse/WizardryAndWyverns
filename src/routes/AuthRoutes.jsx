import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';
import Register from '../components/auth/Register';
import ForgotPassword from '../components/auth/ForgotPassword';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/passwordreset" element={<ForgotPassword />} />
        </Routes>
    );
};

export default AuthRoutes;