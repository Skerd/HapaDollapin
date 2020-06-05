import { 
    REDIRECT_HOME,
    REDIRECT_LOGIN,
    REDIRECT_TICKET,
    REDIRECT_COMPLETE
} from '../actions/types';

const initialState = {
    isRedirecting: false
}

export default function(state=initialState, action){
    switch(action.type){
        case REDIRECT_HOME:
        case REDIRECT_LOGIN:
        case REDIRECT_TICKET:
            return{
                ...state,
                isRedirecting: true
            };
        case REDIRECT_COMPLETE:
            return{
                ...state,
                isRedirecting: false
            };
        default: return state
    }
}







