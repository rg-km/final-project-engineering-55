import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const MemberFormModal = (props) => {
  const {
    memberList,
    setMemberList,
    showFormModal,
    setShowFormModal,
    formModalType,
    memberId,
  } = props;

  const [formValues, setFormValues] = useState({});

  const onCloseModal = () => {
    setShowFormModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
      setMemberList([
        {
          id: memberList.length + 1,
          ...formValues,
        },
        ...memberList,
      ]);
    }
    setShowFormModal(false);
  };

  useEffect(() => {
    if (formModalType === "Tambah") {
      setFormValues({});
    }
  }, [showFormModal]);

  return (
    <Modal show={showFormModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Anggota</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlNama">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="nama"
              placeholder="Masukkan anggota"
              onChange={handleInputChange}
              value={formValues.nama ? formValues.nama : ""}
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

export default MemberFormModal;
