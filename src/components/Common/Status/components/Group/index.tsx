import React from 'react'
import '../../styles.scss'
import { StatusGroupProps } from '../../types'

const StatusGroup: React.FC <StatusGroupProps> = ({ children }) => {

    return <div className = "statusGroup">{children}</div>

}

export default StatusGroup