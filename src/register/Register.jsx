import React  from 'react'
import './register.css'

//router dom components
import { Link } from 'react-router-dom'

//Bootstrap components 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//services
import User from '../firebase/User'

export default class Register extends React.Component{

  constructor(){
    super()
    this.state = {
      nombre: '',
      edad: 0,
      correo: '',
      usuario: '',
      contrasena: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.users = new User()
  }

  handleClick(e) {
    e.preventDefault()
    // this.users.insert({
    //   nombre: this.state.nombre,
    //   edad: this.state.edad,
    //   correo: this.state.correo,
    //   usuario: this.state.usuario,
    //   contrasena: this.state.contrasena
    // })

    this.users.getAll()
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
        </section>
        <section className="formulario">
          <div className="con_for">
            <h1>Registrate</h1>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control type="text" placeholder="Nombre Completo" id="nombre" onChange={this.handleChange} value={this.state.nombre} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" id="edad" onChange={this.handleChange} value={this.state.edad} placeholder="Edad" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="text" id="correo" onChange={this.handleChange} value={this.state.correo} placeholder="Correo Electronico" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" id="usuario" onChange={this.handleChange} value={this.state.usuario} placeholder="Usuario" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" id="contrasena" onChange={this.handleChange} value={this.state.contrasena} placeholder="Contraseña" />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={ this.handleClick }>
              Registrar
            </Button>
            <Link to="/">
              <Button className="btn-login" variant="dark" type="submit">
                Login
              </Button>
            </Link>
          </div>
        </section> 
      </>
    )
  }
}
