import Head from 'next/head'
import styles,{stylesGlobal} from "../AppLayout/styles"
export default function AppLayout({children}){
    return(
        <>
            <Head>
                <title>Devias 💻</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                {children}
            </main>
        <style jsx>{styles}</style>
        <style jsx global>{stylesGlobal}</style>
        </>
    )
}