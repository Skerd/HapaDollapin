import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './chat.css';

export default class ChatHeads extends Component {

    constructor( props){
        super( props );
        this.handleChatHead = this.handleChatHead.bind(this);
    }

    handleChatHead(newSelectedChat){
        this.props.chatHeadHandler(newSelectedChat);
    }

    render() {
        return (
            <div className=" p-0 m-0">
                <div className="col-12">
                    <h4> Bisedat: </h4>
                </div>

                <List>
                    {
                        this.props.chatHeads.map( topic => (
                            <div key={topic} onClick={ () => this.handleChatHead(topic) }  >
                                <ListItem button>
                                    <ListItemText primary={topic}  />
                                </ListItem>
                            </div>
                        ))
                    }
                </List>
            </div>
        )
    }
}
