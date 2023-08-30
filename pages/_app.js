import '@/styles/globals.css'
import { sessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps }) {
  return <sessionProvider>
    return <Component {...pageProps} />
  </sessionProvider>
  
}
export default MyApp
