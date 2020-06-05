import React from 'react';
import {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import RegjistriIcon from '../../Static/Icons/clipboard-notes.svg';
import DitariIcon from '../../Static/Icons/diary.svg';
import DetyraIcon from '../../Static/Icons/books.svg';
import BisedeIcon from '../../Static/Icons/books.svg';
import ParametratIcon from '../../Static/Icons/cog.svg';
import DilIcon from '../../Static/Icons/sign-out-alt.svg';



class MainMenu extends Component{

    renderMenuItem() {
      var menuItems = [
        {menuName: "Regjistri", menuIcon: RegjistriIcon},
        {menuName: "Ditari", menuIcon: DitariIcon},
        {menuName: "Detyra", menuIcon: DetyraIcon},
        {menuName: "Biseda", menuIcon: BisedeIcon},
        {menuName: "Parametra", menuIcon: ParametratIcon},
        {menuName: "Dil", menuIcon: DilIcon}
      ];

      return menuItems.map((menuItem, index) => {
         const { menuName, menuIcon } = menuItem //destructuring
         return (
          <ListItem key={index} className="pl-4" button>
            <div className="row w-75 m-auto">
              <img className="mr-2" src={menuIcon} alt="Regjistri" />
              <ListItemText style={{"fontSize": "1.2vw"}}  disableTypography >{menuName}</ListItemText>
            </div>
          </ListItem>
         )
      })
   }

    render() {

      


      return ( 

        <div className="container-fluid p-0 m-0 border border-warning">
            <div className="row ml-4 ">
                <h5>Menu</h5>
            </div>
            <div className="row w-100 m-0">
              <div className="col-12 p-0">
                <List className="w-100 menuItem" disablePadding dense>

                  {this.renderMenuItem()}
                  
                 
                </List>
              </div>
            </div>
        </div>
      );
    }
}

export default MainMenu;
