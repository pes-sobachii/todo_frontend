import '@/styles/global.css'
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import React from "react";

const MyApp = ({ Component, pageProps }) => {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}
export default MyApp