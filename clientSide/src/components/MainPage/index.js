import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import LoggedInInfo from '../SideComponent/LoggedInInfo';
// import MainMenu from '../SideComponent/MainMenu';
// import MessageNotifications from '../MessageNotifications';
import {loadUser} from "../../Redux/actions/authActions";
import NavBarr from './NavBar';
import TopPart from './TopPart';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';


class MainPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      showActions: false,
    };
    this.toggleActions = this.toggleActions.bind(this);
    this.props.loadUser();
  }

  toggleActions(){
    this.setState({ showActions: !this.state.showActions });
  }

  render() {
    return (
         <div className="container-fluid p-0 m-0">
            <NavBarr userName={ this.props.auth.user ? this.props.auth.user.name : ""  }></NavBarr>
            <hr></hr>

            <TopPart show={this.state.showActions} ></TopPart>

            <hr></hr>


             <div className="row border border-primary p-0 m-0">
                 <div className="col-10 offset-1 col-lg-8 offset-lg-2 p-0 border border-danger">
                   
                  
                   {/* <br></br>
                   <LoggedInInfo userType="Mesues" userName = "Skerd" userSurname = "Xhafa"></LoggedInInfo>
                   <br></br>
                   <MainMenu></MainMenu>
                   <br></br>
                   <MessageNotifications></MessageNotifications>*/}
                 </div> 
             </div>
         </div>
    );
  }
}

MainPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadUser: PropTypes.func,
  auth: PropTypes.object
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  auth: state.auth
});

export default connect(mapStateToProps, {loadUser})(MainPage);

