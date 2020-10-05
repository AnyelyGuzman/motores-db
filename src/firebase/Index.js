import config from "./config.json"
import firebase from 'firebase'

export default class Index {

  constructor() {
    this.firebaseConfig = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
      appId: config.appId,
      measurementId: config.measurementId
    }

    if (!firebase.apps.length) firebase.initializeApp(this.firebaseConfig)

    this.database = firebase.database()
  }
}