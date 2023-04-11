import React from 'react'
import Form from '..'
import { FormRenderProps } from '../types'

const FormRender: React.FC <FormRenderProps> = ({ render }) => {

    return(
        
        <>
            {render.map((row, index) => (
                <Form.Row key = {index} grid = {row.grid} columns = {row.data.length}>
                    {row.data.map((field, index) => <Form.Group key = {index} {...field} />)}
                </Form.Row>
            ))}
        </>

    )

}

export default FormRender