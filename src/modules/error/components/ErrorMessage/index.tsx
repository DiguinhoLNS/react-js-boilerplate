import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessageProps } from './types'
import './styles.scss'
import { ROUTE_INDEX } from '../../../../config'

const ErrorMessage: React.FC <ErrorMessageProps> = ({ title, subtitle, message }) => {

    return(

        <div id = "wrapper" className = "error">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p>{message}</p>
            <Link to = {ROUTE_INDEX}>Voltar</Link>
        </div>

    )

}

export default ErrorMessage