import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import "./rightPanel.css";


const SidePanelParent = (props) => {

    return(
        <div className="pt-5 pl-3 pr-3 borderParentComponent" style={{width: " 350px"}}>
            <Container >
                RightPanel
            </Container>
        </div>
    )

}

export default SidePanelParent;