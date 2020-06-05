import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import TableContent from './TableContent';


const CenterContent = (props) => {

    return(
        <div className="pt-5 pl-3 pr-3 borderParentComponent">
            <Container fluid className="borderDown">
                <Row >
                    <Col xs="8" className="borderDown p-0 pr-2">
                        <TableContent></TableContent> 
                    </Col>

                    <Col xs="4" className="borderDown p-0 pl-2">
                        Temat Mesimore
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default CenterContent;