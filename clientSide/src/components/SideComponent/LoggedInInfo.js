
import React from 'react';
import personLogo from '../../Static/Images/person.png';


const LoggedInInfo = (props) =>{

    return(
        <div className="container-fluid p-0 m-0 border border-warning">
            <div className="row w-100 m-0">
                <div className="col-3 offset-1 p-0">
                    <img className="w-100 rounded-circle" src={personLogo} alt="Person Avatar" />
                </div>
                <div className="col-6 pl-1">
                    <div className="container-fluid align-items-center h-100 d-flex ">
                        <div className="row">
                            <div className="col-12 p-0">
                                <h1 style={{"fontSize": "1.3vw"}}>{props.userName}</h1>
                            </div>
                            <div className="col-12 p-0">
                                <h1 style={{"fontSize": "1.3vw"}}>{props.userSurname}</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};


export default LoggedInInfo;