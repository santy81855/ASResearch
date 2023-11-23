import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <div className={styles.textContainer}>
                    <div className={styles.titleSection}>
                        <h1 className={styles.heroTitle}>
                            Machine Learning, Minería de Datos y Big Data:
                        </h1>
                        <p className={styles.heroText}>
                            Asesórate con expertos en las tecnologías que están
                            revolucionando la industria
                        </p>
                    </div>

                    <div className={styles.heroImageContainer}>
                        <Image
                            src="/images/home/logo450b.png"
                            alt="Hero Image"
                            width={500}
                            height={500}
                            className={styles.heroImage}
                        />
                    </div>
                </div>
                <button className={styles.actionButton}>APRENDER</button>
            </section>
        </main>
    );
}
