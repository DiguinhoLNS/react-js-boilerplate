import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@material-ui/core'
import Icon from '@mdi/react'
import { CircleSpinner } from 'react-spinners-kit'
import { ListOptionProps } from '../types'

const ListOptionContainer: React.FC <ListOptionProps> = ({ loading, icon, status, link, onClick }) => {
    return(
        <>
            {(loading && (
                <div className = "listOption loading">
                    <CircleSpinner size={20} color="grey" />
                </div>
            )) || (!!link && (
                <div className = {`listOption${status ? ` status ${status}` : ''}`} onClick = {e => onClick(e)}>
                    <Link to = {link}>
                        <Icon path = {icon} size = "20px" />
                    </Link>
                </div>
            )) || (
                <div className = {`listOption${status ? ` status ${status}` : ''}`} onClick = {e => onClick(e)}>
                    <Icon path = {icon} size = "20px" />
                </div>
            )}
        </>
    )
}

const ListOption: React.FC <ListOptionProps> = ({ tooltip, ...props }) => {

    return(
        <>
            {(tooltip && (
                <Tooltip title = {tooltip} placement="top" arrow>
                    <div>
                        <ListOptionContainer {...props} />
                    </div>
                </Tooltip>
            )) || <ListOptionContainer {...props} />}
        </>
    )

}

export default ListOption