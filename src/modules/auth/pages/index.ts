import { RoutePageType } from "@routes/interfaces"
import Login from "../pages/Login"
import Register from "../pages/Register"

const authPages: RoutePageType[] = [
    {key: 'login', element: Login},
    {key: 'register', element: Register},
]

export default authPages