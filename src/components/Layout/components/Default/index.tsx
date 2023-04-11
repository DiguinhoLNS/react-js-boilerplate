import React from 'react'
import { PageLayoutProps } from '../../types'
import Footer from '@components/Page/Footer'
import Header from '@components/Page/Header'
import Main from '@components/Page/Main'
import Sidebar from '@components/Page/Sidebar'

const LayoutDefault: React.FC <PageLayoutProps> = ({ children, name }) => {

    return(

        <>
            <Header />
            <Sidebar />
            <Main name = {name}>{children}</Main>
            <Footer />
        </>

    )

}

export default LayoutDefault