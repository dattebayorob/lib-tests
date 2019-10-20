import React from 'react'
import 'lib/dist/assets/css/base.css'
import { Col, Row } from 'lib'
const App: React.FC = () => {
    return (
        <Row>
            <Col>
                One Column
            </Col>
            <Col>
                Another Column
            </Col>
        </Row>
    )
}

export default App