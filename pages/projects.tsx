import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Projects() {
    return (
        <>
            <Head>
                <title>Practice Webapp - Projects</title>
                <meta name="description" content="See what we made" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <Navbar />

            </main>
        </>
    )
}