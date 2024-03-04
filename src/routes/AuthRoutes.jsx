import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';
import Register from '../components/auth/Register';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default AuthRoutes;