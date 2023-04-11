import React, { useEffect } from 'react'
import { mdiHelp } from '@mdi/js'
import './styles.scss'
import { notShowRoutesKeys, routes } from "@routes/routes"
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { setSidebarSections } from '@modules/app/reducers/appReducer'
import SidebarGroup from './components/Group'
import SidebarLink from './components/Link'
import { APP_VERSION } from '@config/.'

const Sidebar: React.FC = () => {

    const dispatch = useAppDispatch()
    const { sidebarSections } = useAppSelector(s => s.app)

    useEffect(() => {
        if(Object.keys(sidebarSections).length === 0){
            dispatch(setSidebarSections(Object.assign({}, 
                ...routes.filter(f => !notShowRoutesKeys.includes(f.key)).map(i => {
                    return {[i.key]: false}
                })
            )))
        }
    }, [dispatch, sidebarSections])

    return(

        <aside id = "sidebar">
            <div id = "sidebarContainer" className = "overlayScroll">
                <nav id = "sidebarMain">
                    {routes.filter(f => !notShowRoutesKeys.includes(f.key)).map((route, index) => {
                        if(route.subRoutes && (route.showSubRoutes ?? true)){
                            return(
                                <SidebarGroup
                                    key = {index}
                                    routeKey = {route.key}
                                    icon = {route.icon ?? mdiHelp}
                                    title = {route.title ?? 'Error'}
                                >
                                    {route.subRoutes?.filter(f => f.path.indexOf(':id') === -1 && !notShowRoutesKeys.includes(f.key) && f.showMenu !== false).map((subRoute, subIndex) => (
                                        <SidebarLink
                                            key = {subIndex}
                                            type = "default"
                                            link = {`/${route.path}${subRoute.path.length > 0 ? `/${subRoute.path}` : ''}`}
                                            title = {subRoute.sidebarTitle ?? subRoute.title ?? 'Error'}
                                        />
                                    ))}
                                </SidebarGroup>
                            )
                        }
                        return(
                            <SidebarLink
                                key = {index}
                                type = "header"
                                link = {`/${route.path}`}
                                icon = {route.icon ?? mdiHelp}
                                title = {route.title ?? 'Error'}
                            />
                        )
                    })}
                </nav>
                <div id = "sidebarFooter">
                    <span>versão {APP_VERSION.NAME}</span>
                    <span>{APP_VERSION.RELEASE_DATE}</span>
                </div>
            </div>
        </aside>

    )

}

export default Sidebar