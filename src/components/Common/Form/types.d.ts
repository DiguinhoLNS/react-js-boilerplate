import React, { ReactNode } from "react"

export interface FormBoxProps {
    children: React.ReactNode
}

export interface FormSectionProps {
    children: React.ReactNode
    title?: string
}

export type FormContainerProps = {
    children: React.ReactNode
    title?: string
    padding?: boolean
}

export type FormRowProps = {
    children: React.ReactNode
    grid?: string
    columns: number
}

export type FormGroupProps = {
    children?: React.ReactNode
    error?: boolean
    label: string
    inputID: string
    inputName: string
    inputRows?: number
    inputType?: string
    inputPlaceholder?: string
    disabled?: boolean
    readonly?: boolean
    onChange?: Function
    right?: ReactNode
    
    mask?: (string | RegExp)[]
    handleChange?: React.ChangeEventHandler<HTMLInputElement>
}

export interface FormMap {
    grid?: string
    data: FormGroupProps[]
}

export type FormRenderProps = {
    render: FormMap[]
    title?: string
}