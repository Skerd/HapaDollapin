import {
    REDIRECT_HOME,
    REDIRECT_LOGIN,
    REDIRECT_TICKET,
    REDIRECT_COMPLETE
}
from './types';


//Check token and load user

export const redirectUserTo = (where) => (dispatch, getState) => {

    console.log("Redirecting User");
    //User

    if( where === "home"){
        dispatch({type: REDIRECT_HOME}); //tell redirectReducer to use REDIRECT_HOME
    }
    else if( where === "ticket"){
        dispatch({type: REDIRECT_TICKET}); //tell redirectReducer to use REDIRECT_HOME
    }
    else{
        dispatch({type: REDIRECT_LOGIN}); //tell redirectReducer to use REDIRECT_HOME
    }



    dispatch({type: REDIRECT_COMPLETE});

}



