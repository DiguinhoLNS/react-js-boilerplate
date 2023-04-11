import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { mdiMenuDown } from '@mdi/js'
import { Icon as MdiIcon } from '@mdi/react'
import createClassName from '@utils/createClassName'
import { SelectProps } from './types'
import './styles.scss'

const Select = <P extends unknown, K>({
    type = 'default',
    defaultValue,
    label,
    placeholder,
    fieldName,
    setValue,
    setFieldValue,
    onChange,
    value,
    status,
    items
}: SelectProps<P, K>) => {

    const labelRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const [positions, setPositions] = useState<DOMRect>()

    const selectLabel = useMemo(() => {
        return placeholder ?? label ?? 'Selecionar'
    }, [label, placeholder])

    const selectContainerClasses = createClassName(['selectLabelContainer', type], [
        open && 'open', ((status && type === 'outline') && ` status ${status}`)
    ])

    const handleOpen = useCallback(() => {
        if(open) setOpen(false)
        else setOpen(true)
    }, [open])

    const handleClick = useCallback(({ value }: any) => {
        if(!!setValue) setValue(value)
        if(!!setFieldValue && fieldName) setFieldValue(fieldName, value)
        if(!!onChange) onChange(value)
        setOpen(false)
    }, [setValue, setFieldValue, onChange, fieldName])

    useEffect(() => {
        if(defaultValue){
            if(!!setValue) setValue(defaultValue)
            if(!!setFieldValue && fieldName) setFieldValue(fieldName, defaultValue)
        }
    }, [setValue, setFieldValue, fieldName, defaultValue])

    useEffect(() => {
        if(labelRef && labelRef.current) setPositions(labelRef.current.getBoundingClientRect())
    }, [items, open])

    return(

        <>
            <div className = "selectWrapper">
                {!!label && <span className = "selectTitleLabel">{label}</span> }
                <div ref = {labelRef} className = {selectContainerClasses} onClick = {handleOpen}>
                    <span className = "selectLabel">
                        {(items.some(item => item.value === value as unknown as K) ? items.find(item => item.value === value as unknown as K)!.label : selectLabel) ?? selectLabel}
                    </span>
                    <span className = {`selectIcon${open ? ' open' : ''}`}>
                        <MdiIcon path = {mdiMenuDown} size = "24px" />
                    </span>
                </div>
                {(open && items.length > 0) && (
                    <ClickAwayListener onClickAway = {() => setOpen(false)}>
                        <ul 
                            className = {`selectItemsContainer scroll${open ? ' open' : ''}`} 
                            style = {{ width: positions?.width }}
                        >
                            {items.map((item, index) => 
                                <li
                                    key = {index}
                                    className = {`selectItem${item.value === value as unknown as K ? ' selected' : ''}`}
                                    onClick = {() => handleClick(item)}
                                >{item.label}</li>
                            )}
                        </ul>
                    </ClickAwayListener>
                )}
            </div>
        </>

    )

}

export default Select