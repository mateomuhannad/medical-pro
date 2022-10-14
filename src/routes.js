import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import {
    MainLayout
} from './layouts'

import Trader from './pages/traders';
import Portfolio from './pages/portfolio';
import Settings from './pages/settings';
import Dashboard from './pages/dashboard';
export default function Router() {

    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Dashboard /> },
            ]
        },
        {
            path: '/app/traders',
            element: <MainLayout />,
            children: [
                { path: '/app/traders', element: <Trader /> },
            ]
        },
        {
            path: '/app/portfolio',
            element: <MainLayout />,
            children: [
                { path: '/app/portfolio', element: <Portfolio /> },
            ]
        },
        {
            path: '/app/settings',
            element: <MainLayout />,
            children: [
                { path: '/app/settings', element: <Settings /> },
            ]
        },
        {
            path: '/app/dashboard',
            element: <MainLayout />,
            children: [
                { path: '/app/dashboard', element: <Dashboard /> },
            ]
        },
        { path: '*', element: <Navigate to='/404' replace /> }
    ])
}
