import React from 'react';
import {Container} from 'reactstrap';
import "./sidePanel.css";


import EmerMbiemer from './EmerMbiemer';
import SideMenu from './SideMenu';
import AllActivities from './Aktivitetet/AllActivities';


const SidePanelParent = (props) => {

    return(
        <div className="pt-5 pl-3 pr-3 borderParentComponent" style={{width: " 350px"}}>
            <Container >
                <EmerMbiemer userName="Skerd" userSurname="Xhafa" userType="Mesues"></EmerMbiemer>
                <br></br>
                <SideMenu></SideMenu>
                <br></br>
                <AllActivities></AllActivities>
            </Container>
        </div>
    )

}

export default SidePanelParent;