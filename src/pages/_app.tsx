import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <main className='container px-14 sm:px-28'>
    <Component {...pageProps} />
  </main>
}

export default MyApp
