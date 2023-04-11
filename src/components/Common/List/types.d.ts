import { ConditionalRenderPattern } from "@utils/conditionalRender/types"

export type ListProps = {
    children: React.ReactNode
    name: string
}

export type ListSectionProps = {
    children: React.ReactNode
    type?: 'header' | 'main'
}

export type ListRowProps = {
    children: React.ReactNode
    link?: string
    zebra?: boolean
    padding?: boolean
    grid: string
    omitColumns?: number[]
    status?: 'error' | 'warning' | 'info' | 'success' | 'disabled'
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void
}

export type ListColumnProps = {
    children: React.ReactNode
    center?: boolean
    text?: string
}

export type ListOptionProps = {
    tooltip?: string | null
    loading?: boolean | null
    icon: string
    link?: string
    status?: 'error' | 'warning' | 'info' | 'success' | 'disabled'
    onClick: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export type ListInputProps = {
    inputID: string
    inputName: string
    inputType?: string
    setFieldValue?: Function
    value?: string
}

export type ListMessageProps = {
    text: string
}

export interface ListConfig {
    name: string
    grid: string
    columns: string[]
    omitColumns: number[]
}

export interface ListPaginatorProps<T> {
    data: T[] | null
    loading?: boolean
    CR?: ConditionalRenderPattern
    header?: JSX.Element
    renderItem: (item: T, index: number) => JSX.Element
}

export interface ListConfigProps {
    listConfig: ListConfig 
    setListConfig: (configs: ListConfig) => void
}