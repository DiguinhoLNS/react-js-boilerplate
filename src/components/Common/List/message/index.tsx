import React from 'react'
import { ListMessageProps } from '../types'
import ListRow from '../row'
import ListColumn from '../column'

const ListMessage: React.FC <ListMessageProps> = ({ text }) => {

    return(

        <ListRow grid = "1fr">
            <ListColumn center>{text}</ListColumn>
        </ListRow>

    )

}

export default ListMessage