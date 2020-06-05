import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser, loadUser } from '../../Redux/actions/authActions';
import ConfirmationModal from '../Modals/ConfirmationModal';




const modalTitle = "Jeni te sigurt qe doni te dilni?";
const modalBody = "Ky veprim do ju nxjerre nga sistemi. Jeni te sigurt?";
const logOutText = "Dil";

class LogOutModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            showModal : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }

    logOut(){
        console.log("Logging out");
        this.props.logoutUser();
    }
 
    render() {
        return (
            <div>
                <Button outline color="danger" onClick={this.toggleModal}>
                    Dil
                </Button>

                <ConfirmationModal 
                    show={this.state.showModal} 
                    handleClose={this.toggleModal} 
                    modalInfo={ {title: modalTitle, body: modalBody} }
                    handleConfirmation = {this.logOut}
                    confirmationButtonText = {logOutText}
                >
                </ConfirmationModal>
            </div>
        );
    }


}

LogOutModal.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    //state "reducer name from main reducer"
    //we map a reducer to a state property
    isAuthenticated : state.auth.isAuthenticated,
});

export default connect( mapStateToProps, { logoutUser, loadUser } )(LogOutModal);


