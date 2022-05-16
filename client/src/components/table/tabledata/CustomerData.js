import React, { useState } from "react";
import { Box, Container, AppBar, Typography, Grow, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import moment from 'moment';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteData } from "../../../actions/data";

const CustomerData = ({ data, setCurrentId }) => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{moment(data.dateJoined).format('YYYY-MM-DD')}</TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setCurrentId(data._id)}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => dispatch(deleteData(data._id))}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Information
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell>Email</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Job Title</TableCell>
                                        <TableCell>Income ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell>{data.email}</TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.jobTitle}</TableCell>
                                        <TableCell>{data.income}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default CustomerData;