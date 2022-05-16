import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";
import { createData, updateData } from "../../actions/data";

const Form = ({ currentId, setCurrentId }) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [data, setData] = useState({
        name: "",
        gender: "",
        age: "",
        email: "",
        location: "",
        jobTitle: "",
        income: "",
    });

    const dataset = useSelector((state) => (currentId ? state.data.find((name) => name._id === currentId) : null));

    useEffect(() => {
        if (dataset) setData(dataset);
    }, [dataset]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0 || currentId === null) {
            dispatch(createData(data));
            clear();
        } else {
            dispatch(updateData(currentId, data));
            clear();
        }
    };

    const clear = () => {
        setCurrentId(0);
        setData({ name: '', gender: '', age: '', email: '', location: '', jobTitle: '', income: '' });
    };

    return (
        <Paper>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> {currentId ? 'Editing' : 'Creating '} Customer Data </Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}></TextField>
                <TextField name="gender" variant="outlined" label="Gender" fullWidth value={data.gender} onChange={(e) => setData({ ...data, gender: e.target.value })}></TextField>
                <TextField name="age" variant="outlined" label="Age" fullWidth value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}></TextField>
                <TextField name="email" variant="outlined" label="Email" fullWidth value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}></TextField>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })}></TextField>
                <TextField name="jobTitle" variant="outlined" label="Job Title" fullWidth value={data.jobTitle} onChange={(e) => setData({ ...data, jobTitle: e.target.value })}></TextField>
                <TextField name="income" variant="outlined" label="Income" fullWidth value={data.income} onChange={(e) => setData({ ...data, income: e.target.value })}></TextField>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;