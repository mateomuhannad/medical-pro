import React from 'react';
import { Outlet } from 'react-router-dom';
// Import Components
import Container from '../components/Container';

export const FullLayout = () => {
    return (
        <>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}
