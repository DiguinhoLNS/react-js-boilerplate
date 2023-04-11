import React from 'react'
import { Link } from 'react-router-dom'
import createClassName from '@utils/createClassName'
import { ListRowProps } from '../types'

const ListRow: React.FC <ListRowProps> = props => {

    return(

        <li className = {`listRow ${!!props.zebra ? 'zebra' : ''}`} onClick = {props.onClick}>
            {(props.link && (
                <Link to = {props.link}>
                    <Container {...props} />
                </Link>
            )) || <Container {...props} />}
        </li>

    )

}

const Container: React.FC <ListRowProps> = ({ children, padding = true, grid, status, omitColumns }) => {

    const newGrid = omitColumns && omitColumns.length > 0 ? grid.split(' ').filter((item, index) => !omitColumns.includes(index)).join(' ') : grid
    const newChildren = omitColumns && omitColumns.length > 0 ? (children as any[]).filter((item, index) => !omitColumns.includes(index)) : children

    const rowClasses = createClassName('listRowContainer', [padding ? 'padding' : 'noPadding', status && `status-${status}`])

    return <ul className = {rowClasses} style = {{gridTemplateColumns: newGrid}}>{newChildren}</ul>

}

export default ListRow