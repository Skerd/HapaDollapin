import { GET_ERRORS, CLEAR_ERRORS } from './types';

// RETURN ERRORS

export const returnErrors = (title, body, status, id=null) => {
    console.log(title);
    console.log(body);
    console.log(status);
    console.log(id);
    return{
        type: GET_ERRORS, //call error and put everything below into state
        payload: {title, body, status, id}
    }
}

// Clear Errors

export const clearErrors = () => {
    return{
        type: CLEAR_ERRORS
    }
}


