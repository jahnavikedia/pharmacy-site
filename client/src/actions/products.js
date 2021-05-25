import * as api from '../api'


export const createProduct = (product) => async (dispatch) => {
    try {
        console.log(product);
        const {data} = await api.createProduct(product);

        console.log(data);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}