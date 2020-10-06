import Login from './login/Login'
import Register from './register/Register'
import Blog from './blog/Blog'


const routes = [
    { path: "/", component: Login, exact: true },
    { path: "/registro", component: Register, exact: true },
    { path: "/blog", component: Blog, exact: true}
]

export default routes