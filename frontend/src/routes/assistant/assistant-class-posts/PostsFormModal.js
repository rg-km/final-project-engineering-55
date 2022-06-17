import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from "react-bootstrap";

const PostsFormModal = ({
    postId,
    postsList,
    setPostsList,
    showFormModal,
    setShowFormModal,
    formModalType,
}) => {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
      setPostsList([
        {
          id: postsList.length + 1,
          ...formValues,
        },
        ...postsList,
      ]);
    } else {
        setPostsList(
        postsList.map((post) =>
          post.id === postId
            ? {
                ...post,
                ...formValues,
              }
            : post
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
      setFormValues(postsList.find((post) => post.id === postId));
    }
  }, [showFormModal]);

  return (
    <div>
      <Modal show={showFormModal} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{formModalType} Materi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlDescription">
                <Form.Label>Keterangan</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Keterangan Materi"
                onChange={handleInputChange}
                value={formValues.description ? formValues.description : ""}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlFile">
                <Form.Label>File</Form.Label>
                <Form.Control
                type="file"
                name="file"
                placeholder="Masukkan NIM"
                onChange={handleInputChange}
                // value={formValues.file ? formValues.file : ""}
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
    </div>
  )
}

export default PostsFormModal
