import axios from "axios";

const url = 'http://localhost:5000/page';

export const fetchData = () => axios.get(url);
export const createData = (newCusData) => axios.post(url, newCusData);
export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData);
export const deleteData = (id) => axios.delete(`${url}/${id}`);