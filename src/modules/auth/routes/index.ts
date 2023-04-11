import { RouteType } from "@routes/interfaces"

const authRoutes: RouteType[] = [
    {
        key: 'login',
        path: 'login',
        title: 'Login',
        type: 'center',
        name: 'login',
    },
    {
        key: 'register',
        path: 'register',
        title: 'Register',
        type: 'center',
        name: 'register',
    },
]

export default authRoutes