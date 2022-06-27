import React from "react";
import { useState } from "react";
import { Card, Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./StudentClassMembers.css";

const StudentClassMembers = () => {
  const [name, setName] = useState("");

  const USERS = [
    { id: 1, nama: "Rizky" },
    { id: 2, nama: "Dinda" },
    { id: 3, nama: "Joko" },
    { id: 4, nama: "Budi" },
    { id: 5, nama: "Bambang" },
    { id: 6, nama: "Laksmini" },
    { id: 7, nama: "Ario" },
    { id: 8, nama: "Ida" },
    { id: 9, nama: "Zuhairi" },
    { id: 10, nama: "Lala" },
    { id: 11, nama: "Weni" },
  ];

  const [member, setMember] = useState(USERS);

  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const filteredMember = USERS.filter((user) => {
        return user.nama.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setMember(filteredMember);
    } else {
      setMember(USERS);
    }

    setName(keyword);
  };

  return (
    <Container className="student-class-members-container">
      <Row className="justify-content-center">
        <Col xs={9} className="student-class-members-wrapper">
          <Card className="student-class-members-title class-items-header shadow-sm">
            <Row>
              <Col className="classes-items">
                <h3>Anggota</h3>
                <h5>Front End Web Programming</h5>
              </Col>
            </Row>
          </Card>
          <Row>
            <Form className="student-class-members-search">
              <div style={{ marginRight: "15px" }}>
                <BsSearch size={35} />
              </div>
              <Form.Control
                // style={{ width: "300px" }}
                type="search"
                value={name}
                onChange={filter}
                placeholder="Cari Anggota"
                aria-label="Search"
              />
            </Form>
          </Row>
          {member && member.length > 0 ? (
            member.map((member) => (
              <Card key={member.id} className="student-class-members-items shadow-sm">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs="1">
                        <FaChalkboardTeacher size={40} className="mx-2" />
                      </Col>

                      <Col xs={8} style={{ paddingTop: "10px" }}>
                        <h6>{member.nama}</h6>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            ))
          ) : (
            <h6>Data tidak ditemukan</h6>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default StudentClassMembers;
