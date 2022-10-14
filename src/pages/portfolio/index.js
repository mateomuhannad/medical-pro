import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, Divider, Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';

import CardMedia from '@mui/material/CardMedia';
import CardImg from '../../assets/css/download.png';
import SolanaTokenIcon from '../../assets/css/sol.svg';

import { Stack } from '@mui/system';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `1px solid #00ff00`,
        padding: '0 4px',
        backgroundColor: '#00ff00'
    },
}));

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
            <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
                <Grid container spacing={3}>
                    <Grid item lg={3} md={6} xs={12}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'white', width: '3.5rem', height: '3.5rem', fontSize: 40 }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 30, width: 30 }}
                                        component="img"
                                        image={CardImg}
                                        alt="Live from space album cover"
                                        onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                            }
                            title=""
                        />
                        <Stack sx={{ paddingLeft: 1 }}>
                            <Stack direction={"row"}>
                                <Typography gutterBottom component="div" variant='h6' sx={{ fontWeight: 700, fontSize: 18 }}>
                                    King123
                                </Typography>
                            </Stack>
                            <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
                                <Typography sx={{
                                    color: 'rgb(130 171 183/1)',
                                    fontSize: '1rem',
                                    lineHeight: '1.75rem'
                                }} > Wallets Connected: 1</Typography>
                            </Stack>
                        </Stack>
                        <CardActions disableSpacing>
                            <Button variant="outlined" size='small'>select wallet</Button>
                        </CardActions>
                        <Typography p={1}>Report an issue</Typography>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card sx={{ bgcolor: '#004b5f', minWidth: 330, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                            <Typography p={1} sx={{ fontWeight: 700 }}>  TOTAL FLOOR VALUE</Typography>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'white', width: '3.5rem', height: '3.5rem' }} aria-label="recipe">
                                        <CardMedia
                                            sx={{ height: 30, width: 30 }}
                                            component="img"
                                            image={SolanaTokenIcon}
                                            alt="Live from space album cover"
                                            onClick={() => { window.location.href = "" }}
                                        />
                                    </Avatar>
                                }
                                title={<>
                                    <Typography gutterBottom component="div" sx={{ fontWeight: 700, fontSize: 22 }}>
                                        1.24 SOL
                                    </Typography>
                                    <Button variant="outlined" size='small'>$40.30</Button>
                                </>}
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card sx={{ bgcolor: '#004b5f', color: 'rgb(5 176 125/1)', minWidth: 330, maxWidth: 500, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack>
                                    <Typography p={1} sx={{ fontWeight: 700 }}>REALIZED GAINS</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1}>
                                    <Button variant="outlined" size='small' >1D</Button>
                                    <Button variant="outlined" size='small'>1W</Button>
                                    <Button variant="outlined" size='small' sx={{ color: 'rgb(5 176 125/1)' }}>YTD</Button>
                                </Stack>
                            </Stack>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: '#4d445a', width: '2.5rem', height: '2.5rem' }} aria-label="recipe">
                                        <CardMedia
                                            sx={{ height: 30, width: 30 }}
                                            component="img"
                                            image={SolanaTokenIcon}
                                            alt="Live from space album cover"
                                            onClick={() => { window.location.href = "" }}
                                        />
                                    </Avatar>
                                }
                                title={<>
                                    <Typography gutterBottom component="div" sx={{ fontWeight: 700, fontSize: 22 }}>
                                        0 %
                                    </Typography>
                                </>}
                            />
                            <Stack spacing={1} direction={'row'} sx={{ paddingLeft: 2 }}>
                                <Button variant="outlined" size='small' sx={{ bgcolor: '#4d445a' }}>$40.30</Button>
                                <Button variant="outlined" size='small'>-</Button>
                            </Stack>
                            <Divider sx={{ paddingTop: 5, borderBottom: 3, borderColor: '#4d445a' }} />
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card sx={{ bgcolor: '#004b5f', color: 'rgb(5 176 125/1)', minWidth: 330, maxWidth: 500, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack>
                                    <Typography p={1} sx={{ fontWeight: 700 }}>UNREALIZED GAINS</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1}>
                                    <Button variant="outlined" size='small' >1D</Button>
                                    <Button variant="outlined" size='small'>1W</Button>
                                    <Button variant="outlined" size='small' sx={{ color: 'rgb(5 176 125/1)' }}>YTD</Button>
                                </Stack>
                            </Stack>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: '#4d445a', width: '2.5rem', height: '2.5rem' }} aria-label="recipe">
                                        <CardMedia
                                            sx={{ height: 30, width: 30 }}
                                            component="img"
                                            image={SolanaTokenIcon}
                                            alt="Live from space album cover"
                                            onClick={() => { window.location.href = "" }}
                                        />
                                    </Avatar>
                                }
                                title={<>
                                    <Typography gutterBottom component="div" sx={{ fontWeight: 700, fontSize: 22 }}>
                                        0 %
                                    </Typography>
                                </>}
                            />
                            <Stack spacing={1} direction={'row'} sx={{ paddingLeft: 2 }}>
                                <Button variant="outlined" size='small' sx={{ bgcolor: '#4d445a' }}>+1.24SOL</Button>
                                <Button variant="outlined" size='small' sx={{ bgcolor: '#4d445a' }}>+40.30</Button>
                            </Stack>
                            <Divider sx={{ paddingTop: 5, borderBottom: 3, borderColor: '#4d445a' }} />
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{
                    paddingTop: 2
                }} />
            </Box >
            <Box component="main" sx={{ flexGrow: 1, p: 5, width: '100%', maxWidth: 360 }}>
                <Card sx={{ bgcolor: '#004b5f', minWidth: 330, maxWidth: 500, color: 'rgb(5 176 125/ 1)', borderRadius: "10px", padding: 1 }}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton>
                            <ListItemText primary="My Collections" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <Avatar sx={{ bgcolor: '#4d445a', width: '2rem', height: '2rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 15, width: 15 }}
                                        component="img"
                                        image={SolanaTokenIcon}
                                        alt="Live from space album cover"
                                        onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                                <Stack>
                                    <ListItemText primary={
                                        <>

                                            <StyledBadge badgeContent={4} color="secondary">
                                                <Typography>Degentown:The Living&nbsp;&nbsp;&nbsp;</Typography></StyledBadge>
                                        </>
                                    } />
                                    <Stack direction={'row'} >
                                        <Button variant="outlined" size='small'>AvgCost:@ 0</Button>
                                        <Button variant="outlined" size='small'>Fp:0.55</Button>
                                        <Button variant="outlined" size='small'>+40.30</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <Avatar sx={{ bgcolor: '#4d445a', width: '2rem', height: '2rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 15, width: 15 }}
                                        component="img"
                                        image={SolanaTokenIcon}
                                        alt="Live from space album cover"
                                        onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                                <Stack>
                                    <ListItemText primary={
                                        <>

                                            <StyledBadge badgeContent={4} color="secondary">
                                                <Typography>Bit Worriors &nbsp;&nbsp;&nbsp;</Typography></StyledBadge>
                                        </>
                                    } />
                                    <Stack direction={'row'} >
                                        <Button variant="outlined" size='small'>AvgCost:@ 0</Button>
                                        <Button variant="outlined" size='small'>Fp:0.55</Button>
                                        <Button variant="outlined" size='small'>+40.30</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </ListItemButton>
                        <ListItemButton>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <Avatar sx={{ bgcolor: '#4d445a', width: '2rem', height: '2rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 15, width: 15 }}
                                        component="img"
                                        image={SolanaTokenIcon}
                                        alt="Live from space album cover"
                                        onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                                <Stack>
                                    <ListItemText primary={
                                        <>

                                            <StyledBadge badgeContent={4} color="secondary">
                                                <Typography>Dead Man's Hand&nbsp;&nbsp;&nbsp;</Typography></StyledBadge>
                                        </>
                                    } />
                                    <Stack direction={'row'} >
                                        <Button variant="outlined" size='small'>AvgCost:@ 0</Button>
                                        <Button variant="outlined" size='small'>Fp:0.55</Button>
                                        <Button variant="outlined" size='small'>+40.30</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </ListItemButton>
                    </List>

                </Card>
            </Box>
        </>
    );
}

export default Traders;