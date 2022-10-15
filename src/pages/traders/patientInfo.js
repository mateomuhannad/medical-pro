import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField, Dialog } from '@mui/material';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import OutlinedInput from '@mui/material/OutlinedInput';

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
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';


// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 5 + 8,
            width: 300,
        },
    },
};

const LocationTool = {
    PaperProps: {
        style: {
            maxHeight: 48 * 10 + 8,
            width: 200,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function getPhStyles(name, PharmacieNames, theme) {
    return {
        fontWeight:
            PharmacieNames.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Traders = () => {
    const theme = useTheme();

    const [contactInfo, setContactInfo] = React.useState(10);

    const contactChange = (event) => {
        setContactInfo(event.target.value);
    };

    const [insoneNum, setInsoneNum] = React.useState(1);

    const insOne = (event) => {
        setInsoneNum(event.target.value);
    };

    const [instowNum, setInstowNum] = React.useState(1);

    const instow = (event) => {
        setInstowNum(event.target.value);
    };

    const [insthreeNum, setInsthreeNum] = React.useState(1);

    const insthree = (event) => {
        setInsthreeNum(event.target.value);
    };

    const [weightValue, setWeightValue] = React.useState(222);
    const [fitValue, setFitValue] = React.useState(3);
    const [inchValue, setInchValue] = React.useState(4);
    const names = [
        'Allergy1',
        'Allergy2',
        'Allergy3',
        'Allergy4',
        'Allergy5',
        'Allergy6',
        'Allergy7',
    ];
    const PharmacieNames = [
        'Pharmacy1',
        'Pharmacy2',
        'Pharmacy3',
        'Pharmacy4',
    ]

    const [personName, setPersonName] = React.useState([]);
    const [phramacieperson, setPhramacieperson] = React.useState([]);

    const AllergiesChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const PharmacieChange = (event) => {
        const {
            target: { value },
        } = event;
        setPhramacieperson(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const [CrclInfo, setCrclInfo] = React.useState([1]);

    const CrclChange = (event) => {
        const {
            target: { value },
        } = event;
        setCrclInfo(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [BmiInfo, setBmiInfo] = React.useState([1]);

    const bmiChange = (event) => {
        const {
            target: { value },
        } = event;
        setBmiInfo(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [locationValue, setLocation] = React.useState([1]);

    const locationChange = (event) => {
        const {
            target: { value },
        } = event;
        setLocation(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [oldnoteValue, setOldnote] = React.useState([1]);

    const oldnoteChange = (event) => {
        const {
            target: { value },
        } = event;
        setOldnote(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [complateValue, setComplate] = React.useState([1]);

    const complateChange = (event) => {
        const {
            target: { value },
        } = event;
        setComplate(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [modelopen, setModelOpen] = React.useState(false);
    const handleModelOpen = () => setModelOpen(!modelopen);


    const questionAnswer = [
        {
            'question': 'Chief Complaint',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsum, dolores dolor sint nam provident autem. Quidem adipisci quasi unde tenetur natus ipsa ullam, eaque veniam eius delectus excepturi perferendis.'
        },
        {
            'question': 'History of Present Illness',
            'answer': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia nemo et nihil ad, molestiae neque quisquam suscipit, repellat saepe odio necessitatibus provident consequatur. Eaque velit ipsam doloremque neque quos.'
        },
        {
            'question': 'Past Medical History',
            'answer': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere ad et blanditiis mollitia nisi nihil veniam facilis! Mollitia iure officia tempore ratione ad dolorem. Voluptates rem unde incidunt nulla?'
        },
        {
            'question': 'Past Surgical History',
            'answer': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt dignissimos recusandae sint minus fugiat maxime rerum in quibusdam voluptas, aliquid, distinctio pariatur. Error illo tempore consequatur voluptate, sapiente autem?'
        },
        {
            'question': 'Medications',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        },
        {
            'question': 'Family History',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        },
        {
            'question': 'Social History',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        }
    ]
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
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>DOB:</Typography><Typography sx={{ color: 'rgb(130 171 183/1)' }}>11.24.1950</Typography>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>Demo:</Typography><Typography sx={{ color: 'rgb(130 171 183/1)' }}>58 y/o white male</Typography>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>Contact:</Typography>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={contactInfo}
                                            onChange={contactChange}
                                            MenuProps={MenuProps}
                                            sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                        >
                                            <MenuItem value={10}>H: (859) 647-2947</MenuItem>
                                            <MenuItem value={20}>W: 72342342342</MenuItem>
                                            <MenuItem value={30}>M: (285) 592-2235</MenuItem>
                                        </Select>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>Emergency:</Typography><Typography sx={{ color: 'rgb(130 171 183/1)' }}>Select preferred contact</Typography>
                                    </Stack>
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
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={insoneNum}
                                    onChange={insOne}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                2° ins:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={instowNum}
                                    onChange={instow}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                3° ins:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={insthreeNum}
                                    onChange={insthree}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <Stack sx={{ paddingTop: 4 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Allergies:
                                <FormControl sx={{ width: 300, mt: 3, height: 50, margin: '0px' }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={personName}
                                        onChange={AllergiesChange}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>NKDA</em>;
                                            }
                                            return selected.join(', ');
                                        }}
                                        sx={{ height: '30px', color: 'rgb(130 171 183/ 1)' }}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Pharmacies:
                                <FormControl sx={{ width: 270, mt: 3, height: 50, margin: '0px' }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={phramacieperson}
                                        onChange={PharmacieChange}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Select Pharmacies</em>;
                                            }
                                            return selected.join(', ');
                                        }}
                                        sx={{ height: '30px', color: 'rgb(130 171 183/ 1)' }}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {PharmacieNames.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getPhStyles(name, phramacieperson, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Providers:
                                John Smith, M.D. (Internal Medicine)
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <Stack sx={{ paddingTop: 4 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Weight:
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    size="small"
                                    value={weightValue}
                                    onChange={(e) => { setWeightValue(e.target.value) }}
                                    sx={{ width: '100px', marginTop: -1 }}
                                    InputLabelProps={{
                                    }}
                                />lbs /
                                ({Math.floor(weightValue * 0.454)} kg)
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', marginTop: 2 }}>
                                Height:
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    size="small"
                                    value={fitValue}
                                    onChange={(e) => { setFitValue(e.target.value) }}
                                    sx={{ width: '70px', marginTop: -1 }}

                                />ft
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    size="small"
                                    value={inchValue}
                                    onChange={(e) => { setInchValue(e.target.value) }}
                                    sx={{ width: '60px', marginTop: -1 }}
                                />in /
                                ({Math.floor((fitValue * 30.48) + (inchValue * 2.54))} cm)
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                CrCl:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={CrclInfo}
                                    onChange={CrclChange}
                                    MenuProps={MenuProps}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}> Stage 1 CrCl {'>'} 90</MenuItem>
                                    <MenuItem value={2}> Stage 2 CrCl 60-89</MenuItem>
                                    <MenuItem value={3}> Stage 3 CrCl 30-59</MenuItem>
                                    <MenuItem value={4}> Stage 4 CrCl 15-29</MenuItem>
                                    <MenuItem value={5}> Stage 5 CrCl {'<'}15</MenuItem>
                                    <MenuItem value={6}> Stage 6 End Stage Renal Disease</MenuItem>
                                </Select>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                BMI:
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={BmiInfo}
                                    onChange={bmiChange}
                                    MenuProps={MenuProps}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}> Underweight (R63.6) – BMI {'<'}19 </MenuItem>
                                    <MenuItem value={2}> Ideal – 19 - 24</MenuItem>
                                    <MenuItem value={3}> Overweight (E66.3) – BMI 25 - 30</MenuItem>
                                    <MenuItem value={4}> Obesity (E66.09) – BMI 30 - 40</MenuItem>
                                    <MenuItem value={5}> Morbid obesity (E66.01) – BMI {'>'} 40</MenuItem>

                                </Select>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={1} p={2}>
                    <Grid item lg={9} md={8} xs={12} >
                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} p={2}>
                            <Stack direction={'row'} spacing={1} justifyContent={{ xs: 'space-between' }} flexWrap={{ xs: 'wrap' }}>
                                <Button variant="outlined" startIcon={<PinDropIcon />}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={locationValue}
                                        onChange={locationChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 130, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>LOCATION </MenuItem>
                                        <MenuItem value={2}>OFFICE</MenuItem>
                                        <MenuItem value={3}> PERSONAL</MenuItem>
                                        <MenuItem value={4}>CARE HOME</MenuItem>
                                        <MenuItem value={5}>HOSPITAL</MenuItem>
                                        <MenuItem value={6}>NURSING HOME </MenuItem>
                                        <MenuItem value={7}>HOME</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<NoteAddIcon />} >ADD NOTE</Button>
                                <Button variant="outlined" startIcon={<SubjectIcon />} >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={oldnoteValue}
                                        onChange={oldnoteChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 130, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>OLD NOTES </MenuItem>
                                        <MenuItem value={2}>Last 1st note</MenuItem>
                                        <MenuItem value={3}> Last 2st note</MenuItem>
                                        <MenuItem value={4}>Last 3st note</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<NoteIcon />} onClick={handleModelOpen} >TYPE OF NOTE</Button>
                                <Button variant="outlined" startIcon={<SaveIcon />} >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={complateValue}
                                        onChange={complateChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 180, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>SAVE COMPLATE </MenuItem>
                                        <MenuItem value={2}>SAVE INCOMPLATE</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<PreviewIcon />} onClick={handleModelOpen} >PREVIEW</Button>
                                <Button variant="outlined" startIcon={<SendIcon />} >SEND</Button>
                                <Button variant="outlined" startIcon={<BackupTableIcon />} >TEMPLATE</Button>
                                {/* <Button variant="outlined" startIcon={<CalendarMonthIcon />} sx={{ height: '40px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                            value={dateValue}
                                            onChange={(newValue) => {
                                                setDatevalue(newValue);
                                            }}
                                            padding={0}
                                            renderInput={(params) => <TextField sx={{ width: '160px', padding: 0 }} {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Button> */}
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

            <Dialog
                open={modelopen}
                onClose={handleModelOpen}
            >
                <Card sx={{ bgcolor: '#013644', border: 'none', overflow: 'auto' }}>
                    <Stack direction={"row"} justifyContent={'center'} sx={{ paddingTop: 5 }}>
                        <Typography gutterBottom component="div" variant='h6' sx={{ lineHeight: '1.75rem' }}>
                            History & Physical
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} p={5}>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 5 }}>
                            name: Kirkland Dodson

                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            location: Heritage Health Care
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            date: 07/17/2014
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            provider:
                        </Typography>
                        {questionAnswer.map((index, i) => {
                            return (
                                <Stack key={i}>
                                    <Typography variant='h6' sx={{ paddingLeft: 3, paddingTop: 2 }}>
                                        {index.question}
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 5 }}>
                                        {index.answer}
                                    </Typography>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Card>
            </Dialog>

        </>
    );
}

export default Traders;