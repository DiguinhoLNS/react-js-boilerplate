import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "@redux/hooks"

const ProtectedRoute: React.FC <PropsWithChildren<any>> = ({ children }) => {
    const { userData } = useAppSelector(s => s.auth)
    
    if (!!userData) return children
    return <Navigate to = "/login" />
}

export default ProtectedRoute