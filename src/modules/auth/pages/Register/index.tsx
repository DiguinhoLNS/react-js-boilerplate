import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'
import ChangeRoute from '@modules/auth/components/ChangeRoute'
import { registerUser } from '@modules/auth/controllers'
import { useAppDispatch } from '@redux/hooks'

const Register: React.FC = () => {

    const dispatch = useAppDispatch()
    const [redirectSuccess, setRedirectSuccess] = useState(false)

    return(

        <>
            {redirectSuccess && <ChangeRoute />}
            <Formik
                initialValues = {{login: '', senha: ''}}
                onSubmit = {v => registerUser(dispatch, v, setRedirectSuccess)}
            >
                <FormikForm style = {{display: 'flex', flexDirection: 'column'}}>
                <Field name = "login" />
                    <Field type = "password" name = "senha" />
                    <button type = "submit">Criar Conta</button>
                </FormikForm>
            </Formik>
        </>

    )

}

export default Register