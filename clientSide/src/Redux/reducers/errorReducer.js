import { GET_ERRORS, CLEAR_ERRORS  } from '../actions/types';

const initialState = {
    title: null,
    body: null,
    status: null,
    id: null
}

export default function(state = initialState, action ){
    switch(action.type){
        case GET_ERRORS:
            return {
                title: action.payload.title,
                body: action.payload.body,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return{
                title: null,
                body: null,
                status: null,
                id: null
            };
        default: return state
    }
} 