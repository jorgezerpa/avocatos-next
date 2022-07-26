import { useState } from 'react'
import { AppProps } from 'next/app'
import Layout from 'components/Layout/Layout'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([])

  return (
    <Layout>
      <Component {...pageProps} cart={cart} setCart={setCart} />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
