import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export default class ChatMessages extends Component {

    constructor(props){
        super(props);

        this.handleMessageClick = this.handleMessageClick.bind(this);
    }

    handleMessageClick(selectedMessage, messageId){
        console.info('You clicked the message: [Msg: ' + selectedMessage + ' Id: ' + messageId + '].');
    };
    
    componentWillReceiveProps(nextProps) {
        // console.log("next prop: " + nextProps.selectedChat);
        // console.log( nextProps );
        //this.setState({ selectedChat: nextProps.selectedChat });  
    }
    
    render() {

        const selectedChat = this.props.selectedChat;
        const chat = this.props.chatsResponse[selectedChat];

        if( selectedChat === undefined || selectedChat === ""){
            console.log("Returning null")
            return null;
        }

        const renderChat = chat.map( ( chatMessage, index ) => {

            if( chatMessage.type === 'me'){
                return(
                    <div className ="justify-content-right text-right" key={index}>
                        <Chip  label={chatMessage.msg} onClick={() => this.handleMessageClick(chatMessage.msg, index) } />
                    </div>
                )
            }
            else{
                return(
                    <div  className ="justify-content-left " key={index} >
                        <Chip label={chatMessage.msg} onClick={() => this.handleMessageClick(chatMessage.msg, index) } />
                    </div>
                )
            }

        });

        return (
            <div>
                {renderChat}
            </div>
        )
    }
}


