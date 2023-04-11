import React, { useCallback } from 'react'
//import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'
import { ModalProps } from './types'
import './styles.scss'
import { useAppDispatch } from '@redux/hooks'
import handleFunction from '@utils/handleFunction'
import ReactPortal from '../ReactPortal'

const Modal: React.FC <ModalProps> = ({ children, zIndex = 999, width, title, open, setOpen, actions, onClose }) => {

    const dispatch = useAppDispatch()

    const handleClose = useCallback(() => {
        if(open){
            if(onClose) onClose()
            handleFunction(dispatch, () => setOpen(false))
        }
    }, [dispatch, onClose, setOpen, open])

    if(open){
        return(
            <ReactPortal>
                <div className = "modalWrapper" style = {{zIndex}}>
                    <>
                        <ul className = {`modalBox`} style = {{width}}>
                            <li className = "modalBoxHeader">
                                <h1>{title}</h1>
                                <span className = "iconContainer" onClick = {handleClose}>
                                    <Icon path = {mdiClose} size = "24px" />
                                </span>
                            </li>
                            <li className = "modalBoxMain overlayScroll">
                                <div className = "modalBoxMainContainer">
                                    {children}
                                    {!!actions && actions.length > 0 && (
                                        <div className = "modalBoxMainActionsContainer">
                                            {actions.map((action, index) => (
                                                <button key = {index} className = {action.theme ?? 'default'} onClick = {() => action.onClick()}>{action.label}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </>
                </div>
            </ReactPortal>
        )
    }
    return null

}

export default Modal