import React from 'react'
import MaskedInput from "react-text-mask"
import { ErrorMessage, Field } from 'formik'
import createClassName from '@utils/createClassName'
import { FormGroupProps } from '../types'

const FormGroup: React.FC <FormGroupProps> = ({ children, error, inputID, inputRows, inputName, inputType, inputPlaceholder, disabled, label, readonly, onChange, right, mask, handleChange }) => {

    const inputRef = React.createRef<HTMLInputElement>()

    const inputClasses = createClassName(['formGroup', inputName], [readonly && 'status disabled', error && 'error'])

    const inputProps = {
        id: inputID,
        name: inputName,
        className: readonly ? 'status disabled' : '',
        type: inputType ?? 'text',
        placeholder: inputPlaceholder,
        disabled
    }

    React.useEffect(() => {
        if(inputRef.current && readonly) inputRef.current.setAttribute('readonly', 'readonly')
    }, [inputRef, readonly])

    return(

        <li className = {inputClasses}>
            <label htmlFor = {inputID}>{label}</label>
            <div className = "inputWrapper">
                {children ?? (
                    (inputType === 'textarea' && <Field {...inputProps} innerRef = {inputRef} rows = {inputRows} component = "textarea" onKeyUp = {onChange} />) || (
                        (!!mask && (
                            <Field
                                name = {inputName}
                                innerRef = {inputRef}
                                onKeyUp = {onChange}
                                render = {({ field }: any) => (
                                    <MaskedInput
                                        {...field}
                                        mask = {mask}
                                        id = {inputID}
                                        type = {inputType ?? 'text'}
                                        placeholder = {inputPlaceholder}
                                        onChange = {handleChange}
                                    />
                                )}
                            />
                        )) || (
                            <Field {...inputProps} innerRef = {inputRef} onKeyUp = {onChange} />
                        )
                    )
                )}
                {right}
            </div>
            <ErrorMessage name = {inputName} component = "h6" />
        </li>

    )

}

export default FormGroup