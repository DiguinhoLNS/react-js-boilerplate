import React from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTE_INDEX } from '../../../../config'
import { useAppSelector } from '../../../../redux/hooks'

const ChangeRoute: React.FC = () => {

    const { isLogged } = useAppSelector(s => s.auth)

    if(isLogged) return <Navigate to = {ROUTE_INDEX} />
    return null

}

export default ChangeRoute