import React from 'react'
import './styles.scss'
import { ContainerProps } from './types'
import createClassName from '@utils/createClassName'

const Container: React.FC <ContainerProps> = ({
    children,
    direction = 'column',
    align = 'start',
    width,
    padding = true,
    margin
}) => {

    const containerClasses = createClassName(
        ['container-wrapper', direction, align],
        [padding && 'padding', margin && 'margin']
    )

    return <div className = {containerClasses} style = {{width}}>{children}</div>

}

export default Container