import Loader from 'react-loader-spinner';
import React from 'react';
import {Container} from 'reactstrap';

import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { loadUser } from './Redux/actions/authActions';

import {USER_LOADING} from './Redux/actions/types';

class LoadSpinner extends React.Component {

  //other logic
  render() {

     return(
        <Container className="text-center mt-5">
            <h5> Duke ngarkuar: </h5>
            <h2> Communication Progress </h2>
            <Loader
                type="Oval"
                color="#00BFFF"
                height={200}
                width={150}
                timeout={300000} //3 secs
            />
        </Container>
     );
    }
 }

 LoadSpinner.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  //state "reducer name from main reducer"
  //we map a reducer to a state property
  isAuthenticated : state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect( mapStateToProps, { loadUser } )(LoadSpinner);
