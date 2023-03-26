import React from "react"
import Router from "./router"
import {QueryClient, QueryClientProvider} from "react-query"

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
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
}

export default App
