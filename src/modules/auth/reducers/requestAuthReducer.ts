import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ResponseDefault, ResponsePattern } from "@utils/response/types"
import { responseInitialValues } from "@utils/response"
import { UserData } from "../interfaces/UserData"

interface State {
    requestLoginUser: ResponseDefault<UserData>
    requestRegisterUser: ResponseDefault<UserData>
}

const initialState: State = {
    requestRegisterUser: responseInitialValues,
    requestLoginUser: responseInitialValues,
}

const requestAuthSlice = createSlice({
    name: 'requestAuth',
    initialState,
    reducers: {
        setRequestLoginUserData: (state, action: PayloadAction<ResponsePattern<UserData>>) => {
            state.requestLoginUser.data = action.payload
            state.requestLoginUser.loading = false
            state.requestLoginUser.error = false
        },
        setRequestLoginUserLoading: (state) => {
            state.requestLoginUser.loading = true
            state.requestLoginUser.error = false
        },
        setRequestLoginUserError: (state) => {
            state.requestLoginUser.loading = false
            state.requestLoginUser.error = true
        },
        setRequestLoginUserMessage: (state, action: PayloadAction<string>) => {
            state.requestLoginUser.message = action.payload
        },
        resetRequestLoginUser: (state) => {
            state.requestLoginUser = {...responseInitialValues}
        },

        setRequestRegisterUserData: (state, action: PayloadAction<ResponsePattern<UserData>>) => {
            state.requestRegisterUser.data = action.payload
            state.requestRegisterUser.loading = false
            state.requestRegisterUser.error = false
        },
        setRequestRegisterUserLoading: (state) => {
            state.requestRegisterUser.loading = true
            state.requestRegisterUser.error = false
        },
        setRequestRegisterUserError: (state) => {
            state.requestRegisterUser.loading = false
            state.requestRegisterUser.error = true
        },
        setRequestRegisterUserMessage: (state, action: PayloadAction<string>) => {
            state.requestRegisterUser.message = action.payload
        },
        resetRequestRegisterUser: (state) => {
            state.requestRegisterUser = {...responseInitialValues}
        },
    }
})

const { actions } = requestAuthSlice

export const requestLoginUserActions = {
    data: actions.setRequestLoginUserData,
    loading: actions.setRequestLoginUserLoading,
    error: actions.setRequestLoginUserError,
    message: actions.setRequestLoginUserMessage,
    reset: actions.resetRequestLoginUser
}

export const requestRegisterUserActions = {
    data: actions.setRequestRegisterUserData,
    loading: actions.setRequestRegisterUserLoading,
    error: actions.setRequestRegisterUserError,
    message: actions.setRequestRegisterUserMessage,
    reset: actions.resetRequestRegisterUser
}

export default requestAuthSlice.reducer