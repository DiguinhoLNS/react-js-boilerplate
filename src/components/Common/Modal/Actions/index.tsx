import React, { PropsWithChildren } from 'react'

const ModalActions: React.FC <PropsWithChildren<any>> = ({ children }) => {
    return <div className = "modalBoxMainActionsContainer">{children}</div>
}

export default ModalActions