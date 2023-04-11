import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    alertOpen: boolean
    alertMessage: string
    alertSeverity?: 'success' | 'error' | 'warning' | 'info'
}

const initialState: State = {
    alertOpen: false,
    alertMessage: '',
    alertSeverity: 'info'
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlertOpen: (state, action: PayloadAction<boolean>) => {
            state.alertOpen = action.payload
        },
        setAlertMessage: (state, action: PayloadAction<string>) => {
            state.alertMessage = action.payload
        },
        setAlertSeverity: (state, action: PayloadAction<'success' | 'error' | 'warning' | 'info'>) => {
            state.alertSeverity = action.payload
        },

        setAlert: (state, action: PayloadAction<{message: string, severity: 'success' | 'error' | 'warning' | 'info'}>) => {
            state.alertOpen = true
            state.alertMessage = action.payload.message
            state.alertSeverity = action.payload.severity
        },
        
        resetAlert: (state) => {
            state.alertOpen = initialState.alertOpen
            state.alertMessage = initialState.alertMessage
            state.alertSeverity = initialState.alertSeverity
        }
    }
})

export const { setAlertOpen, setAlertMessage, setAlertSeverity, setAlert, resetAlert } = alertSlice.actions
export default alertSlice.reducer