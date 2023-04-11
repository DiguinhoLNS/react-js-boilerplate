import ENV from "@env/index"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import storage from "@utils/storage"
import { UserData } from "../interfaces/UserData"

interface State {
    userData: UserData | null
    loading: boolean
    isLogged: boolean
    routeAuth: boolean
}

const initialState: State = {
    userData: null,
    loading: true,
    isLogged: false,
    routeAuth: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLogin: (state, action: PayloadAction<UserData>) => {
            storage.setObject('user',action.payload)
            storage.setItem('flagSysten', ENV.FLAG_SYSTEN)

            state.userData = action.payload
            state.loading = false
            state.isLogged = true
        },
        setAuthLogout: (state) => {
            storage.remove('user')

            state.userData = null
            state.isLogged = false

            window.location.reload()
        },
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setAuthIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload
        },
        setAuthRouteAuth: (state, action: PayloadAction<boolean>) => {
            state.routeAuth = action.payload
        },
    }
})

export const {
    setAuthLogin, setAuthLogout,
    setAuthLoading, setAuthIsLoggedIn,
    setAuthRouteAuth
} = authSlice.actions
export default authSlice.reducer