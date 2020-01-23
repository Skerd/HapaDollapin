
// import axios from 'axios';
// import { returnErrors } from "./errorActions";

import{
    RECEIVE_MESSAGES
}
from '../actions/types';

//import { bindActionCreators } from 'redux';


//Check token and load user

export const receiveMessages = () => (dispatch) => { //asynchron
    //user Loading
    
    //dispatch({type: RECEIVING_MESSAGES});

    console.log("Getting all Messages")

    var data = { Erta: [{ from: "Erta", msg: "Omeee", type:"reply"}, { from: "Erta", msg: "Omeee", type:"me"}, { from: "Erta", msg: "Je nsr per vrap", type:"reply"}] , 
                 Selda:[{ from: "Selda", msg: "Bebu", type:"reply"}, { from: "Selda", msg: "Bebi mir", type:"me"}, { from: "Selda", msg: "<3", type:"reply"}  ] }

    dispatch({
        type: RECEIVE_MESSAGES,
        payload: data   
    })



    // axios.get('/api/auth/user', tokenConfig( getState ) )
    // .then( res => dispatch({
    //     type: USER_LOADED,
    //     payload: res.data
    //     })
    // )
    // .catch( err => {
    //     dispatch( returnErrors(err.response.data, err.response.status) );
    //     dispatch({
    //         type: AUTH_ERROR
    //     })
    // })

}




