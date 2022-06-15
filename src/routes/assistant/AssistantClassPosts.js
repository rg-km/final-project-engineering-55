import React, { useState } from 'react'
import { Container, Card, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
import AssistantAddPostsModal from '../../components/assistant/AssistantAddPostsModal';
import { VscAccount } from 'react-icons/vsc';
import './AssistantClassPosts.css';

const AssistantClassPosts = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const posts = [
    {
      materi: "Materi 1",
      file: "File 1",
    },
    {
      materi: "Materi 2",
      file: "File 2",
    },
    {
      materi: "Materi 3",
      file: "File 3",
    },
  ]
  
  return (
    <div>
      <Container className='assistant-class-post-container'>
        <Row>
          <Col xs={9} className="assistant-class-post-wrapper">
            <Card className='assistant-class-post-title shadow-sm'>
              <Row>
                <Col>
                <h3>Front End</h3>
                <h5>
                  Web Programming
                </h5>
                </Col>
                <Col>
                  <span>
                  <Button className='edit-class-button' variant="outline-dark">
                    <BiEditAlt/> Edit
                  </Button>
                  </span>
                </Col>
              </Row>
            </Card>
            <Button
              className='assistant-class-post-items shadow-sm'
              variant="outline-dark"
              onClick={handleShow}
            >
              <span className="add-post-caption">Mulai diskusi, unggah materi dan lainnya</span>
              <span className="add-post-icon">+</span>
            </Button>
            <AssistantAddPostsModal
              show={show}
              handleClose={handleClose}
            />
            {posts.map((post, index) => (
              <Card key={index} className='assistant-class-post-items shadow-sm'>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs={1}>
                        <VscAccount size={40} className="mx-2"/>
                      </Col>
                      <Col xs={9}>
                        <h4>Nama Asisten</h4>
                        <h6>Diposting pada 12:12</h6>
                      </Col>
                      <Col xs={2}>
                        <Button className='assistant-class-post-edit' variant="outline-dark">
                          <BiEditAlt/> Edit
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs={1}>
                      </Col>
                      <Col>
                        <h3>{post.materi}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}>
                      </Col>
                      <Col>
                        <h3>{post.file}</h3>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            ))}
          </Col>
          <Col>
          <center>
            <h1>Jadwal</h1>
            <h4>Senin 13:30</h4>
          </center>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AssistantClassPosts
