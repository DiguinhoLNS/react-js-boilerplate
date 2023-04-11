import React from 'react'
import { SidebarGroupProps } from '../../types'
import SidebarLink from '../Link'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { toggleSidebarSection } from '@modules/app/reducers/appReducer'

const SidebarGroup: React.FC <SidebarGroupProps> = ({ children, routeKey, icon, title }) => {

    const dispatch = useAppDispatch()
    const { sidebarSections } = useAppSelector(s => s.app)

    return(

        <div className = "sidebarGroupWrapper">
            <SidebarLink
                type = "header"
                icon = {icon}
                title = {title}
                open = {sidebarSections[routeKey]}
                onClick = {() => dispatch(toggleSidebarSection(routeKey))}
            />
            {sidebarSections[routeKey] && children}
        </div>

    )

}

export default SidebarGroup