import axios from 'axios';
import {GET_ERRORS} from './types';



export const subscribeUser = (email) => dispatch => {
    axios
    .post('/api/newsletter', email).then(res => {
        console.log(res.data); 
       })
       .catch(error => dispatch({
         type: GET_ERRORS,
         payload: error.response.data
       }))  
}; 
