import React from 'react'
import { FormSectionProps } from '../types'

const FormSection: React.FC <FormSectionProps> = ({ children, title }) => {

    return(

        <div className = "formSection">
            {!!title && <span className = "formSectionTitle">{title}</span>}
            <div className = "formSectionContent">{children}</div>
        </div>

    )

}

export default FormSection