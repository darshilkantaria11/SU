import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random())
    
  };

  return (
    <>
      <Head>
        <title>CodeSquareX</title>
      </Head>
      <Navbar user={user} logout={logout} key={key} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
