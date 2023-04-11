import ENV from "@env/index"
import request from "@utils/request"
import { ResponsePattern } from "@utils/response/types"
import { handleResponse, initRequest } from "@utils/response"
import { DispatchType } from "@redux/interfaces"
import { UserData } from "../interfaces/UserData"
import { setAuthLogin } from "../reducers/authReducer"
import { requestLoginUserActions, requestRegisterUserActions } from "../reducers/requestAuthReducer"

export async function loginUser<T>(
    dispatch: DispatchType,
    formValues: T,
    setRedirectSuccess: Function,
){
    /*
    initRequest(dispatch, requestLoginUserActions)

    const options = { messages: {errorMessage: {}, successMessage: {}} }
    const endpoint = `${ENV.APP_ENDPOINT}/`
    const body = formValues
    const response = await request.post<ResponsePattern<UserData>>({endpoint, body})

    handleResponse('loginUser', dispatch, response, requestLoginUserActions, options)
    .then(data => {
        dispatch(setAuthLogin(data))
        setRedirectSuccess(true)
    })
    */
    dispatch(setAuthLogin(formValues as any))
    setRedirectSuccess(true)
}

export async function registerUser<T>(
    dispatch: DispatchType,
    formValues: T,
    setRedirectSuccess: Function,
){
    /*
    initRequest(dispatch, requestRegisterUserActions)

    const options = { messages: {errorMessage: {}, successMessage: {}} }
    const endpoint = `${ENV.APP_ENDPOINT}/`
    const body = formValues
    const response = await request.post<ResponsePattern<UserData>>({endpoint, body})

    handleResponse('loginUser', dispatch, response, requestRegisterUserActions, options)
    .then(data => {
        dispatch(setAuthLogin(data))
        setRedirectSuccess(true)
    })
    */
    dispatch(setAuthLogin(formValues as any))
    setRedirectSuccess(true)
}