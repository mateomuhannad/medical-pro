import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

import Close from '@mui/icons-material/Close';

import UserImg from '../../assets/img/team-1-800x800.jpg';
import PatientInfoComponent from './patientInfo';


const patientNum = [];

const Traders = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const [patinetNumber, setPatientNumber] = React.useState(0);
    const [state, setState] = React.useState(true);
    const patientInfo = (num) => {
        var j = 0;
        patientNum.map((i, index) => {
            if (num === index) {
                j++;
            }
            return (
                <Box key={i}>

                </Box>
            )
        })
        if (j === 0) {
            patientNum.push(num);
        }

        setPatientNumber(num);
        setState(false);
    }

    const patientNab = (num) => {
        setPatientNumber(num);
    };

    const closePatientedit = (num) => {
        patientNum.splice(patientNum.indexOf(num), 1);
        setPatientNumber(0);
        setState(!state);
    }

    const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
        <>
            <DrawerHeader />
            <Box sx={{ paddingLeft: .1, paddingTop: .1 }}>
                <Button
                    sx={{ bgcolor: () => patinetNumber === 0 ? '#003847' : 'rgb(0 75 95/1)', color: 'rgb(130 171 183/1)', p: 3 }}
                >
                    <Typography onClick={() => { patientNab(0) }}>+NEW CHART</Typography>
                </Button>
                {patientNum.map((i, index) => {
                    return (
                        <Button
                            key={i}
                            sx={{ bgcolor: () => patinetNumber === patientNum[index] ? '#003847' : 'rgb(0 75 95/1)', color: 'rgb(130 171 183/1)', p: 3 }}
                        >
                            <Typography onClick={() => { patientNab(patientNum[index]) }}>Brandy Hand</Typography>
                            <Close onClick={() => closePatientedit(patientNum[index])} />
                        </Button>
                    )
                })}
                {/* <Button
                    onClick={handleClick}
                    sx={{ bgcolor: 'rgb(0 75 95/1)', color: '#007e58' }}
                    endIcon={<Close />}
                >
                    Avg Buy Price
                </Button> */}
            </Box>

            {patinetNumber === 0 ?
                <>
                    <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
                    </Box >
                    <Box component="main" sx={{ flexGrow: 1, paddingLeft: 5 }}>
                        <Grid container spacing={7}>
                            {userArray.map((i, index) => {
                                return (
                                    <Grid item lg={3} md={6} xs={12} key={i} >
                                        <Card sx={{ bgcolor: '#004b5f', minWidth: 330, maxWidth: 400 }} onClick={() => { patientInfo(i) }}>
                                            <CardHeader
                                                sx={{ cursor: 'pointer' }}
                                                avatar={
                                                    <Avatar sx={{ bgcolor: 'white', width: '3.5rem', height: '3.5rem' }} aria-label="recipe">
                                                        <CardMedia
                                                            sx={{ height: 65, width: 65 }}
                                                            component="img"
                                                            image={UserImg}
                                                            alt="Live from space album cover"
                                                        />
                                                    </Avatar>
                                                }
                                                title={<Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)' }}>
                                                    Brandy Hand
                                                </Typography>}
                                            />
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </>
                :
                <PatientInfoComponent />
            }

        </>
    );
}

export default Traders;