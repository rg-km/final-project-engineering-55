import React from 'react'
import { Container, Card, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import './AssistantClasses.css'

const AssistantClasses = () => {

  const classes = [
    {
      kelas: "Front End",
      jurusan: "Web Programming",
    },
    {
      kelas: "Back End",
      jurusan: "Web Programming",
    },
    {
      kelas: "Dev Ops",
      jurusan: "Web Programming",
    },
  ]
  
  return (
    <div>
      <Container className='assistant-classes-wrapper'>
        <h1 className='assistant-classes-title'>Kelas</h1>
      <Row>
        <Col xs={9} className="assistant-classes-content">
        {classes.map((item, index) => (
            <Card key={index} className='assistant-classes-items shadow-sm'>
              <ListGroup variant="flush" className='assistant-classes-link'>
                <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
                <ListGroup.Item>
                  <h3>{item.kelas}</h3>
                  <h5>
                    {item.jurusan}
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
        ))}
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