import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// const inter:any = inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice Webapp - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        
        <Footer />
      </main>
    </>
  )
}