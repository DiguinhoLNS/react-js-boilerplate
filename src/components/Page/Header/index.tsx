import React from 'react'
import { Link } from 'react-router-dom'
import { mdiAccount, mdiBrightness4, mdiBrightness5, mdiLogout, mdiMenu } from '@mdi/js'
import { ROUTE_INDEX } from '@config/.'
import { toggleTheme } from '@modules/theme/reducers/themeReducer'
import { setAuthLogout } from '@modules/auth/reducers/authReducer'
import { toggleSidebar } from '@modules/app/reducers/appReducer'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import './styles.scss'
import HeaderContent from './Content'
import HeaderOption from './Option'

const Header: React.FC = () => {

    const dispatch = useAppDispatch()
    const { sidebarOpen } = useAppSelector(s => s.app)
    const { theme } = useAppSelector(s => s.theme)

    return(

        <header>
            <ul id = "headerContainer">
                <HeaderContent name = "menu">
                    <HeaderOption
                        icon = {mdiMenu}
                        tooltip = {sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick = {() => dispatch(toggleSidebar())}
                    />
                </HeaderContent>
                <HeaderContent name = "logo">
                    <Link to = {ROUTE_INDEX}>
                        
                    </Link>
                </HeaderContent>
                <HeaderContent name = "blank" />
                <HeaderContent name = "options">
                    <HeaderOption
                        icon = {theme === 'dark-mode' ? mdiBrightness5 : mdiBrightness4}
                        tooltip = {theme === 'dark-mode' ? 'Tema claro' : 'Tema escuro'}
                        onClick = {() => dispatch(toggleTheme())}
                    />
                    <HeaderOption
                        icon = {mdiLogout}
                        tooltip = "Sair"
                        onClick = {() => dispatch(setAuthLogout())}
                    />
                    <HeaderOption
                        icon = {mdiAccount}
                        tooltip = {'Conta'}
                        onClick = {() => {}}
                    />
                </HeaderContent>
            </ul>
        </header>

    )

}

export default Header