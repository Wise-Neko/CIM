import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    name: String,
    gender: String,
    age: String,
    email: String,
    location: String,
    jobTitle: String,
    income: String,
    dateJoined: {type: Date, default: new Date()}
});

const data = mongoose.model('data', dataSchema)

export default data;