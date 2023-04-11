import React from "react"

export type SidebarSectionProps = {
    icon: string
    title: string
}

export type SidebarOptionProps = {
    type?: 'default' | 'header'
    icon?: string
    label: string
    open?: boolean
    link?: string
    func?: () => void
}

export interface SidebarGroupProps {
    children: React.ReactNode
    routeKey: string
    icon: string
    title: string
}

export interface SidebarLinkProps {
    type?: 'default' | 'header'
    link?: string
    icon?: string
    title: string
    open?: boolean
    onClick?: () => void
}