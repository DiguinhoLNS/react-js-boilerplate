import { reactLocalStorage as ls } from 'reactjs-localstorage'
import info from "../info"

function getItem<T>(key: string){
    try {
        const local = ls.get(key)
        if(!!local) return local as unknown as T
        else throw new Error(`No data found with key: ${key}`)
    } catch (error) {
        info.error('storage getItem', error)
        return null
    }
}

function getObject<T>(key: string){
    try {
        const local = ls.getObject(key)
        if(!!local) return local as unknown as T
        else throw new Error(`No data found with key: ${key}`)
    } catch (error) {
        info.error('storage getObject', error)
        return null
    }
}

function setItem(key: string, value: string | number | boolean){
    try {
        ls.set(key, value)
    } catch (error) {
        info.error('storage setItem', error)
    }
}

function setObject(key: string, value: object){
    try {
        ls.setObject(key, value)
    } catch (error) {
        info.error('storage setObject', error)
    }
}

function remove(key: string){
    try {
        ls.remove(key)
    } catch (error) {
        info.error('storage removeItem', error)
    }
}

function clear(){
    try {
        ls.clear()
    } catch (error) {
        info.error('storage clear', error)
    }
}

const storage = {
    getItem, setItem,
    getObject, setObject,
    remove, clear,
}

export default storage