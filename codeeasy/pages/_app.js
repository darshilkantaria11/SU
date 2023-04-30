import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>SquareEdits</title>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
