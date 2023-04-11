import { RouteType } from "./interfaces"
import authRoutes from "@modules/auth/routes"
import homeRoutes from "@modules/home/routes"
import errorRoutes from "@modules/error/routes"

const routes: RouteType[] = [
    ...homeRoutes,
    ...authRoutes,
    ...errorRoutes,
]

const routesKeys = routes.reduce((acc: string[], route) => {
    acc.push(route.key)
    if (route.subRoutes) route.subRoutes.forEach(subRoute => acc.push(subRoute.key))
    return acc
}, [])

const validationRoutesKeys = ['']
const notShowRoutesKeys = [
    ...authRoutes.map(i => i.key),
    ...errorRoutes.map(i => i.key),
]

export { routes, routesKeys, validationRoutesKeys, notShowRoutesKeys }