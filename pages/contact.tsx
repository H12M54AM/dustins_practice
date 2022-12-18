import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Practice Webapp - Contact</title>
                <meta name="description" content="Call Us!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <Navbar />

            </main>
        </>
    )
}