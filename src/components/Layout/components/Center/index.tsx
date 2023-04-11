import React from 'react'
import Main from '@components/Page/Main'
import { PageLayoutProps } from '../../types'

const LayoutCenter: React.FC <PageLayoutProps> = ({ children, name }) => {

    return(

        <>
            <Main name = {name}>{children}</Main>
        </>

    )

}

export default LayoutCenter