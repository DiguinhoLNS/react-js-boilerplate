export type SelectItem<T> = {
    value: T
    label: string
}

export type SelectProps<T, P> = {
    type?: 'default' | 'outline'
    label?: string
    placeholder?: string
    value: T
    defaultValue?: T
    fieldName?: string
    setValue?: (value: T) => void
    setFieldValue?: (field: string, value: T, shouldValidate?: boolean | undefined) => void
    onChange?: (value: T) => void
    status?: string
    items: SelectItem<P>[]
}