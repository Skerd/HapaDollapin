import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {addClinic} from '../actions/clinicActions';


class ClinicModal extends Component{

    state = {
        modal: false,
        name: ''
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = (e) =>{
        e.preventDefault(); //preventing from submiting
        const newClinic = {
            name: this.state.name
        }

        //add clinic via addClinic action

        this.props.addClinic(newClinic);
        this.toggle();

    }


    render(){
        return(
            <div>
                <Button
                    color = "dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Add Clinic
                </Button>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader
                    toggle={this.toggle}
                >
                    Add To Clinic List
                </ModalHeader>

                <ModalBody>

                    <Form
                        onSubmit={this.onSubmit}
                    >
                        <FormGroup>

                            <Label for="clinic">
                                Clinic
                            </Label>

                            <Input
                                type="text"
                                name="name"
                                id="clinic"
                                placeholder="Add new clinic"
                                onChange={ this.onChange}
                            >

                            </Input>

                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Add Clinic
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
    clinic: state.clinic
});

export default connect(mapStateToProps, {addClinic} )(ClinicModal);