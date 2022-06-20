import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { VscChevronLeft } from 'react-icons/vsc'

const BackButton = () => {
    const navigate = useNavigate();
  
    return (
        <div>
            <Button
                variant="outline-dark"
                onClick={() => navigate(-1)}
            >
                <VscChevronLeft/> Back
            </Button>
        </div>
    )
}

export default BackButton
