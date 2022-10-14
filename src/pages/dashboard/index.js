import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// import Pagination from '@mui/material/Pagination';
// import CardHeader from '@mui/material/CardHeader';
// import Card from '@mui/material/Card';

import { Stack } from '@mui/system';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import CardMedia from '@mui/material/CardMedia';
// import CardImg from '../../assets/css/download.png';
// import SolanaTokenIcon from '../../assets/css/sol.svg';
// import MovingIcon from '@mui/icons-material/Moving';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#003847',
//         color: 'rgb(130 171 183/1)',
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     backgroundColor: '#004b5f',
//     border: 0,
// }));

// function createData(name, calories, fat, carbs, protein, loss) {
//     return { name, calories, fat, carbs, protein, loss };
// }

// const rows = [
//     createData(
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '2rem', height: '2rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 20, width: 20 }}
//                         component="img"
//                         image={CardImg}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>
//                     1.24 SOL
//                 </Typography>
//                 <Typography sx={{ fontSize: 10, bgcolor: '#18a8cf', width: '50px', borderRadius: 5, textAlign: 'center' }}>$40.30</Typography>
//             </>}
//         />,
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     0.97 SOL
//                 </Typography>
//             </>}
//         />,

//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     2.9 SOL
//                 </Typography>
//             </>}
//         />,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '1rem',
//         }} > 10 h ago</Typography>,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '14',
//         }} > elsir</Typography>,

//         <CardHeader
//             sx={{ padding: 0, color: 'rgb(5 176 125/1)' }}
//             avatar={
//                 <MovingIcon sx={{ color: 'rgb(5 176 125/1)', fontSize: 15 }} />
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>@ 1.93 SOL</Typography>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>($60.25)</Typography>
//             </>}
//         />),
//     createData(
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '2rem', height: '2rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 20, width: 20 }}
//                         component="img"
//                         image={CardImg}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>
//                     1.24 SOL
//                 </Typography>
//                 <Typography sx={{ fontSize: 10, bgcolor: '#05b07d', width: '50px', borderRadius: 5, textAlign: 'center' }}>$40.30</Typography>
//             </>}
//         />,
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     0.97 SOL
//                 </Typography>
//             </>}
//         />,

//         <CardHeader
//             sx={{ padding: 0 }}
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     - -
//                 </Typography>
//             </>}
//         />,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '1rem',
//         }} > 10 h ago</Typography>,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '14',
//         }} > elsir</Typography>,

//         <CardHeader
//             sx={{ padding: 0 }}
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}> - - </Typography>
//             </>}
//         />),
//     createData(
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '2rem', height: '2rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 20, width: 20 }}
//                         component="img"
//                         image={CardImg}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>
//                     1.24 SOL
//                 </Typography>
//                 <Typography sx={{ fontSize: 10, bgcolor: '#18a8cf', width: '50px', borderRadius: 5, textAlign: 'center' }}>$40.30</Typography>
//             </>}
//         />,
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     0.97 SOL
//                 </Typography>
//             </>}
//         />,

//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     2.9 SOL
//                 </Typography>
//             </>}
//         />,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '1rem',
//         }} > 10 h ago</Typography>,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '14',
//         }} > elsir</Typography>,

//         <CardHeader
//             sx={{ padding: 0, color: 'rgb(5 176 125/1)' }}
//             avatar={
//                 <MovingIcon sx={{ color: 'rgb(5 176 125/1)', fontSize: 15 }} />
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>@ 1.93 SOL</Typography>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>($60.25)</Typography>
//             </>}
//         />),
//     createData(
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '2rem', height: '2rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 20, width: 20 }}
//                         component="img"
//                         image={CardImg}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>
//                     1.24 SOL
//                 </Typography>
//                 <Typography sx={{ fontSize: 10, bgcolor: '#18a8cf', width: '50px', borderRadius: 5, textAlign: 'center' }}>$40.30</Typography>
//             </>}
//         />,
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     0.97 SOL
//                 </Typography>
//             </>}
//         />,

//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     2.9 SOL
//                 </Typography>
//             </>}
//         />,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '1rem',
//         }} > 10 h ago</Typography>,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '14',
//         }} > elsir</Typography>,

//         <CardHeader
//             sx={{ padding: 0, color: 'rgb(5 176 125/1)' }}
//             avatar={
//                 <MovingIcon sx={{ color: 'rgb(5 176 125/1)', fontSize: 15 }} />
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>@ 1.93 SOL</Typography>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>($60.25)</Typography>
//             </>}
//         />),
//     createData(
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '2rem', height: '2rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 20, width: 20 }}
//                         component="img"
//                         image={CardImg}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}>
//                     1.24 SOL
//                 </Typography>
//                 <Typography sx={{ fontSize: 10, bgcolor: '#05b07d', width: '50px', borderRadius: 5, textAlign: 'center' }}>$40.30</Typography>
//             </>}
//         />,
//         <CardHeader
//             sx={{ padding: 0 }}
//             avatar={
//                 <Avatar sx={{ bgcolor: 'white', width: '1.5rem', height: '1.5rem' }} aria-label="recipe">
//                     <CardMedia
//                         sx={{ height: 15, width: 15 }}
//                         component="img"
//                         image={SolanaTokenIcon}
//                         alt="Live from space album cover"
//                         onClick={() => { window.location.href = "" }}
//                     />
//                 </Avatar>
//             }
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     0.97 SOL
//                 </Typography>
//             </>}
//         />,

