export type ModalAction = {
    theme?: 'default' | 'outline'
    label: string
    onClick: Function
}

export type ModalProps = {
    children: React.ReactNode
    zIndex?: number
    width?: number | string
    open: boolean
    setOpen: Function
    title: string
    actions?: ModalAction[]
    onClose?: () => void
}