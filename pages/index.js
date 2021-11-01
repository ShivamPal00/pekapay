import Head from 'next/head'
import styles from '../styles/home.module.css'

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

      <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:from-blue-500 md:focus:from-blue-700">
  Focus me
</button>
    </div>
  )
}
