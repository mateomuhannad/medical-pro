import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
// import CardImg from '../../assets/css/download.png';
import { Stack } from '@mui/system';
import { Dialog, Divider, Switch } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileSide from '../Sidebar/mobile';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import UserImg from '../../assets/img/team-4-800x800.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import PhoneIcon from '@mui/icons-material/Phone';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#013644',
    '&:hover': {
        borderColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    border: '1px solid rgba(0,112,142,.75)'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0d191c'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#0d191c',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
}));
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function MiniDrawer() {
    const [sideOpen, setSideOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setSideOpen(!sideOpen);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [modelopen, setModelOpen] = React.useState(false);
    const handleModelOpen = () => setModelOpen(!modelopen);
    const [fullWidthOne, setFullWidthOne] = React.useState(true);
    const [fullWidthTwo, setFullWidthTwo] = React.useState(true);
    const [fullWidthThree, setFullWidthThree] = React.useState(true);
    const [fullWidthFour, setFullWidthFour] = React.useState(true);
    const [fullWidthFive, setFullWidthFive] = React.useState(true);

    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: '#004b5f !important' }} open={sideOpen}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ display: { lg: 'none', md: 'none', xs: 'block' } }}
                    >
                        {!sideOpen ? <MenuIcon /> : <CloseIcon />}

                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { lg: 'block', md: 'block', xs: 'none' } }} >
                        {/* <CardMedia
                            sx={{ height: 30, width: 30 }}
                            component="img"
                            image={CardImg}
                            alt="Live from space album cover"
                            onClick={() => { window.location.href = "" }}
                        /> */}
                        Medical Pro
                    </Typography>
                    <Stack spacing={2} direction="row">
                        {/* {!sideOpen && <NotificationsIcon sx={{ cursor: 'pointer' }} onClick={handleModelOpen} />} */}
                        {/* <Button variant="text">Brandy Hand</Button> */}
                        <CardHeader
                            sx={{ cursor: 'pointer' }}
                            avatar={
                                <Avatar sx={{ bgcolor: 'white', width: '2.5rem', height: '2.5rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 50, width: 50 }}
                                        component="img"
                                        image={UserImg}
                                        alt="Live from space album cover"
                                    />
                                </Avatar>
                            }
                            title={<Typography gutterBottom component="div" >
                                Jhon Mateo
                            </Typography>}
                            onClick={handleClick}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Realized Gains</MenuItem>
                            <MenuItem onClick={handleClose}>Unrealized Gains</MenuItem>
                            <MenuItem onClick={handleClose}>Setting</MenuItem>
                            <MenuItem onClick={handleClose}>My Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
                {sideOpen && <><MobileSide />
                    <MenuIcon sx={{
                        zIndex: 10000,
                        marginLeft: 240,
                        marginTop: -27
                    }} /></>}
                <Dialog
                    maxWidth={'xs'}
                    open={modelopen}
                    onClose={handleModelOpen}
                >
                    <Card sx={{ bgcolor: '#013644', border: 'none' }}>

                        {/* <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}> */}
                        <Stack direction={"row"} justifyContent={'center'} sx={{ paddingTop: 5 }}>
                            <Typography gutterBottom component="div" variant='h6' sx={{ lineHeight: '1.75rem' }}>
                                Set Up Notifications
                            </Typography>

                        </Stack>
                        <Divider sx={{ paddingTop: 5, borderBottom: 4, borderColor: "#013644" }} />
                        <Stack direction={"column"} p={5}>
                            <Search>
                                <SearchIconWrapper>
                                    <PhoneIcon sx={{ fontSize: 16 }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="+55 555-555-555"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 5 }}>
                                Desktop Notifications
                                <Switch sx={{ float: 'right' }} checked={fullWidthOne} onChange={() => { setFullWidthOne(!fullWidthOne) }} />
                            </Typography>
                            <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                                SMS Notifications
                                <Switch sx={{ float: 'right' }} checked={fullWidthTwo} onChange={() => { setFullWidthTwo(!fullWidthTwo) }} />
                            </Typography>
                            <Divider sx={{ paddingTop: 2 }} />
                            <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                                Squawk Notifications
                                <Switch sx={{ float: 'right' }} checked={fullWidthThree} onChange={() => { setFullWidthThree(!fullWidthThree) }} />
                            </Typography>
                            <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                                Trader Buy Notifications
                                <Switch sx={{ float: 'right' }} checked={fullWidthFour} onChange={() => { setFullWidthFour(!fullWidthFour) }} />
                            </Typography>
                            <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                                Trader Sell Notification
                                <Switch sx={{ float: 'right' }} checked={fullWidthFive} onChange={() => { setFullWidthFive(!fullWidthFive) }} />
                            </Typography>
                        </Stack>
                    </Card>
                </Dialog>
            </AppBar>
        </>
    );
}
