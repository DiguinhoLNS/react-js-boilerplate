import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@modules/app/reducers/appReducer'
import authReducer from '@modules/auth/reducers/authReducer'
import themeReducer from '@modules/theme/reducers/themeReducer'
import alertReducer from '@modules/app/reducers/alertReducer'
import requestAppReducer from '@modules/app/reducers/requestAppReducer'
import requestAuthReducer from '@modules/auth/reducers/requestAuthReducer'

const store = configureStore({
    reducer: {
        app: appReducer,
        requestApp: requestAppReducer,
        
        alert: alertReducer,
        theme: themeReducer,

        auth: authReducer,
        requestAuth: requestAuthReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store