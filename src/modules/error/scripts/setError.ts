import { ErrorMessageProps } from "../components/ErrorMessage/types"
import httpStatusCode from "../../../constants/httpStatusCode"
import info from "../../../utils/info"

function formattErrorMessage(error: string[]): ErrorMessageProps {
    return {
        title: error[0],
        subtitle: error[1] ?? undefined,
        message: error[2],
    }
}

export default function setError(errorCode?: string): ErrorMessageProps {
    try {
        if(!!errorCode){
            const errorType = errorCode.split('-')[0]
            const errorId = errorCode.split('-')[1]

            if(errorType === 'http'){
                const httpError = httpStatusCode.find(code => code.code.toString() === errorId)!
                return formattErrorMessage([httpError.code.toString(), '', httpError.description])
            }else throw new Error('Error not found')
        }else throw new Error('Error not provided')
    } catch (error) {
        info.error('setError',error)
        return {
            title: 'Erro desonhecido',
            message: 'Ocorreu um erro desconhecido, tente novamente mais tarde.'
        }
    }
}