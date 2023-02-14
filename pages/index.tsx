import Contacts from "@/components/Contacts"
import Header from "@/components/Header"
import Services from "@/components/Services/Services"
import styles from '@/styles/Home.module.scss'
import AOS from "aos"
import Head from "next/head"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease-in-out',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom'
        })

        window.addEventListener('scroll', () => {
            AOS.refresh()
        })
    })
    return (
        <>
            <Head><title>kvarcev.dev</title></Head>
            <div className={styles.wrapper}>
                <Header/>
                <Services/>
                <Contacts/>
            </div>
        </>
    )
}

export default Home