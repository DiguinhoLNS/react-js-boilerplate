import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'

const FormObserver: React.FC = () => {
    const { values, setFieldValue } = useFormikContext()

    useEffect(() => {
        
    }, [values])

    return null
}

export default FormObserver