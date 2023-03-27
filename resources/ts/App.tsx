import React from "react"
import Router from "./router"
import {QueryClient, QueryClientProvider} from "react-query"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from "./hooks/AuthContext"

const App: React.VFC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }
    })
    return(
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
                <ToastContainer />
            </QueryClientProvider>
        </AuthProvider>
    )
}

export default App
