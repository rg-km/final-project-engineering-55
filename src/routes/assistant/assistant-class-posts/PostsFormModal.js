import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";

const PostsFormModal = ({show, handleClose}) => {
    const handleFileChange = (e) => {
        e.preventDefault()
      }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Materi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="ControlNama">
                        <Form.Label>Keterangan</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Keterangan Materi"
                        autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlDeskripsi">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                        type="file"
                        name="nim"
                        placeholder="Masukkan NIM"
                        onChange={handleFileChange}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Keluar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PostsFormModal
