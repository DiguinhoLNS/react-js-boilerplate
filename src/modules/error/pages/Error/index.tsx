import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorPageProps } from './types'
import ErrorMessage from '../../components/ErrorMessage'
import { ErrorMessageProps } from '../../components/ErrorMessage/types'
import setError from '../../scripts/setError'

const Error: React.FC <Partial<ErrorPageProps>> = props => {

    const { idError } = useParams()
    const [errorText] = useState<ErrorMessageProps>(setError(idError ?? props.idError))

    return <ErrorMessage {...errorText} />

}

export default Error