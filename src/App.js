import React from 'react'
import './App.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import firebase from 'firebase'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      contrasena: '',
      name: ''
    }
  }

  // componentWillMount (){
  //   const nameref = firebase.database().ref().child('object').child('name') 

  //   nameref.on('value', value => {
  //     this.setState({
  //       name:value.val()
  //     })
  //   })
  // }

  render() {
    return (
      <>
        {/* <section className="description">
          <h1>Application</h1>
          <h1>Login Page</h1>
          <h1>{this.state.name}</h1>
        </section>
        <section className="formulario">
         <div className="con_for">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su usuario" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Ingresar
            </Button>
            <Button className="btn-register" variant="dark" type="submit">
              Registrarse
            </Button>
          </Form> 

          <h1>Registrarse</h1>
          <br/>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Nombre Completo" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" placeholder="Edad" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="text" placeholder="Correo Electronico" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Registrar
            </Button>
            <Button className="btn-login" variant="dark" type="submit">
              Login
            </Button>
          </Form>
          </div>
        </section> 

        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="letra-nv" href="#home">Mis Publicaciones</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Navbar.Brand className="letra-nav" href="#home">Otras Publicaciones</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>*/}

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