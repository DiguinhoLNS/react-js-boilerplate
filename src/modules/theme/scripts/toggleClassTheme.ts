import { Theme } from "../reducers/themeReducer"

export default function toggleClassTheme(theme: Theme){
    document.body.classList.remove(Theme.Light, Theme.Dark)
    document.body.classList.add(theme)
}