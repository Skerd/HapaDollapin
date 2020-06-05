import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from './types';
import axios from 'axios';

                            //for async calls
export const getUsers = () => dispatch => {
    
    dispatch(setUsersLoading());
    axios
        .get('/api/users')
        .then( res => 
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )

    // return {
    //     type: GET_USERS
    // }
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}


