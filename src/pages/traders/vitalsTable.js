import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const rowStyle = [
    { width: '150px', border: '1px solid', borderColor: "#90caf980", borderRadius: 1 }
]
const columnStyle = [
    { width: '65px', border: '1px solid', borderColor: "#90caf980", borderRadius: 1 }
]

let rows = [];
export default function BasicTable() {
    const [state, setState] = useState(false);
    let current = new Date();
    let current_day = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let current_time = current.getHours() + ':' + current.getMinutes();
    const [vitals, setVitals] = useState({
        date: current_day,
        time: current_time,
        BpOne: '0',
        BpTwo: '0',
        Pluse: '0',
        resp: '0',
        Temp: '0',
        ftHeight: '3',
        inHeight: '4',
        weightSetVal: '222',
        BMI: '0',
        PluseOX: '96'
    });

    const rowPush = () => {
        setState(!state);
    }

    const columnPush = () => {
        setVitals({ ...vitals });
        vitalsChange();
    }

    const [heightVal, setHeightVal] = useState([1]);

    const heightChange = (event) => {
        const {
            target: { value },
        } = event;
        setHeightVal(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const vitalsChange = () => {
        rows.push(vitals);
    }

    useEffect(() => {
        let val = (
            [Number(Math.floor(vitals.weightSetVal * 0.454)) / Number(Math.floor((vitals.ftHeight * 30.48) + (vitals.inHeight * 2.54))) / Number(Math.floor((vitals.ftHeight * 30.48) + (vitals.inHeight * 2.54)))] * 10000
        ).toFixed(1);
        setVitals((prevState) => ({
            ...prevState,
            BMI: val
        }))
    }, [vitals.weightSetVal, vitals.ftHeight, vitals.inHeight]);


    return (
        <TableContainer component={Paper} sx={{ width: '100%' }}>
            <Table sx={{ width: '100%', bgcolor: '#003847' }}>
                <TableHead>
                    <TableRow >
                        <TableCell align="center" sx={{ fontSize: 30, cursor: 'pointer' }} onClick={rowPush}>{state ? '-' : '+'}</TableCell>
                        <TableCell align="center">BP</TableCell>
                        <TableCell align="center">Pulse</TableCell>
                        <TableCell align="center">Resp</TableCell>
                        <TableCell align="center">Temp</TableCell>
                        <TableCell align="center" >Height</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell align="center">BMI</TableCell>
                        <TableCell align="center">Pulse ox(%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state &&
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ display: 'flex' }}>
                                <Button variant="outlined" onClick={columnPush}> SAVE</Button>
                                <Stack spacing={1} >
                                    <TextField id="outlined-number" defaultValue={current_time} onChange={(e) => { setVitals({ ...vitals, date: e.target.value }) }} type="time" size="small" sx={rowStyle} />
                                    <TextField id="outlined-number" defaultValue={current_day} onChange={(e) => { setVitals({ ...vitals, time: e.target.value }) }} type="date" size="small" sx={rowStyle} />
                                </Stack>
                            </TableCell>

                            <TableCell align="center" >
                                <Stack spacing={1}>
                                    <TextField value={vitals.BpOne} onChange={(e) => { setVitals({ ...vitals, BpOne: e.target.value }) }} size="small" sx={columnStyle} />
                                    <TextField value={vitals.BpTwo} onChange={(e) => { setVitals({ ...vitals, BpTwo: e.target.value }) }} size="small" sx={columnStyle} />
                                </Stack>
                            </TableCell>
                            <TableCell align="center"><TextField value={vitals.Pluse} onChange={(e) => { setVitals({ ...vitals, Pluse: e.target.value }) }} size="small" sx={columnStyle} /></TableCell>
                            <TableCell align="center"><TextField value={vitals.resp} onChange={(e) => { setVitals({ ...vitals, resp: e.target.value }) }} size="small" sx={columnStyle} /></TableCell>
                            <TableCell align="center"><TextField value={vitals.Temp} onChange={(e) => { setVitals({ ...vitals, Temp: e.target.value }) }} size="small" sx={columnStyle} /></TableCell>
                            <TableCell align="center"><Stack spacing={1} direction="row" alignItems={'center'}>
                                <TextField value={vitals.ftHeight} onChange={(e) => { setVitals({ ...vitals, ftHeight: e.target.value }) }} size="small" sx={columnStyle} />
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={heightVal}
                                    onChange={heightChange}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>ft</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                </Select>
                                <TextField value={vitals.inHeight} onChange={(e) => { setVitals({ ...vitals, inHeight: e.target.value }) }} size="small" sx={columnStyle} />
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={heightVal}
                                    onChange={heightChange}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0, display: 'flex', justifyContent: 'center' }}
                                >
                                    <MenuItem value={1}>in</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                </Select>
                            </Stack></TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} direction={"row"} alignItems={'center'}>
                                    <TextField value={vitals.weightSetVal} onChange={(e) => { setVitals({ ...vitals, weightSetVal: e.target.value }) }} size="small" sx={columnStyle} />
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={heightVal}
                                        onChange={heightChange}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>lbs</MenuItem>
                                        <MenuItem value={2}>kg</MenuItem>
                                    </Select>
                                </Stack>
                            </TableCell>
                            <TableCell align="center"><TextField value={vitals.BMI} size="small" sx={columnStyle} /></TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} direction={'row'}>
                                    <TextField value={vitals.PluseOX} onChange={(e) => { setVitals({ ...vitals, PluseOX: e.target.value }) }} size="small" sx={columnStyle} />
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={heightVal}
                                        onChange={heightChange}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>room air</MenuItem>
                                        <MenuItem value={2}>kg</MenuItem>
                                    </Select>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    }
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Stack direction={'row'} justifyContent={'center'} >
                                    <Typography>{row.time}</Typography>
                                    &nbsp;&nbsp;
                                    <Typography>{row.date}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell align="center" >
                                <Stack spacing={1} direction={'row'} justifyContent={'center'} >
                                    <Typography>{row.BpOne}</Typography>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Typography>{row.BpTwo}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell align="center"><Typography >{row.Pluse}</Typography> </TableCell>
                            <TableCell align="center"><Typography >{row.resp}</Typography></TableCell>
                            <TableCell align="center"><Typography > {row.Temp}</Typography></TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} direction="row" a justifyContent={'center'} l ignItems={'center'}>
                                    <Typography  >{row.ftHeight}</Typography>
                                    &nbsp; &nbsp; ft
                                    <Typography >{row.inHeight}</Typography>
                                    &nbsp; &nbsp; in
                                </Stack>
                            </TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} direction={"row"} justifyContent={'center'} alignItems={'center'}>
                                    <Typography > {row.weightSetVal} </Typography>
                                    &nbsp; &nbsp; lbs
                                </Stack>
                            </TableCell>
                            <TableCell align="center"><Typography >{row.BMI}</Typography> </TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} direction={'row'} justifyContent={'center'} >
                                    <Typography>{row.PluseOX} </Typography>
                                    &nbsp; &nbsp;   room air
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
