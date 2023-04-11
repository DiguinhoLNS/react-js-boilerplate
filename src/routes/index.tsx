import React, { Fragment } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import PageRender from '@components/Page/Render'
import Error from '@modules/error/pages/Error'
import getUser from '@modules/auth/scripts/getUser'
import configTheme from '@modules/theme/scripts/configTheme'
import { useAppDispatch } from '@redux/hooks'
import { routes } from './routes'
import ProtectedRoute from './components/ProtectedRoute'
import { ROUTE_INDEX } from '../config'

const AppRoutes: React.FC = () => {

    const dispatch = useAppDispatch()

    configTheme(dispatch, true)
    getUser(dispatch)
    
    return(

        <BrowserRouter>
            <Routes>
                <Route index element = {<Navigate to = {ROUTE_INDEX} />} />
                {routes.map((route, index) => (
                    <Fragment key = {index}>
                        {(route.subRoutes && (
                            <Route path = {route.path}>
                                {route.subRoutes.map((subRoute, subIndex) => (
                                    <Route key = {subIndex} path = {subRoute.path} element = {(() => {
                                        if(subRoute.userVerification) return <ProtectedRoute><PageRender {...subRoute} pageKey = {subRoute.key} /></ProtectedRoute>
                                        return <PageRender {...subRoute} pageKey = {subRoute.key} />
                                    })()} />
                                ))}
                            </Route>
                        )) || (
                            <Route path = {route.path} element = {(() => {
                                if(route.userVerification) return <ProtectedRoute><PageRender {...route} pageKey = {route.key} /></ProtectedRoute>
                                return <PageRender {...route} pageKey = {route.key} />
                            })()} />
                        )}
                    </Fragment>
                ))}
                <Route path = "*" element = {<Error idError = "http-404" />} />
            </Routes>
        </BrowserRouter>

    )

}

export default AppRoutes