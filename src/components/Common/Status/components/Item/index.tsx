import React from 'react'
import { StatusItemProps } from '../../types'

const StatusItem: React.FC <StatusItemProps> = ({ title, value }) => {

    return(

        <div className = "statusItem">
            <h3>{title}</h3>
            <span className = "value">{value}</span>
        </div>

    )

}

export default StatusItem