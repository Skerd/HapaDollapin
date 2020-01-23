import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login } from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';


class LoginModal extends Component{

    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    static propTypes ={
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props; 
        if( error !== prevProps.error){
            //Check for register error
            if( error.id === 'LOGIN_FAIL' ){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({ msg: null});
            }
        }

        //If authenticated , close modal
        if( this.state.modal){
            if( isAuthenticated ){
                this.toggle();
            }
        }
    }


    toggle = () => {
        //Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = (e) =>{
        
        e.preventDefault(); //preventing from submiting
       
        const { email, password } = this.state;
        
        const user = {
            email, password
        }

        //Attempt to login
        this.props.login(user);
        
    }


    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Hyni ne llogari
                </NavLink>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader
                    toggle={this.toggle}
                >
                    Hyni me llogari
                </ModalHeader>

                <ModalBody>
                    {this.state.msg ? (
                        <Alert color = "danger"> {this.state.msg} </Alert>
                    ): null}
                    <Form
                        onSubmit={this.onSubmit}
                    >
                        <FormGroup>

                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>

                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Fjalëkalimi"
                                className="mb-3"
                                onChange={ this.onChange}
                            ></Input>


                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Konfirmo
                            </Button>

                        </FormGroup>

                    </Form>

                </ModalBody>
                    
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error //from reducer!!!
});

export default connect(mapStateToProps, { login, clearErrors} )(LoginModal);