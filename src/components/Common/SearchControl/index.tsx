import React from 'react'
import { mdiClose, mdiMagnify } from '@mdi/js'
import ButtonGroup from '../Button/Group'
import Button from '../Button'
import { SearchControlProps } from './types'

const SearchControl: React.FC <SearchControlProps> = ({ loading }) => {

    return(

        <ButtonGroup>
            <Button
                icon = {mdiClose}
                type = "reset"
            />
            <Button
                icon = {mdiMagnify}
                type = "submit"
                loading = {loading}
                status = {loading ? 'disabled' : 'success'}
            />
        </ButtonGroup>

    )

}

export default SearchControl