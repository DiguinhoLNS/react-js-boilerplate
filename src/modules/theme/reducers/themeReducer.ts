import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import storage from "../../../utils/storage"
import toggleClassTheme from "../scripts/toggleClassTheme"

export enum Theme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

interface State {
    theme: Theme
}

const initialState: State = {
    theme: Theme.Light
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
            storage.setItem('theme', action.payload)
            toggleClassTheme(action.payload)
        },
        toggleTheme: (state) => {
            state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark
            storage.setItem('theme', state.theme)
            toggleClassTheme(state.theme)
        },
    }
})

export const { toggleTheme, setTheme } = ThemeSlice.actions
export default ThemeSlice.reducer