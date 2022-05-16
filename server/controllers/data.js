import mongoose from "mongoose";
import data from "../models/dataset.js";

export const getData = async (req, res) => {
    try {
        const dataset = await data.find();
        res.status(200).json(dataset);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createData = async (req, res) => {
    const newCusData = req.body;

    const newData = new data(newCusData);

    try {
        await newData.save();
        res.status(201).json(newData);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateData = async (req, res) => {
    const { id } = req.params;
    const { name, gender, age, email, location, jobTitle, income, dateJoined } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`);

    const updatedData = { name, gender, age, email, location, jobTitle, income, dateJoined, _id: id };

    await data.findByIdAndUpdate(id, updatedData, { new: true });

    res.json(updatedData);
}

export const deleteData = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await data.findByIdAndRemove(id);

    res.json({ message: "Data deleted successfully." });
}