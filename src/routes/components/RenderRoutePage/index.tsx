import React from 'react'
import { Navigate } from 'react-router-dom'
import { RenderRoutePageProps } from './types'
import { routesKeys } from '../../routes'
import routesPages from '../../pages'
    
const RenderRoutePage: React.FC <RenderRoutePageProps> = ({ name }) => {
    if(routesKeys.includes(name) && routesPages.find(page => page.key === name)){
        const Page = routesPages.find(page => page.key === name)!.element
        return <Page />
    }else return <Navigate to = "/error/system-404" />
}

export default React.memo(RenderRoutePage, (prevProps, nextProps) => prevProps.name === nextProps.name)