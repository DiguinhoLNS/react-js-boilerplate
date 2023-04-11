import React from 'react'

export interface PageRenderPattern {
    children?: React.ReactNode
    pageKey: string
    title: string
    type?: 'default' | 'center' | 'error' | 'form'
    path: string
    name: string
    userVerification?: boolean
    authVerification?: boolean
}

export type PageRenderProps = Partial<PageRenderPattern>