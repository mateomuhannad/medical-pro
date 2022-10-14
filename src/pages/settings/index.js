import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';

import { Stack } from '@mui/system';

const Traders = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            <DrawerHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 8 }}>
                <Stack sx={{ paddingLeft: 1 }} spacing={3}>
                    <Stack direction={"row"}>
                        <Typography gutterBottom component="div" variant='h4' sx={{ fontWeight: 700 }}>
                            Settings
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography sx={{
                            color: 'rgb(130 171 183/1)',
                            fontSize: '1rem',
                            lineHeight: '1.75rem'
                        }} > Wallets Connected</Typography>
                    </Stack>
                </Stack>
                <Grid container>
                    <Grid item lg={6} md={6} xs={12} p={1}>
                        <Card sx={{ bgcolor: '#004b5f', padding: 1 }}>
                            <Typography sx={{ fontSize: 10 }}> FpdUQ25wEAMXN6UZHufmASuiHASo76gtwwzUXQDpVBCx</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}

export default Traders;