
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from '../actions/types';

const initialState = {
    usersat:[],
    loadingUsers: false
}


export default function(state = initialState, actionPerformed ){
    switch( actionPerformed.type ){
        case GET_USERS:
            //console.log(actionPerformed.payload);
            return{
                ...state,
                usersat: actionPerformed.payload,
                loadingUsers: false
            }
        case USERS_LOADING:
            return{
                ...state,
                loadingUsers: true
            }
        default: return state
    }
}








