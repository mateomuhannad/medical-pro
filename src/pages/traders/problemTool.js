import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Dialog, TextField, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Editor from './editor';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

const TransferList = () => {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        },
        {
            title: 'ICD10codes database',
        }
    ]);
    const [right, setRight] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    // const [searchInput, setSearchInput] = React.useState('');
    // const [filteredResults, setFilterResults] = React.useState('');
    const searchItems = (searchValue, items) => {
        // let filterData = [];
        // setSearchInput(searchValue)
        // filterData = right.filter((item) => {
        //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
        // setLeft(filterData);
    }
    const [editorstate, setModelEditor] = React.useState(false);
    const handleEditor = () => setModelEditor(!editorstate);

    const customList = (title, items) => (
        <Card>
            <Stack direction={"row"} alignItems={'center'} sx={{ bgcolor: '#004b5f' }}>
                <CardHeader
                    sx={{ px: 2, py: 1, bgcolor: 'rgb(0 75 95/1)' }}
                    avatar={
                        <Checkbox
                            onClick={handleToggleAll(items)}
                            checked={numberOfChecked(items) === items.length && items.length !== 0}
                            indeterminate={
                                numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                            }
                            disabled={items.length === 0}
                            inputProps={{
                                'aria-label': 'all items selected',
                            }}
                        />
                    }
                    title={title}
                    subheader={`${numberOfChecked(items)}/${items.length} selected`}
                />
                {title === 'Problems' &&
                    <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", padding: 1, paddingTop: 0 }}>
                        <TextField
                            id="outlined-number"
                            size="small"
                            placeholder='serarch'
                            onChange={(e) => searchItems(e.target.value, title)}
                        />
                    </Typography>
                }
            </Stack>
            <Divider />
            <List
                sx={{
                    width: 430,
                    height: 370,
                    bgcolor: 'rgb(0 75 95 / 1) ',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {
                    items.map((value) => {
                        const labelId = `transfer-list-all-item-${value}-label`;

                        return (
                            <ListItem
                                key={value}
                                role="listitem"
                                button
                                onClick={handleToggle(value)}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value.title} />
                            </ListItem>
                        );
                    })
                }
                <ListItem />
            </List>
        </Card>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList('Problems', left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleEditor}
                        aria-label="move selected left"
                    >
                        <TextFieldsIcon />
                    </Button>

                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Tooltip title={
                        <>
                            <Typography sx={{ color: '#31b8df' }}>DAD:</Typography>
                            <Typography sx={{ color: 'rgb(130 171 183/1)' }}> Each Individual Problem:
                                --Problem status:  acute, active, chronic
                                *Acute - problems to be addressed.  If data entered in subjective section then 	automatically acute OR may click on
                                --Brief and comprehensive views
                                --DAD hover over
                                --No up/down arrows as problems can be moved for drag and drop
                                --"X" to the far right to delete the problem (only for problem entered in error).  Will need confirmation to delete.
                                --SOAP horizontally (free text box)
                                --Plan vertically w/ the following elements:  labs, imaging, medications, referrals, nursing, instructions (handouts and follow-up), misc
                                --Icon somewhere for macro (upper right of macro probably ideal) in all sections
                                --Comprehensive view is advanced text editor
                                --Objective section:  macro (gear), flowsheet (spreadsheet), calculator (calculator), </Typography>
                        </>
                    }>

                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            aria-label="move selected right"
                        >
                            <MessageIcon />
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid >
            <Grid item>{customList('pathological symptoms', right)}</Grid>
            <Dialog
                open={editorstate}
                onClose={handleEditor}
            >
                <Card sx={{ bgcolor: '#013644', border: 'none', overflow: 'auto' }}>
                    <Editor />
                </Card>
            </Dialog>
        </Grid >
    );
}

export default TransferList;