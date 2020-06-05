import React, {Component} from 'react';

import {connect } from 'react-redux';
import {getUsers } from '../actions/userActions';
import PropTypes from 'prop-types';


class SimpleUsers extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        const allUsersDisplay = this.props.allUsers;
        console.log(allUsersDisplay.usersat);
        return(
            <div>
                {allUsersDisplay.usersat.map( user => (
                    <div key={user._id}> Name: {user.name} </div>
                ))}
            </div>
        )
    }
}

SimpleUsers.propTypes = {
    getUsers: PropTypes.func.isRequired,
    allUsers: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
             //state "reducer name from main reducer"
    allUsers: state.users //we map a reducer to a state property
});

export default connect(mapStateToProps, { getUsers } )(SimpleUsers);


