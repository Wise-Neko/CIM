import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getData } from './actions/data';
import DataTable from "./components/table/DataTable";
import Form from "./components/form/Form";
import useStyles from "./styles";

const App = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Customer Information Management </Typography>
            </AppBar>
            <Grow in>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <DataTable setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;