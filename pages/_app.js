import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Head from "next/head";





function MyApp({ Component, pageProps }) {
  return(
    <>
     <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   </Head>
 
  <Component {...pageProps} />
    </>
    )
}

export default MyApp
