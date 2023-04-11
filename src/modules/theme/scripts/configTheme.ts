import storage from '../../../utils/storage'
import { setTheme, Theme } from '../reducers/themeReducer'
import toggleClassTheme from './toggleClassTheme'

export default function configTheme(dispatch: Function, match?: boolean){
    const localTheme = storage.getItem<Theme>('theme')
    const matchTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light
    const newTheme = !!localTheme ? localTheme : !!match ? matchTheme : Theme.Light
    
    toggleClassTheme(newTheme)
    dispatch(setTheme(newTheme))
}