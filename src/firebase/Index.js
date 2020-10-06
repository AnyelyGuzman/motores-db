import config from "./config.json"
import firebase from 'firebase'

export default class Index {

  constructor() {
    if (!firebase.apps.length) firebase.initializeApp(config)
    // this.database = firebase.database()
    this.database = firebase
  }
}