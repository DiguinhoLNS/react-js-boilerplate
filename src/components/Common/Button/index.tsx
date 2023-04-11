import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { ButtonProps } from './types'
import './styles.scss'

const ButtonComponent: React.FC<ButtonProps> = ({ preventDefault, type = 'button', theme, icon, label, status, loading, onClick }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const prevent = preventDefault ?? false
        if(!!onClick){
            prevent && e.preventDefault()
            onClick()
        }
    }

    return(
        <>
            <button 
                type = {type}
                className = {`btn ${theme ?? 'default'}${!!status ? ` status ${status}` : ''}`} 
                onClick = {e => onClick ? handleClick(e) : undefined}
            >
                {(!!loading && <div className = "spinner" />) || (!!icon && <Icon path = {icon} size = "20px" />)}
                {label}
            </button>
        </>
    )
}

const Button: React.FC <ButtonProps> = ({ link, target, ...props }) => {
    return(
        <div className = "btnWrapper">
            {(!!link && (
                <Link to = {link} target = {target ?? '_self'}>
                    <ButtonComponent {...props} />
                </Link>
            )) || <ButtonComponent {...props} />}
        </div>
    )
}

export default Button