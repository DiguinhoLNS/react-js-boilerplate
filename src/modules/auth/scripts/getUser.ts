import ENV from '@env/index'
import info from '@utils/info'
import storage from '@utils/storage'
import { UserData } from '../interfaces/UserData'
import { setAuthLoading, setAuthLogin } from '../reducers/authReducer'

export default function getUser(dispatch: Function){
    try {
        const localUser = storage.getObject<UserData>('user')
        const localFlagSysten = storage.getItem<string>('flagSysten')
        
        if(!!localUser && !!localUser.login){
            if((!!localFlagSysten && localFlagSysten === ENV.FLAG_SYSTEN) || process.env.NODE_ENV === 'production'){
                dispatch(setAuthLogin(localUser))
            }else throw new Error('Flag Systen not found')
        }else throw new Error('User not found')
    } catch (error) {
        info.error('getUser',error)
    } finally {
        dispatch(setAuthLoading(false))
    }
}