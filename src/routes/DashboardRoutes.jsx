import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default DashboardRoutes;