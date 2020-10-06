import Index from './Index'

export default class User extends Index {

  constructor() {
    super()
    this.users = this.database.auth()
  }

  /**
   *  
   * @param { correo: String, contrasena: string } obj 
   * @description Permite el registro de un usuario
   */
  async register(obj) {
    try {
      const resp =  await this.users.createUserWithEmailAndPassword(obj.correo, obj.contrasena)
      return resp
    }catch(e) {
      console.log(e)
    }
  }

  /**
   *  
   * @param { correo: String, contrasena: string } obj 
   * @description Permite el logueo de un usuario
   */
  async login(obj) {
    try {
      const resp = await this.users.signInWithEmailAndPassword(obj.correo, obj.contrasena)
      return resp
    } catch (e) {
      console.log(e)
    }
  }
}