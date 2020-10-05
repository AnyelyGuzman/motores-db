import Login from './login/Login'
import Register from './register/Register'


const routes = [
    { path: "/", component: Login, exact: true },
    { path: "/registro", component: Register, exact: true }
]

export default routes