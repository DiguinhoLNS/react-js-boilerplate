import React from 'react'
import { ListSectionProps } from '../types'

const ListSection: React.FC <ListSectionProps> = ({ children, type = 'main' }) => {
    return <ul className = {`listSection ${type}`}>{children}</ul>
}

export default ListSection