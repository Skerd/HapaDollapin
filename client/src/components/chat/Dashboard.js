import React, { Component } from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './chat.css';


import ChatHeads from './ChatHeads';
import ChatMessages from './ChatMessages';
import SendChatMessage from './SendChatMessage';

//redux things
import {connect} from 'react-redux';
import { receiveMessages } from '../../actions/chatActions';
import PropTypes from 'prop-types'; 
//end of redux things


const useStyles = theme => ({
    root:{
        padding: theme.spacing(3,2)
    },
    messageInput:{
        width: "100%"
    },
    sendButton:{
        height: "100%",
        width: "100%"
    },
    borderDown:{
        margin: "0",
        borderDown: "3px solid grey"
    }
});


class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedChat: "",
            allChat: ""
        }

        this.chatHeadHandler = this.chatHeadHandler.bind(this);

    }

    componentDidMount(){
        console.log("Trying to get messages on did mount!");
        this.props.receiveMessages(); //placing the action into the props
    }


    chatHeadHandler(selectedChat){
        this.setState({
            selectedChat
        }, function() {
            console.log("New selected chat: " + this.state.selectedChat );
        });
    }


    render() {
        return (
            <div >
                <Paper >
                    <div className="col-12 pb-2 borderDown" >
                            <Typography variant="h4" component="h3">
                                HapaDollapin
                            </Typography>
                    </div>
                    
                    <div className="row pt-1">
                        <div className="col-3 p-0 m-0 borderRight minHeight">

                            <ChatHeads chatHeads       = {Object.keys( this.props.chatsResponse ) } 
                                       chatHeadHandler = {this.chatHeadHandler} 
                            /> 
                            
                        </div>

                        <div className="col-9 minHeight">
                            <div className="row ">
                                <div className="col-12 ">
                                    <h4> Në Chat: {this.state.selectedChat} </h4>                               
                                </div>

                                <div className="col-12">
                                    <ChatMessages chatsResponse = {this.props.chatsResponse} 
                                                  selectedChat  = {this.state.selectedChat} 
                                    />
                                </div>

                                <div className="container-fluid floatBottom ">
                                    <SendChatMessage handleSendingMessage = {this.handleSendingMessage} 
                                                     selectedChat         = {this.state.selectedChat}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

//now we want to declare PropTypes

Dashboard.propTypes = { //proptypes, for things we get from redux
    receiveMessages: PropTypes.func.isRequired,
    chatsResponse: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    chatsResponse: state.chat.allChat //from root reducer, the same name (state.clinic)
});


export default connect( mapStateToProps, {receiveMessages} ) (Dashboard) ;

