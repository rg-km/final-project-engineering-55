import React from "react";
import { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import MemberFormModal from "./MemberFormModal";
import "./AssistantClassMembers.css";

const AssistantClassMembers = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [memberId, setMemberId] = useState(0);

  const [name, setName] = useState("");

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };

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
    <Container className="assistant-class-members-container">
      <Row className="justify-content-center">
        <Col xs={9} className="assistant-class-members-wrapper">
          <Card className="assistant-class-members-title shadow-sm">
            <Row>
              <Col>
                <h3>Anggota</h3>
                <h5>Front End Web Programming</h5>
              </Col>
              <Col>
                <span>
                  <Button
                    className="edit-class-button"
                    variant="outline-dark"
                    onClick={onClickAdd}
                  >
                    + Tambah Anggota
                  </Button>
                </span>
                <MemberFormModal
                  memberList={member}
                  setMemberList={setMember}
                  showFormModal={showFormModal}
                  setShowFormModal={setShowFormModal}
                  formModalType={formModalType}
                  setFormModalType={setFormModalType}
                  memberId={memberId}
                />
              </Col>
            </Row>
          </Card>
          <Row>
            <Form className="assistant-class-members-search">
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
              <Card key={member.id} className="assistant-class-members-items">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs="1">
                        <FaChalkboardTeacher size={40} className="mx-2" />
                      </Col>

                      <Col xs={8} style={{ paddingTop: "10px" }}>
                        <h6>{member.nama}</h6>
                      </Col>
                      <Col xs={3}>
                        <Button
                          className="edit-class-button"
                          variant="outline-dark"
                          // onClick={onClickDelete}
                        >
                          <AiOutlineDelete style={{ marginBottom: "2px" }} />{" "}
                          Hapus
                        </Button>
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

export default AssistantClassMembers;
