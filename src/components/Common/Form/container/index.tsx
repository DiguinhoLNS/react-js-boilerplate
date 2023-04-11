import React from 'react'
import { FormContainerProps } from '../types'
import '../styles.scss'

const FormContainer: React.FC <FormContainerProps> = ({ children, title, padding }) => {

    return(

        <div className = {`formContainer ${typeof padding === 'undefined' ? 'padding' : padding ? 'padding' : ''}`}>
            {title && <h3 className = "formContainerTitle">{title}</h3>}
            {children}
        </div>

    )

}

export default FormContainer