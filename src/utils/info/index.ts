import config from "@config/."

const { SHOW_INFO } = config

function log(initiator: string, message: any){
    SHOW_INFO.LOG && console.log(`LOG ${initiator} -`,message)
}

function dataLog(initiator: string, message: any){
    SHOW_INFO.DATA && console.log(`DATA ${initiator} -`,message)
}

function warnLog(initiator: string, message: any){
    SHOW_INFO.WARN && console.warn(`WARN ${initiator} -`,message)
}

function errorLog(initiator: string, message: any){
    SHOW_INFO.ERROR && console.error(`ERROR ${initiator} -`,message)
}

const info = { 
    log,
    data: dataLog,
    warn: warnLog,
    error: errorLog, 
}

export default info