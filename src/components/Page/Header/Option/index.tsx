import React from 'react'
import Icon from '@mdi/react'
import { Tooltip } from '@material-ui/core'
import { HeaderOptionProps } from '../types'

const HeaderOption: React.FC <HeaderOptionProps> = ({ icon, label, tooltip, onClick }) => {

    return(

        <Tooltip
            title = {tooltip}
            placement = "bottom"
        >
            <div className = "headerOption" onClick = {onClick}>
                <Icon path = {icon} size = "24px" />
                {label && <span className = "headerOptionLabel">{label}</span>}
            </div>
        </Tooltip>

    )

}

export default HeaderOption