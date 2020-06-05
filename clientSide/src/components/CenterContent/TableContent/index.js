import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import UpperPart from './UpperPart';

const TableContent = (props) => {

    return(
        <Container>
            <Row>
                <UpperPart></UpperPart>
            </Row>
        </Container>
    )

}

export default TableContent;