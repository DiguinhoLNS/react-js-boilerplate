import React from "react"

export interface ContainerProps {
    direction?: 'column' | 'row'
    align?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    children: React.ReactNode
    width?: string | number
    padding?: boolean
    margin?: boolean
}