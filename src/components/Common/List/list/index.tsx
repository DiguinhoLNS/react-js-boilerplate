import React from 'react'
import { firstLetterToUpperCase } from '@utils/format'
import { ListProps } from '../types'
import '../styles.scss'

const List: React.FC <ListProps> = ({ children, name }) => {

    return <div id = {`list${firstLetterToUpperCase(name)}`} className = "listContainer scroll">{children}</div>

}

export default List