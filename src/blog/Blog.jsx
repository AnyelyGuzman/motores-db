import React  from 'react'
import './blog.css'

//Bootstrap components 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class Blog extends React.Component{

    render() {
            return (
                <>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="letra-nv" href="#home">Mis Publicaciones</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Navbar.Brand className="letra-nav" href="#home">Otras Publicaciones</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

                    <div className="conten-card">
                    <Card style={{ width: '1000px', margin:'auto', height: '300px' }}> 
                    <Card.Img style={{ width: '1000px', margin:'auto', maxHeight: '200px' }} variant="top" src="paisaje.png" /> 
                        <Card.Body style={{ display: 'flex' }}>
                        <Button style={{ margin: 'auto' }} variant="primary">Haz tu primer publicacion</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </>
            )
    }
}