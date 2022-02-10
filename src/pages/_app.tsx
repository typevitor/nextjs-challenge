import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  ) 
}

export default MyApp
