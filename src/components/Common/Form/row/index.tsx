import React from 'react'
import { FormRowProps } from '../types'

const FormRow: React.FC <FormRowProps> = ({ children, grid, columns }) => {

    return <ul className = "formRow" style = {{gridTemplateColumns: grid ?? `repeat(${columns.toString()}, 1fr)`}}>{children}</ul>

}

export default FormRow