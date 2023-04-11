import React, { useCallback } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setAlertOpen } from '@modules/app/reducers/alertReducer'

const SnackbarAlert: React.FC = () => {

    const dispatch = useAppDispatch()
    const { alertOpen, alertMessage, alertSeverity } = useAppSelector(s => s.alert)

    const handleClose = useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
        if(reason === 'clickaway') return
        dispatch(setAlertOpen(false))
    }, [dispatch])

    return(

        <Snackbar 
            open = {alertOpen} 
            autoHideDuration = {6000} 
            anchorOrigin = {{vertical: 'top', horizontal: 'center'}}
            onClose = {handleClose} 
        >
            <Alert severity = {alertSeverity ?? 'info'} variant = "filled" onClose = {handleClose}>{alertMessage}</Alert>
        </Snackbar>

    )

}

export default SnackbarAlert