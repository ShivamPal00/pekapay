import Head from 'next/head'
import Footer from '../MyComponents/Footer'
import Application from '../MyComponents/Application'
import Navbar from '../MyComponents/Navbar';
import Nav1 from '../MyComponents/Nav1';
// import '../styles/globals.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PekaPay</title>
        <meta
      name="description"
      content="TextUtils is a utility which can be used to manipulate your text in the way you want."
    />
    </Head>

    <Nav1 />
    <Application />
    <Footer/>


    </div>
  )
}
