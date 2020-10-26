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

  constructor(props){
    super(props)
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
    
    const response = await this.users.register({
      correo: this.state.correo,
      contrasena: this.state.contrasena
    })

    if(response && response.operationType === "signIn") this.props.history.push("/")
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
        </section>
        <section className="formulario">
          <div className="con_for">
            <h1>Registrate</h1>
            <br />
            
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" id="correo" onChange={this.handleChange} value={this.state.correo} placeholder="Correo Electronico" />
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" id="contrasena" onChange={this.handleChange} value={this.state.contrasena} placeholder="Contraseña" />
            </Form.Group>

            {
              this.state.error && <p class="error">La contraseña debe contener como minimo 6 caracteres</p>
            }

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
