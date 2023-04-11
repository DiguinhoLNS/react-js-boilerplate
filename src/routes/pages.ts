import { RoutePageType } from "./interfaces"
import authPages from "@modules/auth/pages"
import homePages from "@modules/home/pages"
import errorPages from "@modules/error/pages"

const routesPages: RoutePageType[] = [
    ...authPages,
    ...homePages,
    ...errorPages,
]

export default routesPages