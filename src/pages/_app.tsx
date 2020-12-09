import type { AppProps, NextWebVitalsMetric  /*, AppContext */ } from 'next/app'
import '../styles/globals.scss'

export function reportWebVitals(metric: NextWebVitalsMetric) {
    if (process.env.NODE_ENV !== 'production') {
        console.log(metric);
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
