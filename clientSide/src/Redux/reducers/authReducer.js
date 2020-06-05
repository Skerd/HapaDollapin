import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    // REGISTER_FAIL,
    // REGISTER_SUCCESS
} from '../actions/types';

const initialState = {
    token: sessionStorage.getItem('session_token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default function(state=initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            sessionStorage.setItem('session_token', action.payload.token);
            sessionStorage.setItem('session_isAuthenticated', true);
            // localStorage.setItem('token', action.payload.token); //set token when logged in
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            sessionStorage.removeItem('session_token');
            sessionStorage.removeItem('session_isAuthenticated');
            return{
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null,
                token: null,
            };
        default: return state
        
    }
}







