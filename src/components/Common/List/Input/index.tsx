import React from 'react'
import { Field } from 'formik'
import { ListInputProps } from '../types'

const ListInput: React.FC <ListInputProps> = ({ inputID, inputName, inputType }) => {

    const inputProps = {
        id: inputID,
        name: inputName,
        type: inputType ?? 'text',
    }

    return <Field {...inputProps} />

}

export default ListInput