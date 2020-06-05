import React, { Component } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import personAvatar from '../Static/Images/person.png';
import newMessage from '../Static/Icons/messageStatusNew.svg';



class MessageNotifications extends Component{

    constructor(props){
      super(props);
      this.state = {
        messageNotificationArray: []
      };
    }

    componentDidMount(){
        //api call to fetch 7 most recent messages,
        //check every 5seconds for fresh messages
        this.setState({
            messageNotificationArray: [ {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar}, 
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "unseen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar},
                                        {status : "seen", sender:"Kevin Foster", messageContent: "Pershendetje. doja tju thoja dicka ne lidhje me punen.", avatarSource: personAvatar}
                                        ]
        })
    }

    renderMessage(){
        return this.state.messageNotificationArray.map((message, index) => {
            const { status, sender, messageContent, avatarSource } = message //destructuring
            var seenOrNot = "";
            var newMsgIcon;
            if( status == "unseen"){
                console.log("asdasdasda");
                newMsgIcon = React.createElement('img', { className: 'w-100 mt-auto mb-auto' , src: newMessage});
                seenOrNot = '<img className="w-100 rounded-circle" src={' + newMessage + '} alt="Person Avatar" />';
            }
            return (
                <ListItem key={index} className="p-0 m-0 mb-2" button>
                    <div className="row w-100 pl-4 m-0">
                        <div className="col-1 p-0 m-0">
                            <div className="container-fluid align-items-center h-100 d-flex p-0 m-0">
                                <div className="row w-100 p-0 m-0">
                                    {newMsgIcon}
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0 m-0 " > 
                            <img className="w-100 rounded-circle" src={avatarSource} alt="Person Avatar" />
                        </div>
                        <div className="col-7 p-0 m-0" > 
                            <div className="row p-0 m-0">
                                <strong>{sender}</strong>
                            </div>
                            <div style={{"fontSize": "1.0vw"}} className="row p-0 m-0"> 
                                {messageContent.slice(0,30) + "..."}
                            </div>
                        </div>
                    
                    </div>
                </ListItem>
            )
        })
    }
  
   
    render() {
      return (
            <div className="container-fluid p-0 m-0 border border-warning" >
                <div className="row ml-4 ">
                    <h5>Mesazhe</h5>
                </div>
                <div className="row w-100 m-0" style={{"max-height": "430px", "overflow" : "auto", "overflow-x": "hidden" }}>
                    <div className="col-12 p-0" style={{"max-height": "550px !important", "overflow" : "auto !important", "overflow-x": "hidden !important" }}>
                        <List className="w-100 menuItem" disablePadding dense>
                            {this.renderMessage()}
                        </List>
                    </div>
                </div>
            </div>
      );
    }
  
  
  }


export default MessageNotifications;



