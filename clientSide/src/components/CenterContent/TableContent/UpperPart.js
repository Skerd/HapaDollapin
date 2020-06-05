import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import MonthPicker from './MonthPicker';



class UpperClass extends Component{

    render(){
        return(
            <Container>
                <Row>
                    <Col md="3" className="borderDown">
                        Nxenesit
                    </Col>

                    <Col md="9" className="borderDown">
                        <MonthPicker></MonthPicker>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default UpperClass;