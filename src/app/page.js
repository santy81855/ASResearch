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
            <section className={styles.aboutSection}>
                <div className={styles.aboutImageContainer}>
                    <Image
                        src="/images/home/logo150c.png"
                        alt="About Image"
                        width={500}
                        height={500}
                        className={styles.aboutImage}
                    />
                </div>
                <p className={styles.aboutTitle}>- ACERCA DE AS RESEARCH -</p>
                <p className={styles.aboutText}>
                    Breve presentación de la organización, útil para introducir
                    en pocas líneas los servicios o lo que los diferencia.
                </p>
                <p className={styles.aboutSubtext}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy.
                </p>
            </section>
            <section className={styles.servicesSection}>
                <p className={styles.servicesTitle}>- SERVICIOS -</p>
                <p className={styles.servicesText}>¿Con qué trabajamos?</p>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <p className={styles.title}>Machine Learning</p>
                        <p className={styles.text}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                        <button className={styles.button}>LEER MÁS</button>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title}>Big Data</p>
                        <p className={styles.text}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                        <button>LEER MÁS</button>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title}>Minería de Datos</p>
                        <p className={styles.text}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                        <button className={styles.button}>LEER MÁS</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
