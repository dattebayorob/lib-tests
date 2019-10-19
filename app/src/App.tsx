import React from 'react'
import { Row, Col } from './components'
import './assets/css/base.css'
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