import { DispatchType } from "@redux/interfaces"
import { HandleResponseErrorReducers, HandleResponseOptions, HandleResponseReducers, InitRequestReducers, ResponsePattern, ResponseStatesPattern } from "./types"
import handleFunction from "../handleFunction"
import info from "@utils/info"
import { setAlert } from "@modules/app/reducers/alertReducer"
import createAlert from "@modules/app/scripts/alert/createAlert"

export const responseInitialValues: ResponseStatesPattern<any> = {
    data: null,
    loading: false,
    error: false,
    message: ''
}

export function initRequest(dispatch: DispatchType, { reset, loading }: InitRequestReducers){
    dispatch(reset())
    dispatch(loading())
}

export function checkResponseType(initiator: string, response: ResponsePattern<any>){
    try {
        Object.keys(response).forEach(key => {
            if(!['flagErro', 'listaMensagens', 'listaResultados'].includes(key)){
                throw new Error(`${initiator} response type is invalid. Key: ${key} not expected.`)
            }
        })
        return true
    } catch (error) {
        info.error('checkResponseType',error)
        return false
    }
}

export function handleResponseError(
    initiator: string, 
    dispatch: DispatchType, 
    reducers: HandleResponseErrorReducers, 
    error: any, 
    options?: HandleResponseOptions
){
    info.error(`response ${initiator}`, error)
    dispatch(reducers.message(error.message ?? JSON.stringify(error)))
    dispatch(reducers.error())
    if(!!options){
        const { onError, messages } = options

        if(onError){
            handleFunction(dispatch, onError)
        }
        if(messages && !!messages.errorMessage){
            dispatch(setAlert(createAlert('error', messages.errorMessage.text ?? error.message ?? JSON.stringify(error))))
        }
    }
}

export function handleResponse<T>(
    initiator: string,
    dispatch: DispatchType,
    response: ResponsePattern<T> | null, 
    reducers: HandleResponseReducers, 
    options?: HandleResponseOptions
){
    return new Promise<T>((resolve) => {
        try {
            if(!!response){
                dispatch(reducers.data(response))
                if(response.flagErro === false){
                    if(options){
                        const { onSuccess, messages } = options

                        if(onSuccess){
                            handleFunction(dispatch, onSuccess)
                        }
                        if(messages && !!messages.successMessage){
                            dispatch(setAlert(createAlert('success', messages.successMessage.text ?? response.listaMensagens[0])))
                        }
                    }
                    resolve(response.listaResultados)
                }else throw response.listaMensagens[0]
            }else{
                throw { message: 'Erro na requisição' }
            }
        } catch (error: any) {
            handleResponseError(initiator, dispatch, reducers, error, options)
        }
    })
}

export function toResponsePattern<T>(data: T): ResponsePattern<T> {
    return {
        flagErro: false,
        listaMensagens: [] as string[],
        listaResultados: data as T,
    }
}