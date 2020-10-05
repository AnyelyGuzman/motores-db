import React from 'react'
import './login.css'

//router dom components
import { Link } from 'react-router-dom'

//Bootstrap components 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      usuario: '',
      contrasena: '',
      name: ''
    }
  }

  render() {
    return (
      <>
        <section className="description">
          <h1>Application</h1>
          <h1>Login Page</h1>
          <h1>{this.state.name}</h1>
        </section>
        <section className="formulario">
          <div className="con_for">
            <h1>Inicia sesión</h1>
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
              <Link to="/registro">
                <Button className="btn-register" variant="dark" type="submit">
                  Registrarse
                </Button>
              </Link>
            </Form>
          </div>
        </section>
      </>
    )
  }
}  
