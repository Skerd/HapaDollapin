
import{
    RECEIVE_MESSAGES,
    RECEIVED_MESSAGES
}
from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    receiver: null,
    allChat: {}
}

export default function( state= initialState, action){

    switch( action.type){
        case RECEIVE_MESSAGES:
            console.log("Chat Redux: RECEIVE_MESSAGES!");
            return{
                ...state,
                allChat: action.payload
            }
        case RECEIVED_MESSAGES:
            console.log("Chat Redux: Messages received!");
            return{
                ...state,
                allChat: action.payload
            }
        default: 
            return state;
    }
}

