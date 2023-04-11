const SHOW_INFO = {
    LOG: false,
    DATA: false,
    ERROR: false,
    WARN: false,
}

const SHOW_REQUEST_INFO = {
    REQUEST: false,
    HEADER: false,
    BODY: false,
    RESPONSE: false,
}

const config = {
    SHOW_INFO, SHOW_REQUEST_INFO,
}

const APP_VERSION = {
    NAME: '1.0.0-Boilerplate',
    RELEASE_DATE: '00/00/0000',
}

const ROUTE_INDEX = '/home'

export default config
export { SHOW_INFO, SHOW_REQUEST_INFO, APP_VERSION, ROUTE_INDEX }