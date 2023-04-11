import React from 'react'
import { HeaderContentProps } from '../types'

const HeaderContent: React.FC <React.PropsWithChildren<HeaderContentProps>> = ({ children, name }) => {
    return <li className = {`headerContent ${name}`}>{children}</li>
}
    
export default HeaderContent