import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AssignmentFormModal = (props) => {
  const {
    tugasList,
    setTugasList,
    showFormModal,
    setShowFormModal,
    formModalType,
    tugasId,
  } = props;

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
      setTugasList([
        {
          id: tugasList.length + 1,
          ...formValues,
        },
        ...tugasList,
      ]);
    } else {
      setTugasList(
        tugasList.map((tugas) =>
          tugas.id === tugasId
            ? {
                ...tugas,
                ...formValues,
              }
            : tugas
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
    }
  }, [showFormModal]);

  useEffect(() => {
    if (formModalType === "Edit") {
      setFormValues(tugasList.find((tugas) => tugas.id === tugasId));
    }
  }, [showFormModal]);

  return (
    <Modal show={showFormModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{formModalType} Tugas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlJudul">
            <Form.Label>Judul</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="judul"
              placeholder="Masukkan judul tugas"
              onChange={handleInputChange}
              value={formValues.judul ? formValues.judul : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlDeskripsi">
            <Form.Label>Masukkan Deskripsi Tugas</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="deskripsi"
              placeholder="Masukkan deskripsi tugas"
              onChange={handleInputChange}
              value={formValues.deskripsi ? formValues.deskripsi : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlDeskripsi">
            <Form.Label>Tenggat Waktu Pengumpulan</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="tenggat"
              placeholder="dd/mm/yyyy hh:mm"
              onChange={handleInputChange}
              value={formValues.tenggat ? formValues.tenggat : ""}
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

export default AssignmentFormModal;
