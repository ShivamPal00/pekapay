import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Head from "next/head";
import Footer from '../MyComponents/Footer'
import Navbar from '../MyComponents/Navbar'
import Application from '../MyComponents/Application'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
     <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   </Head>
  <Navbar/>
  <Application />
  <Footer/>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
