

import React, { useState } from 'react';
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const TopPart = (props) =>{
    
    console.log(props);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Container fluid>
            <h4>Te gjitha Biletat</h4> 

            <Row class="p-0 m-0">
                <Col sm="3">
                    <button type="button" class="btn btn btn-outline-success ml-auto">Create</button>
                </Col>
                <Col sm="3" >
                    <Dropdown className={ props.showActions ? "" : "invisible" } isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret style={{"backgroundColor": "white", "color": "grey"}}>
                            Zgjidh veprimin
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Eksporto</DropdownItem>
                            <DropdownItem>Fshi</DropdownItem>
                            <DropdownItem>Shkri biletat e zgjedhura</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>  
                </Col>
            </Row>
        </Container>
    )
}   

export default TopPart;