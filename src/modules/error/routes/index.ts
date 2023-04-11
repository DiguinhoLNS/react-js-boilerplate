import { RouteType } from "@routes/interfaces"

const errorRoutes: RouteType[] = [
    {
        key: 'error',
        path: 'error',
        subRoutes: [
            {key: 'error', path: ':idError', title: 'Ocorreu um erro'},
        ]
    }
]

export default errorRoutes