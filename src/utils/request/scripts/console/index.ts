

import { SHOW_REQUEST_INFO } from "@config/."
import { RequestMethods } from "../../types"

const line = () => console.log('------------------------------------------------------')

function requestLog(method: RequestMethods, endpoint: string){
    if(SHOW_REQUEST_INFO.REQUEST){
        line()
        console.log(`REQUEST: ${method} ${endpoint}`)
        line()
    }
}

function headerLog(method: RequestMethods, endpoint: string, header: HeadersInit){
    if(SHOW_REQUEST_INFO.HEADER){
        line()
        console.log(`HEADER: ${method} ${endpoint}`)
        console.log(header)
        line()
    }
}

function bodyLog(body: any, endpoint: string){
    if(SHOW_REQUEST_INFO.BODY){
        line()
        console.log('INIT:',endpoint)
        console.log('BODY:',body)
        line()
    }
}

function responseLog(response: any, endpoint: string){
    if(SHOW_REQUEST_INFO.RESPONSE){
        line()
        console.log('INIT:',endpoint)
        console.log('RESPONSE:',response)
        line()
    }
}

function errorLog(method: RequestMethods, endpoint: string, error: any){
    console.log(`ERROR: ${method} ${endpoint}`)
    console.log('ERROR:',error)
}

export { requestLog, headerLog, bodyLog, responseLog, errorLog }