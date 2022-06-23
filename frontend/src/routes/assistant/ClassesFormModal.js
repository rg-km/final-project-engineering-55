import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ClassesFormModal = (props) => {
  const {
    classes,
    setClasses,
    formModalType,
    showFormModal,
    setShowFormModal,
    classId,
  } = props;

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
        setClasses([
        {
          id: classes.length + 1,
          ...formValues,
        },
        ...classes,
      ]);
    } else {
        setClasses(
        classes.map((classes) =>
            classes.id === classId
            ? {
                ...classes,
                ...formValues,
              }
            : classes
        )
      );
    }
    setShowFormModal(false);
  };

  const onCloseModal = () => {
    setShowFormModal(false);
  };

  useEffect(() => {
    if (formModalType === "Tambah") {
        setFormValues({});
    } else {
        setFormValues(classes.find((classes) => classes.id === classId));
    }
  }, [showFormModal]);

  return (
    <Modal show={showFormModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{formModalType} Kelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlKelas">
            <Form.Label>Kelas</Form.Label>
            <Form.Control
              type="text"
              name="kelas"
              placeholder="Masukkan Nama Kelas"
              onChange={handleInputChange}
              value={formValues.kelas ? formValues.kelas : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlJurusan">
            <Form.Label>Jurusan</Form.Label>
            <Form.Control
              type="text"
              name="jurusan"
              placeholder="Masukkan Nama Jurusan"
              onChange={handleInputChange}
              value={formValues.jurusan ? formValues.jurusan : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlHari">
            <Form.Label>Hari</Form.Label>
            <Form.Control
              type="text"
              name="hari"
              placeholder="Masukkan Hari"
              onChange={handleInputChange}
              value={formValues.hari ? formValues.hari : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlJam">
            <Form.Label>Jam</Form.Label>
            <Form.Control
              type="text"
              name="jam"
              placeholder="Masukkan Jam"
              onChange={handleInputChange}
              value={formValues.jam ? formValues.jam : ""}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Keluar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClassesFormModal;
