import React, {Component} from 'react';
import Modal from "../Modals/Modal";

class ForgetCredentials extends Component{

    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            modalInfo : {
                title: "",
                body: ""
            },  
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.editModal = this.editModal.bind(this);
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }

    editModal(e){
        var whatModal = e.target.id;

        if( whatModal === "resetPassword"){
            this.setState({modalInfo:{ title: "Keni harruar fjalekalimin?", body: "Ju lutem kontaktoni sekretarine e institucionit ne te cilin punoni. Faleminderit."}})
        }
        else if( whatModal === "resetEmail"){
            this.setState({modalInfo:{ title: "Keni harruar email-in?", body: "Ju lutem kontaktoni sekretarine e institucionit ne te cilin punoni. Faleminderit."}})
        }
        this.toggleModal();
    }

    componentDidMount(){
        console.log("ForgetCredentials mounted");     
    }

    render(){
        return (
            <div>
                <a href="#vb" className="form-text text-muted">
                    <small id="resetPassword" onClick={this.editModal}>Keni harruar fjalëkalimin?</small>
                </a>
                <a  href="#" className="form-text text-muted">
                    <small id="resetEmail" onClick={this.editModal}>Keni harruar email-in?</small>
                </a>

                <Modal show={this.state.showModal} handleClose={this.toggleModal} modalInfo={this.state.modalInfo} ></Modal>
            </div>
        )
    }

}

export default ForgetCredentials;