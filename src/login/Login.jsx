import React from 'react'
import './login.css'

//router dom components
import { Link } from 'react-router-dom'

//Bootstrap components 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//services
import User from '../firebase/User'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      correo: '',
      contrasena: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.users = new User()
  }

  async handleClick(e) {
    e.preventDefault()

    const response = await this.users.login({
      correo: this.state.correo,
      contrasena: this.state.contrasena
    })

    if(response && response.operationType === "signIn") this.props.history.push("/blog")
    else this.setState({ error: true })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
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
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" id="correo" onChange={ this.handleChange } placeholder="Ingrese su usuario" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" id="contrasena" onChange={ this.handleChange } placeholder="Ingrese su contraseña" />
              </Form.Group>

              {
                this.state.error && <p class="error">Datos incorrectos</p>
              }

              <Button variant="dark" type="submit" onClick={ this.handleClick }>
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
