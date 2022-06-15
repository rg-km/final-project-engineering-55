import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AssignmentFormModal = (props) => {
  const {
    kuisList,
    setKuisList,
    showFormModal,
    setShowFormModal,
    formModalType,
    kuisId,
  } = props;

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
      setKuisList([
        {
          id: kuisList.length + 1,
          ...formValues,
        },
        ...kuisList,
      ]);
    } else {
      setKuisList(
        kuisList.map((kuis) =>
          kuis.id === kuisId
            ? {
                ...kuis,
                ...formValues,
              }
            : kuis
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
      setFormValues(kuisList.find((kuis) => kuis.id === kuisId));
    }
  }, [showFormModal]);

  return (
    <Modal show={showFormModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{formModalType} Kuis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlJudul">
            <Form.Label>Judul</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="judul"
              placeholder="Masukkan judul kuis"
              onChange={handleInputChange}
              value={formValues.judul ? formValues.judul : ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlDeskripsi">
            <Form.Label>Masukkan Deskripsi kuis</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="deskripsi"
              placeholder="Masukkan deskripsi kuis"
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
