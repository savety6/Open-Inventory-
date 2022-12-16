import React from 'react'
import {QueryClientProvider, QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './context'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Context>
                <App />
            </Context>
             <ReactQueryDevtools/> {/* //TODO: remove this in production */}
        </QueryClientProvider>
    </React.StrictMode>
)
