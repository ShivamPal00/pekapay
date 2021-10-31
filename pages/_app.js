import Footer from '../MyComponents/Footer'
import Navbar from '../MyComponents/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
  <Navbar/>
  <Footer/>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
