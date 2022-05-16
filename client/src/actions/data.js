import * as api from '../api';

export const getData = () => async (dispatch) => {

    try {

        const { data } = await api.fetchData();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch(error){
        console.log(error.message);
    }
}

export const createData = (newCusData) => async (dispatch) => {

    try {

        const { data } = await api.createData(newCusData);
        dispatch({type: 'CREATE', payload: data});

    } catch(error){
        console.log(error);
    }
}

export const updateData = (id, editData) => async (dispatch) => {
  try {
    const { data } = await api.updateData(id, editData);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await api.deleteData(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
