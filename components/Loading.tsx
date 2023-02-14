import TypeIt from "typeit-react"
import styles from '@/styles/Loading.module.scss'
import Head from "next/head"

const Loading = () => {
    const typingLoadingText = (instance: any) => {
        const words = ['Welcome']

        for (const el of words) {
            instance.type(el).pause(1000).delete(el.length)
        }

        return instance
    }

    return (
        <>
            <Head><title>kvarcev.loading</title></Head>
            <div className={styles.loading}>
                <TypeIt options={{ loop: true, speed: 50 }} getBeforeInit={typingLoadingText}/>
            </div>
        </>
    )
}

export default Loading