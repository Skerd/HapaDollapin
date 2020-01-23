
import React, {Component} from 'react';
import{ Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


import {connect} from 'react-redux';  //used to connect store to this component
import {getClinics, deleteClinic } from '../actions/clinicActions'; //importing actions to call

import PropTypes from 'prop-types';


class ShoppingList extends Component{

    componentDidMount(){
        this.props.getClinics(); //placing the action into the props
    }

    onDeleteClick = (id) => {
        console.log("deleting: [" + id + "]");
        this.props.deleteClinic(id);
    }
   
    render(){
        
        const { clinics } = this.props.clinic; //destructuring
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {clinics.map(({ _id, name}) => (
                            <CSSTransition key = {_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id) } >
                                     &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

//mapping state to props, important to map things we get ffrom redux to state

ShoppingList.propTypes = { //proptypes, for things we get from redux
    getClinics: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    clinic: state.clinic //from root reducer, the same name (state.clinic)
});

export default connect(
    mapStateToProps, 
    {getClinics, deleteClinic} 
    )(ShoppingList);
