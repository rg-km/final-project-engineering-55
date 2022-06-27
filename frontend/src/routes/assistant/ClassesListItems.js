import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from 'react-icons/ai';

const ClassesListItems = ({
    id,
    classes,
    classItem,
    setClasses,
    setFormModalType,
    setShowFormModal,
    setClassId,
}) => {

    const onClickEdit = () => {
        setFormModalType("Edit");
        setShowFormModal(true);
        setClassId(id);
    };

    const handleRemoveItem = (id) => {
        setClasses(classes.filter(item => item.id !== id));
    };

    return (
        <div>
            <Card className='assistant-classes-items shadow-sm'>
                <ListGroup variant="flush" className='assistant-classes-link'>
                <Link
                    to="/assistant/main/classes/posts"
                    style={{textDecoration: 'none'}}>
                <ListGroup.Item className='classes-background'>
                    <span className='classes-items'>
                    <h3>{classItem.kelas}</h3>
                    <h5>
                    {classItem.jurusan}
                    </h5>
                    </span>
                </ListGroup.Item>
                </Link>
                <ListGroup.Item >
                    <span className='action-class-button'>
                    <Button
                        variant="outline-dark"
                        onClick={onClickEdit}
                    >
                    <BiEditAlt/> Edit
                    </Button>
                    &nbsp;
                    <Button
                        variant="outline-dark"
                        onClick={handleRemoveItem.bind(this, id)}
                    >
                        <AiOutlineDelete/> Hapus
                    </Button>
                    </span>
                </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ClassesListItems
