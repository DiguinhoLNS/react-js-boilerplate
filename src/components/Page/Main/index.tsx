import React from 'react'
import './styles.scss'
import { MainProps } from './types'
import { useAppSelector } from '../../../redux/hooks'
import { firstLetterToUpperCase } from '../../../utils/format'
import createClassName from '../../../utils/createClassName'

const Main: React.FC <MainProps> = ({ children, name }) => {

    const { sidebarOpen } = useAppSelector(s => s.app)

    const mainClasses = createClassName('overlayScroll', [sidebarOpen && 'sidebar-open'])

    return(

        <main id = {`main${firstLetterToUpperCase(name)}`} className = {mainClasses}>
            <div id = "mainContainer">{children}</div>
        </main>

    )

}

export default Main