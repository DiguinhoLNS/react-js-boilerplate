import React from 'react'

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    link?: string
    preventDefault?: boolean
    target?: '_blank' | '_self' | '_parent' | '_top'
    theme?: 'default' | 'outline'
    icon?: string
    label?: string
    status?: 'success' | 'error' | 'warning' | 'info' | 'disabled'
    loading?: boolean
    onClick?: Function
}