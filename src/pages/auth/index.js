import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



import OutlinedInput from '@mui/material/OutlinedInput';

import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';


const Auth = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (data) => {
        if (data === 'one') {
            setValue(data);
        }
        else {
            setValue(data);
        }
    };

    return (
        <Grid container className='display-wrap'>
            <Grid item xs={12} lg={6} md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <Stack>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            <Link href="/app/traders">
                                <CardMedia
                                    sx={{ height: 40, width: 40 }}
                                    component="img"
                                    image="download.png"
                                    alt="Live from space album cover"
                                />
                            </Link>
                        </Typography>
                    </CardContent>
                </Stack>
                {value === 'one' ? <>
                    <Stack sx={{ justifyContent: "center" }} direction={"row"} alignItems={"center"} textAlign="center">
                        <Grid item xs={10} lg={5} md={5}>
                            <Stack direction={"row"}>
                                <Typography variant='h5'>Sign Up</Typography>
                            </Stack>
                            <br />
                            <Stack direction={"row"}>
                                <Grid xs={12} lg={12} md={12} item>
                                    <Stack direction={"row"} sx={{ width: "100%" }}>
                                        <Typography>I am a</Typography>
                                    </Stack>
                                    <Stack direction={"row"}>
                                        <Grid xs={12} lg={12} md={12} item textAlign={"left"}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="
Investor looking to follow traders" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="
Trader looking to earn passive income" />
                                        </Grid>
                                    </Stack>

                                    <Stack direction={"row"}>
                                        <Grid sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1px"
                                        }} textAlign={"left"} xs={12} lg={12} md={12} item>
                                            <Typography>Username</Typography>
                                            <OutlinedInput sx={{ width: "100%" }} size="small"
                                                id="outlined-adornment-password"
                                                type={'text'}
                                                startAdornment={
                                                    <PersonIcon />
                                                }
                                                label=""
                                                placeholder="Choose a username"
                                            />
                                            <br />
                                            <Button variant="outlined" sx={{ width: "100%" }}>Select Wallet</Button>
                                        </Grid>

                                    </Stack>
                                </Grid>
                            </Stack>



                        </Grid>

                    </Stack>
                    <Stack sx={{ justifyContent: "center" }} direction={"row"} alignItems={"center"} textAlign="center">
                        <Grid item xs={10} lg={5} md={5}>
                            <Button variant="contained" color="success" sx={{ width: "100%", cursor: 'no-drop', opacity: .7 }}  >Create account</Button>
                            <Stack marginTop={2} gap={2}>
                                <Typography>We require you to connect your wallet<br /> to gather accurate data.</Typography><br />
                                <Typography>Already have an account?<Link href="#" underline="none" onClick={() => { handleChange('two') }}> Sign In</Link></Typography>
                            </Stack>
                        </Grid>
                    </Stack>

                </>
                    :
                    <>
                        <Stack sx={{ height: "50vh", justifyContent: "center" }} direction={"row"} alignItems={"center"} textAlign="center">
                            <Grid item xs={10} lg={5} md={5}>
                                <Stack direction={"row"}>
                                    <Typography variant='h6'>Sign In</Typography>
                                </Stack>
                                <Stack direction={"row"} sx={{ paddingTop: 5 }}>
                                    <Grid xs={12} lg={12} md={12} item>
                                        <Button variant="outlined" sx={{ width: "100%" }}>Select Wallet</Button>
                                    </Grid>
                                </Stack>
                                <Stack direction={"row"} sx={{
                                    width: "100%", display: 'flex',
                                    justifyContent: 'center',
                                    paddingTop: 5
                                }} >
                                    <Typography>New to Parrot?<Link href="#" underline="none" onClick={() => { handleChange('one') }}> Sign Up</Link></Typography>
                                </Stack>
                            </Grid>
                        </Stack>
                    </>
                }
                <Stack sx={{ justifyContent: "space-evenly" }} alignItems={"center"} textAlign="center">
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={value}
                            aria-label="wrapped label tabs example"
                        >
                            <Tab
                                value="one"
                                label="Sign Up"
                                sx={{ width: '50%' }}
                                onClick={() => { handleChange('one') }}
                            />
                            <Tab value="two" label="Sign In" sx={{ width: '50%' }} onClick={() => { handleChange('two') }} />
                        </Tabs>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sx={{ display: { xs: 'none', lg: 'block', md: 'block' } }}>
                <CardMedia
                    component="img"
                    image="icebergslim.png"
                    alt="Live from space album cover"
                />
            </Grid>
        </Grid >
    );
}

export default Auth;
