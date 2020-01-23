import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class SendChatMessage extends Component {

    constructor(props){
        super(props);
        this.state = {
            newMessage: ""
        };

        this.handleSendingMessage = this.handleSendingMessage.bind(this);
        this.onChange = this.onChange.bind(this); //binding
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e){

        if( e.key === 'Enter' && !e.shiftKey  ){
            this.handleSendingMessage();
        }
    }

    onChange(e){
        this.setState( { [e.target.name]: e.target.value.trimLeft()}, 
            function(){
                console.log("Message: [" + this.state.newMessage + "]");
            });
    }

    handleSendingMessage(){
        if( this.state.newMessage.trim() !== ""){
            const sendThisMessage = this.state.newMessage.trim();
            console.log("Sending: [" + sendThisMessage + "]");
            this.setState( { newMessage: "" });
        }
    }

    render() {
        return (
            <div className="row pt-2">
                <div className="col-10 pl-1 pr-1 m-0 ">
                    <TextField 
                            className="w-100"
                            value={this.state.newMessage}
                            name="newMessage"
                            multiline
                            rowsMax="4"
                            onChange ={ this.onChange }
                            onKeyDown={ this.onKeyDown}
                            id="outlined-basic" 
                            label="Dërgo nje mesazh" 
                            variant="outlined"
                    />
                </div>
                <div className="col-2 p-0 m-0 align-self-center">
                    <Button variant="contained" color="primary" onClick={this.handleSendingMessage}>
                        Dërgo
                    </Button>
                </div>
            </div>
        )
    }
}
