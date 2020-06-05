import React, {Component} from 'react';
import {Spinner, Button, Label, Input, InputGroup, Form, Container } from 'reactstrap';
import {loginUser, loadUser} from '../../Redux/actions/authActions';
import {clearErrors} from '../../Redux/actions/errorActions';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import ForgetCredentials from './ForgetCredentials';
import Modal from '../Modals/Modal';


class LoginPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            passwordType : "password",
            passwordButton : "warning",
            password: null,
            email: null,
        };
        this.tryToLogIn = this.tryToLogIn.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal(){
       clearErrors();
    }

    handleInputChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }
    
    tryToLogIn(e) {
        e.preventDefault();

        console.log('Trying to log in now...');
        console.log("[" + this.state.email + "][" + this.state.password + "]");
        this.props.loginUser({
            name : this.state.email,
            password: this.state.password
        });
    }

    togglePassword(e){

        if( this.state.passwordType === "password"){
            this.setState({passwordType : "text"});
            this.setState({passwordButton : "success"});
            e.target.innerText = "Fshihe";
        }
        else{
            this.setState({passwordType : "password"});
            this.setState({passwordButton : "warning"});
            e.target.innerText = "Shiko";
        }

    }

    componentDidUpdate(){
        if( sessionStorage.getItem("session_isAuthenticated") ){
            window.location = "/home";
        }
    }

    render(){
        return (
            <Container className="mt-5">

                {/* {this.props.error.msg ? <Alert color="danger">{this.props.error.msg}</Alert> : null} */}
                <Form onSubmit={this.tryToLogIn}>
                    <Label >Adresa E-mail</Label>
                    <Input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Vendosni email-in"  
                        onChange={this.handleInputChange}
                        required
                        />

                    <br/>
                    
                    <Label>Fjalëkalimi</Label>
                    <InputGroup>
                        <Input 
                            type={this.state.passwordType} 
                            id="password" 
                            name="password" 
                            placeholder="Vendosni fjalëkalimin" 
                            onChange={this.handleInputChange}
                            required
                            />
                        <Button value="show" outline color={this.state.passwordButton} onClick={this.togglePassword}>
                            Shiko
                        </Button>     
                    </InputGroup>

                    <br/>
                   
                    <div className="text-center">
                        <div style={{"height": "0px"}}>
                            <Spinner className={!this.props.isLoading ? "invisible": null } color="success" />
                        </div>
                        <Button type="submit" className={this.props.isLoading ? "invisible": null } outline color="success" >
                            Kyçuni
                        </Button>

                        <ForgetCredentials></ForgetCredentials>
                    </div>
                </Form>

                <Modal show={ (this.props.error.status != null) } handleClose={this.props.clearErrors} modalInfo={{title: this.props.error.title , body: this.props.error.body} } ></Modal>

            </Container>
        )
    }
}


LoginPanel.propTypes = {
    loginUser: PropTypes.func,
    clearErrors: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object,
    isLoading: PropTypes.bool
}

const mapStateToProps = (state) => ({
    //state "reducer name from main reducer"
    //we map a reducer to a state property
    loginResponse: state.logIn, 
    isAuthenticated : state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.error
});


export default connect( mapStateToProps, { loginUser, clearErrors, loadUser } )(LoginPanel);