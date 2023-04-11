import React from 'react'
import { ListColumnProps } from '../types'

const ListColumn: React.FC <ListColumnProps> = ({ children, center, text }) => {

    return <li className = {`listColumn ${center ? 'center' : ''}`}>{children ?? text}</li>

}

export default ListColumn