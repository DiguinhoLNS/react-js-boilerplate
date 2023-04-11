import React from 'react'
import Icon from '@mdi/react'
import { Tooltip } from '@material-ui/core'
import { SectionOptionProps } from '../types'

const SectionOption: React.FC <SectionOptionProps> = ({ icon, tooltip, onClick }) => {

    return(

        <Tooltip title = {tooltip} arrow>
            <div className = "sectionBoxHeaderOption" onClick = {e => onClick(e)}>
                <Icon path = {icon} size = "28px" />
            </div>
        </Tooltip>

    )

}

export default SectionOption