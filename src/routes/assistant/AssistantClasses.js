import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AssistantClasses.css'

const AssistantClasses = () => {
  return (
    <div>
      <Container className='assistant-classes-wrapper'>
        <h1 className='assistant-classes-title'>Kelas</h1>
      <Row>
        <Col xs={9} className="assistant-classes-content">
          <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
            <Card className='assistant-classes-items shadow-sm'>
              <Card.Body>
                <Card.Title>Front End</Card.Title>
                <Card.Text>
                  Web Programming.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
            <Card className='assistant-classes-items shadow-sm'>
              <Card.Body>
                <Card.Title>Back End</Card.Title>
                <Card.Text>
                  Web Programming.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
            <Card className='assistant-classes-items shadow-sm'>
              <Card.Body>
                <Card.Title>Dev Ops</Card.Title>
                <Card.Text>
                  Web Programming.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Button variant="outline-dark">+ Buat Kelas</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default AssistantClasses