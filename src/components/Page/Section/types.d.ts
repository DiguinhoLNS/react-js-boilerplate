export interface SectionProps {
    children: React.ReactNode
    direction?: 'column' | 'row'
    align?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    padding?: boolean
    name?: string
}

export type SectionBoxProps = {
    children: React.ReactNode
    direction?: 'column' | 'row'
    goBack?: boolean
    padding?: boolean
    title?: string
    right?: JSX.Element
    toggleShowContent?: boolean
}

export type SectionOptionProps = {
    icon: string
    tooltip: string
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export type SectionBoxDataProps = {
    children: React.ReactNode
    title?: string
    padding?: boolean
}