//         <CardHeader
//             sx={{ padding: 0 }}
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 13 }}>
//                     - -
//                 </Typography>
//             </>}
//         />,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '1rem',
//         }} > 10 h ago</Typography>,

//         <Typography sx={{
//             color: 'rgb(130 171 183/1)',
//             fontSize: '14',
//         }} > elsir</Typography>,

//         <CardHeader
//             sx={{ padding: 0 }}
//             title={<>
//                 <Typography gutterBottom component="div" sx={{ fontSize: 10 }}> - - </Typography>
//             </>}
//         />),

// ];

const Dashboard = () => {

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
            <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
                <Grid container>
                    <Grid item lg={8} md={8} xs={12} p={1}>
                        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                            <Stack spacing={1}>
                                <Stack direction={"row"}>
                                    <Typography gutterBottom component="div" variant='h4' sx={{ fontWeight: 700 }}>
                                        Dashboard
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography sx={{
                                        color: 'rgb(130 171 183/1)',
                                        fontSize: '1rem',
                                        lineHeight: '1.75rem'
                                    }} > Welcome Back, king 123!</Typography>
                                </Stack>
                                {/* <Stack direction={"row-reverse"}>
                                    <Button variant="contained" sx={{ width: '200px', bgcolor: '#08c28a', padding: '.5rem', borderRadius: '.5rem' }}>See Full Portfolio</Button>
                                </Stack> */}
                            </Stack>
                            {/* <Grid container spacing={1} sx={{ paddingTop: 2 }}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Card sx={{ bgcolor: '#004b5f', minWidth: 330, maxWidth: 500, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                                        <Typography p={1} sx={{ fontWeight: 700 }}>  TOTAL FLOOR VALUE</Typography>
                                    </Card>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Card sx={{ bgcolor: '#004b5f', minWidth: 330, maxWidth: 500, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                                        <Typography p={1} sx={{ fontWeight: 700 }}>  TOTAL FLOOR VALUE</Typography>
                                    </Card>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Card sx={{ bgcolor: '#004b5f', minWidth: 330, maxWidth: 500, minHeight: 240, maxHeight: 240, borderRadius: "10px", padding: 1 }}>
                                        <Typography p={1} sx={{ fontWeight: 700 }}>  TOTAL FLOOR VALUE</Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Stack paddingTop={2} paddingBottom={1} direction={'row'} justifyContent={'space-between'}>
                                <Grid container>
                                    <Grid item xs={12} lg={10} md={10}>
                                        <Typography sx={{ color: 'rgb(5 176 125/1)' }}>SUBSCRIBED TRADER ACTIVITIES</Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={2}>
                                        <Pagination variant="outlined" count={1} />
                                    </Grid>
                                </Grid>
                            </Stack>
                            <TableContainer component={Paper} sx={{ border: '1px solid #004b5f' }}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>ACTIVITY</StyledTableCell>
                                            <StyledTableCell >PURCHASE PRICE</StyledTableCell>
                                            <StyledTableCell >SOLD PRICE&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell >WEN(08:00 UTC)&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell >TRADER&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell >PROFIT/LOSS&nbsp;(g)</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell >{row.calories}</StyledTableCell>
                                                <StyledTableCell >{row.fat}</StyledTableCell>
                                                <StyledTableCell >{row.carbs}</StyledTableCell>
                                                <StyledTableCell >{row.protein}</StyledTableCell>
                                                <StyledTableCell >{row.loss}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */}
                        </Box>
                    </Grid>
                    {/* <Grid item lg={4} md={4} xs={12} p={1}>
                        <Card sx={{ bgcolor: '#004b5f', padding: 6, height: '100%' }}>
                            <Typography sx={{ color: 'rgb(5 176 125/1)' }}>SUBSCRIBED TRADER ACTIVITIES</Typography>
                            <CardHeader
                                sx={{ padding: 0, paddingTop: 4 }}
                                avatar={
                                    <Avatar sx={{ bgcolor: 'white', width: '3rem', height: '3rem' }} aria-label="recipe">
                                        <CardMedia
                                            sx={{ height: 30, width: 30 }}
                                            component="img"
                                            image={CardImg}
                                            alt="Live from space album cover"
                                            onClick={() => { window.location.href = "" }}
                                        />
                                    </Avatar>
                                }
                                title={<>
                                    <Typography gutterBottom component="div" sx={{ fontSize: 16 }}> elsir </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: 16, color: 'rgb(130 171 183/1)' }}><MovingIcon sx={{ color: 'rgb(5 176 125/1)', fontSize: 15 }} /> +39.67% Last Trade </Typography>
                                </>}
                            />
                            <Divider sx={{
                                paddingTop: 5
                            }} />
                        </Card>
                    </Grid> */}
                </Grid>
            </Box >
        </>
    );
}

export default Dashboard;