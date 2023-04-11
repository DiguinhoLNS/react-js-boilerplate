import React, { useEffect } from 'react'
import { useAppDispatch } from '@redux/hooks'

const AppProvider: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {

    }, [dispatch])

    return null

}

export default AppProvider