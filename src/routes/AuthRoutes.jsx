import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn, Register, ForgotPassword } from '../components/auth';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/passwordreset" element={<ForgotPassword />} />
        </Routes>
    );
};
