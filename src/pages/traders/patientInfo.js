import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

import { Stack } from '@mui/system';


import UserImg from '../../assets/img/team-1-800x800.jpg';


import PinDropIcon from '@mui/icons-material/PinDrop';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SubjectIcon from '@mui/icons-material/Subject';
import NoteIcon from '@mui/icons-material/Note';
import SaveIcon from '@mui/icons-material/Save';
import PreviewIcon from '@mui/icons-material/Preview';
import SendIcon from '@mui/icons-material/Send';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const Traders = () => {

    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, paddingLeft: 2 }}>
                <Grid container spacing={7}>
                    <Grid item lg={4} md={6} xs={12}  >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'white', width: '10rem', height: '10rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 180, width: 180 }}
                                        component="img"
                                        image={UserImg}
                                        alt="Live from space album cover"
                                        onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                            }
                            title={
                                <Stack>
                                    <Typography gutterBottom variant='h6' sx={{ color: '#24c7f7', fontWeight: 700 }}>
                                        Brandy Hand (71 y/o WM)
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                        DOB:
                                        11.24.1950
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                        Contact:
                                        H: (377) 681-5234
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                        Emergency:
                                        Select preferred contact
                                    </Typography>
                                </Stack>
                            }
                        />
                    </Grid>
                    <Grid item lg={2} md={6} xs={12}>
                        <Stack sx={{ paddingTop: 4 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                DOLE:
                                01/21/2021
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                1° ins:
                                N/a
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                1° ins:
                                N/a
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                1° ins:
                                N/a
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={2} md={6} xs={12} >
                        <Stack sx={{ paddingTop: 4 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Allergies:
                                NKDA
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Pharmacies:
                                N/a
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Providers:
                                John Smith, M.D. (Internal Medicine)
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={2} md={6} xs={12} >
                        <Stack sx={{ paddingTop: 4 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Weight:
                                220.46 lbs (100 kg)
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Height:
                                5'9" (175.26 cm)
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                SeCr:
                                1 mg/dL
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                CrCl:
                                95.83 mL/min
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                BMI:
                                32.56 kg/m²
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={1} p={2}>
                    <Grid item lg={9} md={8} xs={12} >
                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} p={2}>
                            <Stack direction={'row'} spacing={1} justifyContent={{ xs: 'space-between' }} flexWrap={{ xs: 'wrap' }}>
                                <Button variant="outlined" startIcon={<PinDropIcon />}>LOCATION</Button>
                                <Button variant="outlined" startIcon={<NoteAddIcon />} >ADD NOTE</Button>
                                <Button variant="outlined" startIcon={<SubjectIcon />} >OLD NOTES</Button>
                                <Button variant="outlined" startIcon={<NoteIcon />} >TYPE OF NOTE</Button>
                                <Button variant="outlined" startIcon={<SaveIcon />} >SAVE COMPLATE</Button>
                                <Button variant="outlined" startIcon={<PreviewIcon />} >PREVIEW</Button>
                                <Button variant="outlined" startIcon={<SendIcon />} >SEND</Button>
                                <Button variant="outlined" startIcon={<BackupTableIcon />} >TEMPLATE</Button>
                                <Button variant="outlined" startIcon={<CalendarMonthIcon />} >DATE</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ marginTop: 4 }} >
                            <Stack>
                                <Grid container spacing={1}>
                                    <Grid item lg={3} md={4} xs={12} >
                                        <Box sx={{ border: '1px solid rgb(0 75 95/1)' }} p={2} >
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Chief Complaints</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>History of Present Illness</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Past Medical History</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Past Surgical History</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Medications</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Social History</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Family History</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Review of System</Typography>
                                            <Typography variant='h5' mb={2} sx={{ cursor: 'pointer' }}>Physical Exam</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={9} md={8} xs={12} >
                                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', height: '100%', display: 'flex', justifyContent: 'center' }} p={2} >
                                            <Typography>Problems Toolbar</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} xs={12}>
                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', height: '100%', width: '100%' }} p={2}>
                            <Typography>New Orders</Typography>
                            <Typography>   Current Orders</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>



        </>
    );
}

export default Traders;