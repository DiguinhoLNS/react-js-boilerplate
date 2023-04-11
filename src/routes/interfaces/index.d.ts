import React from "react"
import { PageRenderProps } from "../../components/Page/Render/types"

export interface RoutePageType {
    key: string
    element: React.FC<any>
}

export type RouteType = PageRenderProps & {
    key: string
    path: string
    icon?: string
    showMenu?: boolean
    showSubRoutes?: boolean
    subRoutes?: SubRouteType[]
}

export interface SubRouteType extends Omit<RouteType, 'subRoutes' | 'icon' | 'showSubRoutes'> {
    sidebarTitle?: string
}

export interface RenderRouteType {
    key: string
    path: string
    name: string
    userVerification?: boolean
    authVerification?: boolean
}