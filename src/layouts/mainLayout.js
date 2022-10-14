import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Sider from '../components/Sidebar'

// Import Components
import Container from '../components/Container';

export const MainLayout = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Header />
                <Sider />
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}
