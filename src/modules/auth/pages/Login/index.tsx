import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'
import ChangeRoute from '@modules/auth/components/ChangeRoute'
import { loginUser } from '@modules/auth/controllers'
import { useAppDispatch } from '@redux/hooks'

const Login: React.FC = () => {

    const dispatch = useAppDispatch()
    const [redirectSuccess, setRedirectSuccess] = useState(false)

    return(

        <>
            {redirectSuccess && <ChangeRoute />}
            <Formik
                initialValues = {{login: '', senha: ''}}
                onSubmit = {v => loginUser(dispatch, v, setRedirectSuccess)}
            >
                <FormikForm style = {{display: 'flex', flexDirection: 'column'}}>
                    <Field name = "login" />
                    <Field type = "password" name = "senha" />
                    <button type = "submit">Entrar</button>
                </FormikForm>
            </Formik>
        </>

    )

}

export default Login