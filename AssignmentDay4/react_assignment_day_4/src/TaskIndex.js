import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TaskIndex = () => {
    
    return (
        <div>
            <Container className='my-3'>
                <Row>
                    <Col xs={2}> <Link className="btn btn-outline-primary btn-lg" variant="outline-primary" size="lg" to='task1'>
                        Task 1
                    </Link>
                    </Col>
                {/* </Row>
                <Row> */}
                    <Col xs={2}><Link className="btn btn-outline-primary btn-lg" size="lg" to='task2'>
                        Task 2
                    </Link>
                    </Col>
                {/* </Row>
                <Row> */}
                    <Col xs={2}><Link className="btn btn-outline-primary btn-lg" size="lg" to='task3'>
                        Task 3
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TaskIndex