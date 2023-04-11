import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { reactLocalStorage } from "reactjs-localstorage"
import { SidebarSection } from "../interfaces/Sidebar"

interface State {
    sidebarOpen: boolean
    sidebarSections: SidebarSection
}

const initialState: State = {
    sidebarOpen: true,
    sidebarSections: {}
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen
        },

        setSidebarSections: (state, action: PayloadAction<SidebarSection>) => {
            state.sidebarSections = action.payload

            reactLocalStorage.setObject('sidebarSections', state.sidebarSections)
        },
        toggleSidebarSection: (state, action: PayloadAction<string>) => {
            state.sidebarSections[action.payload] = !state.sidebarSections[action.payload]

            reactLocalStorage.setObject('sidebarSections', state.sidebarSections)
        },
    }
})

export const { toggleSidebar, setSidebarSections, toggleSidebarSection } = appSlice.actions
export default appSlice.reducer