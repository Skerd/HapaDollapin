import React, {Component} from 'react';
import LoginPanel from "./LoginPanel";

class LoginPage extends Component{

    render(){
        return (
            <div className="container-fluid mt-5">
                <div className="col-sm-12 col-md-6 offset-md-3" style={{"maxWidth": "750px !important"}}>
                    
                    <h2 className="w-100 text-center"> Mirësevini në </h2>
                    <h2 className="w-100 text-center"> Communication Progress </h2>

                    <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <LoginPanel></LoginPanel>                
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;