import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title={`Vitor's Posts`} />
      <main>
        <Component {...pageProps} />
      </main>
      <div className="w-full border-t-2 text-center p-2">Footer</div>
    </>
  ) 
}

export default MyApp
