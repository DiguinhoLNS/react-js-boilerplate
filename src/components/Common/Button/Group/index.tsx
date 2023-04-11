import React, { PropsWithChildren } from 'react'
import createClassName from '@utils/createClassName'

const ButtonGroup: React.FC <PropsWithChildren<any>> = ({ children }) => {

    const btnGroupClassName = createClassName('btnGroup')

    return <div className = {btnGroupClassName}>{children}</div>

}

export default ButtonGroup