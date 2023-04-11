import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@mdi/react'
import { mdiMenuRight } from '@mdi/js'
import createClassName from '@utils/createClassName'
import { SidebarLinkProps } from '../../types'

const SidebarLinkContent: React.FC <SidebarLinkProps> = ({ type = 'default', icon, title, open }) => {

    return(

        <div className = "sidebarLinkContent">
            <div className = "sidebarLinkIcon">
                {icon && <Icon path = {icon} size = "28px" />}
            </div>
            <div className = "sidebarLinkTitle">{title}</div>
            {(type === 'header' && open !== undefined) && (
                <div className = {createClassName(['sidebarLinkControl'], [!!open && 'open'])}>
                    <Icon path = {mdiMenuRight} size = "24px" />
                </div>
            )}
        </div>

    )

}

const SidebarLink: React.FC <SidebarLinkProps> = props => {

    const { type = 'default', link } = props

    return(

        <div className = {createClassName(['sidebarLink', type])} onClick = {props.onClick} >
            {(!!link && (
                <NavLink to = {link} end>
                    <SidebarLinkContent {...props} />
                </NavLink>
            )) || <SidebarLinkContent {...props} />}
        </div>

    )

}

export default SidebarLink