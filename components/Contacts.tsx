import Container from "@/components/Container"
import styles from '@/styles/Contacts.module.scss'

const Contacts = () => {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <h2 data-aos="kvarcev-right" className={styles.title}>Let`s get in touch</h2>
                <a data-aos="kvarcev-right" className={styles.email}
                   target="_blank" href="mailto:0-zh@mail.ru" rel="noreferrer">kv4rtz@mail.ru</a>
                <div data-aos="kvarcev-right" className={styles.block}>
                    <a target="_blank" href="https://vk.com/kv4rtz" rel="noreferrer">VKontakte</a>
                    <a target="_blank" href="https://t.me/kv4rtz" rel="noreferrer">Telegram</a>
                    <a target="_blank" href="https://discordapp.com/users/" rel="noreferrer">Discord</a>
                </div>
                <p data-aos="kvarcev-right" className={styles.copyright}>{new Date().getFullYear()} © kvarcev</p>
            </Container>
        </footer>
    )
}

export default Contacts