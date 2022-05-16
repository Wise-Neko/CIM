export default (data = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...data, action.payload];

        case 'UPDATE':
            return data.map((data) => (data._id === action.payload._id ? action.payload : data));

        case 'DELETE':
            return data.filter((data) => data._id !== action.payload);

        default:
            return data;
    }
}