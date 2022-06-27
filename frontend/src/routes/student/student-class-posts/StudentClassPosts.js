import React from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { VscAccount } from "react-icons/vsc";
import "./StudentClassPosts.css";

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
  ];

  return (
    <div>
      <Container className="student-class-post-container">
        <Row>
          <Col xs={9} className="student-class-post-wrapper">
            <Card className="student-class-post-title class-items-header shadow-sm">
              <Row>
                <Col className="classes-items">
                  <h3>Front End</h3>
                  <h5>Web Programming</h5>
                </Col>
              </Row>
            </Card>
            {posts.map((post, index) => (
              <Card key={index} className="student-class-post-items shadow-sm">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs={1}>
                        <VscAccount size={40} className="mx-2" />
                      </Col>
                      <Col xs={9}>
                        <h6>Nama Asisten</h6>
                        <h6
                          style={{
                            fontSize: "15px",
                            fontWeight: "normal",
                          }}
                        >
                          Diposting pada 12:12
                        </h6>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs={1}></Col>
                      <Col>
                        <h6>{post.materi}</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}></Col>
                      <Col>
                        <h6 style={{ marginBottom: "2px" }}>{post.file}</h6>
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
  );
};

export default StudentClassPosts;
