import React from 'react'
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import { VscAccount } from 'react-icons/vsc';
import './StudentClassPosts.css';

const StudentClassPosts = () => {
  
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
      <Container className='student-class-post-container'>
        <Row>
          <Col xs={9} className="student-class-post-wrapper">
            <Card className='student-class-post-title shadow-sm'>
              <Row>
                <Col>
                <h3>Front End</h3>
                <h5>
                  Web Programming
                </h5>
                </Col>
              </Row>
            </Card>
            {posts.map((post, index) => (
              <Card key={index} className='student-class-post-items shadow-sm'>
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

export default StudentClassPosts
