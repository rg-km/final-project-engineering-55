import React from 'react'
import { Link} from "react-router-dom";
import HomePageImage from '../assets/home-page.jpg'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
        <header className='header-wrapper'>
          <h1 className='header-content'>VLab</h1>
        </header>
        <hr/>
        <main className='main-wrapper'>
          <Container>
            <Row>
              <Col>
                <h2 className='main-heading'>
                  Praktikum dimana saja, kapan saja, dan dengan siapa saja
                </h2>
                <p className='main-content'>
                  VLab adalah sebuah Learning Management System (LMS) yang dikembangkan
                  khusus untuk memfasilitasi proses pembelajaran praktikum virtual atau tanpa tatap muka.
                  Dengan fitur ini, asisten praktikum dapat memberikan bahan ajar yang dapat diakses dan
                  dibagikan oleh siswa dalam bentuk digital kapan saja dan di mana saja.
                </p>
                <footer className='main-footer'>
                  <Link to="/sign-up-option">
                    <Button variant="dark" size='large' className='main-footer-button rounded-0'>
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="dark" size='large' className='main-footer-button rounded-0'>
                      Log In
                    </Button>
                  </Link>
                </footer>
              </Col>
              <Col>
                <img src={HomePageImage} className="main-img"/>
              </Col>
            </Row>
          </Container>
        </main>
    </div>
  )
}

export default Homepage
