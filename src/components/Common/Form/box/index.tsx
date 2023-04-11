import React from 'react'
import { FormBoxProps } from '../types'

const FormBox: React.FC <FormBoxProps> = ({ children }) => {

    return <div className = "formBox">{children}</div>

}

export default FormBox