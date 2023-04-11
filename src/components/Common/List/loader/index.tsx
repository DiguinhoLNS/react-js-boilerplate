import React from 'react'
import { CircleSpinner } from 'react-spinners-kit'
import ListRow from '../row'
import ListColumn from '../column'

const ListLoader: React.FC = () => {

    return(

        <ListRow grid = "1fr">
            <ListColumn center><CircleSpinner size = {32} color = "grey" /></ListColumn>
        </ListRow>

    )

}

export default ListLoader