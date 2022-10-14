import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PeopleIcon from '@mui/icons-material/People';
// import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
// import DbIcon from '../../assets/css/dbIcon.svg';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Siderbar = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Drawer variant="permanent" open={open} sx={{ bgcolor: '#004b5f !important', display: { xs: 'none', lg: 'block', md: 'block' } }}>
                <List sx={{ paddingTop: 15 }}>
                    <Typography paddingLeft={2.5}>{open && 'Menu'}</Typography>
                    <Link to="/app/dashboard">
                        <ListItem disablePadding >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ConnectedTvIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    {/* <ListItem disablePadding >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Link to="/app/portfolio">
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 25, width: 25 }}
                                        component="img"
                                        image={DbIcon}
                                        alt="Live from space album cover"
                                    />
                                </ListItemIcon>
                            </Link>
                            <ListItemText primary={"Portfolio"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem> */}
                    <Link to="/app/traders">
                        <ListItem disablePadding >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Patient"} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    {/* <ListItem disablePadding >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <Link to="/app/settings">
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SettingsIcon />
                                </ListItemIcon>
                            </Link>
                            <ListItemText primary={"Settings"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem> */}
                    <Divider />
                </List>
                <List sx={{ paddingTop: 55 }}>
                    <Divider />
                    <ListItem disablePadding >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Log out"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>

                <DrawerHeader sx={{ paddingTop: 10 }}>
                    <IconButton onClick={handleDrawer}>
                        {theme.direction === 'rtl' ? <SwapHorizIcon /> : <SwapHorizIcon />}
                    </IconButton>
                </DrawerHeader>
            </Drawer>
        </>
    );
}

export default Siderbar;