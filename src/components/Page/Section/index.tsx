import React from 'react'
import { SectionProps } from './types'
import './styles.scss'
import { firstLetterToUpperCase } from '../../../utils/format'
import createClassName from '../../../utils/createClassName'

const Section: React.FC <SectionProps> = ({
    children,
    name,
    direction = 'column',
    align = 'start',
    padding = true
}) => {

    const sectionClasses = createClassName(
        [direction, align], 
        [name && `section${firstLetterToUpperCase(name)}`, padding && `padding`]
    )

    return(

        <section className = {sectionClasses}>
            <div className = "sectionContainer">{children}</div>
        </section>

    )

}

export default Section