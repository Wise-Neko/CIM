import React from "react";
import { CircularProgress, Box, Container, AppBar, Typography, Grow, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

import CustomerData from './tabledata/CustomerData';

const DataTable = ({ setCurrentId }) => {

    const data = useSelector((state) => state.data);

    return (
        !data.length ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Date Joined</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? data.map((data) => (
                            <CustomerData key={data._id} data={data} setCurrentId={setCurrentId} />
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        ));
}

export default DataTable;