import React from 'react'
import { Container, Card, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import './AssistantClasses.css'

const AssistantClasses = () => {
  return (
    <div>
      <Container className='assistant-classes-wrapper'>
        <h1 className='assistant-classes-title'>Kelas</h1>
      <Row>
        <Col xs={9} className="assistant-classes-content">
          <Card className='assistant-classes-items shadow-sm'>
            <ListGroup variant="flush">
              <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
                <ListGroup.Item>
                  <h3>Front End</h3>
                  <h5>
                    Web Programming
                  </h5>
                  </ListGroup.Item>
                </Link>
                <ListGroup.Item >
                  <Button className='edit-class-button' variant="outline-dark">
                    <BiEditAlt/> Edit
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          <Card className='assistant-classes-items shadow-sm'>
            <ListGroup variant="flush">
              <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
                <ListGroup.Item>
                  <h3>Back End</h3>
                  <h5>
                    Web Programming
                  </h5>
                  </ListGroup.Item>
                </Link>
                <ListGroup.Item >
                  <Button className='edit-class-button' variant="outline-dark">
                    <BiEditAlt/> Edit
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          <Card className='assistant-classes-items shadow-sm'>
            <ListGroup variant="flush">
              <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
                <ListGroup.Item>
                  <h3>Dev Ops</h3>
                  <h5>
                    Web Programming
                  </h5>
                  </ListGroup.Item>
                </Link>
                <ListGroup.Item >
                  <Button className='edit-class-button' variant="outline-dark">
                    <BiEditAlt/> Edit
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
        </Col>
        <Col>
          <Button className='add-class-button' variant="outline-dark">+ Buat Kelas</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default AssistantClasses