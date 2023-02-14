import styles from "@/styles/Home.module.scss"
import Container from "@/components/Container"

const Header = () => {
    const scrollDown = () => {
        const scrollNode = document.querySelector(`.${styles.scroll}`)
        if (scrollNode) {
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header>
            <Container>
                <h2 data-aos="kvarcev-right" className={styles.subtitle}>Digital
                    experience</h2>
                <h1 data-aos="kvarcev-left" data-aos-delay="500" className={styles.title}>With <span>kvarcev</span>
                </h1>
                <div className={styles.block}>
                    <video data-aos="kvarcev-right-v" data-aos-delay="700" className={styles.video} preload="none"
                           autoPlay loop playsInline muted>
                        <source src="bg.mp4"/>
                    </video>
                    <p data-aos="kvarcev-left-s" data-aos-delay="500" onClick={() => scrollDown()}
                       className={styles.scroll}>Scroll down</p>
                </div>
            </Container>
        </header>
    )
}

export default Header