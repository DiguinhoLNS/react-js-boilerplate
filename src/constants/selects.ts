import { SelectItem } from "@components/Common/Select/types"

export const activeItems: SelectItem<String>[] = [
    {label: 'Habilitado', value: '1'},
    {label: 'Desabilitado', value: '0'},
]

export const coberturaFiscalItems: SelectItem<boolean>[] = [
    {label: 'Sim', value: true},
    {label: 'Não', value: false},
]