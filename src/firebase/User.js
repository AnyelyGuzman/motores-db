import Index from './Index'
import config from "./config.json"
import firebase from 'firebase'

export default class User extends Index {

  constructor() {
    super()
    this.users = this.database.ref("usuarios")
  }

  /**
   *  
   * @param { nombre: String, edad: Number, correo: String, usuario: String, contrasena: string } obj 
   * @description Permite la insercion en firebase de los datos del usuario
   */
  insert(obj) {
    this.users.push(obj)
  }

  getAll() {
    this.users.on('value', value => {
      console.log(value.val())
    })
  }

  edit(obj) {
    this.users.child('').set(obj)
  }

}