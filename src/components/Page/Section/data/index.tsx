import React from 'react'
import { SectionBoxDataProps } from '../types'
import createClassName from '../../../../utils/createClassName'

const SectionBoxData: React.FC <SectionBoxDataProps> = ({ children, title, padding = true }) => {

    const sectionBoxDataContentClasses = createClassName('sectionBoxDataContent', [!!padding && 'padding'])

    return(

        <div className = 'sectionBoxDataContainer'>
            {title && <h3 className = "sectionBoxDataTitle">{title}</h3>}
            <div className = {sectionBoxDataContentClasses}>{children}</div>
        </div>

    )

}

export default SectionBoxData