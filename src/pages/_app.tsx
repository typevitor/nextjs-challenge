import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title={`Vitor's Posts`} />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  ) 
}

export default MyApp
