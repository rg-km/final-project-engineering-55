import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AssistantClasses.css'
import ClassesFormModal from './ClassesFormModal';
import ClassesListItems from './ClassesListItems';

const AssistantClasses = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [classId, setClassId] = useState(0);

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };

  const [classes, setClasses] = useState([
    {
      id: 0,
      kelas: "Front End",
      jurusan: "Web Programming",
      hari: "Senin",
      jam: "13:30",
    },
    {
      id: 1,
      kelas: "Back End",
      jurusan: "Web Programming",
      hari: "Selasa",
      jam: "13:30",
    },
    {
      id: 2,
      kelas: "Dev Ops",
      jurusan: "Web Programming",
      hari: "Rabu",
      jam: "14:30",
    },
  ]);
  
  return (
    <div>
      <Container className='assistant-classes-wrapper'>
        <h1 className='assistant-classes-title'>Kelas</h1>
      <Row>
        <Col xs={9} className="assistant-classes-content">
        {classes.map((item, index) => (
          <ClassesListItems
            key={index}
            id={item.id}
            classItem={item}
            classes={classes}
            setClasses={setClasses}
            setFormModalType={setFormModalType}
            setShowFormModal={setShowFormModal}
            setClassId={setClassId}
          />
        ))}
        </Col>
        <Col>
          <Button
            className='add-class-button'
            variant="outline-dark"
            onClick={onClickAdd}
          >+ Buat Kelas
          </Button>
          <ClassesFormModal
            classes={classes}
            setClasses={setClasses}
            formModalType={formModalType}
            showFormModal={showFormModal}
            setShowFormModal={setShowFormModal}
            classId={classId}
          />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default AssistantClasses