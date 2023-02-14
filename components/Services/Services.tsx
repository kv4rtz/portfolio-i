import Container from "@/components/Container"
import styles from '@/styles/Services.module.scss'
import { blocks, IBlock } from "@/components/Services/blocks"

const Services = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 data-aos="kvarcev-left" className={styles.title}>Services available</h2>
                <div className={styles.container}>
                    {blocks.map((el: IBlock, idx: number) => (
                        <div data-aos="kvarcev-right" {...idx === 1 && { ['data-aos']: 'kvarcev-left' }}
                             key={idx}
                             className={styles.block}>
                            <h3 className={styles['block-title']}>{el.title}</h3>
                            <ul className={styles['block-list']}>
                                {el.list.map((el: string, idx: number) => (
                                    <li key={idx}><span>{el}</span><span>0{idx + 1}</span></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Services