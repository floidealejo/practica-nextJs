import Head from 'next/head'
import styles from '../styles/Home.module.css'
import link from "next/link"
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devias 💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wirite your first <Link href="/wias"><a>wttias</a></Link>
        </h1>
      </main>
      <style jsx>{`.Home_title3DjR7{
        background:"red"
      }`
      }</style>
    </div>
  )
}

