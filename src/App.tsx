import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AppProvider from '@modules/app/components/Provider'
import './styles/vars.scss'
import './styles/app.scss'
import store from './redux/store'
import AppRoutes from './routes'

const App: React.FC = () => {
    
    return(

        <>
            <ReduxProvider store = {store}>
                <AppProvider />
                <AppRoutes />
            </ReduxProvider>
        </>

    )

}

export default App