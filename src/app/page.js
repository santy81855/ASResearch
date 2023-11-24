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
            <section className={styles.aboutSection} id="about">
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
            <section className={styles.servicesSection} id="services">
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
            <section
                className={`${styles.infoSection} ${styles.grey}`}
                id="info"
            >
                <div className={styles.rowContainer}>
                    <div className={styles.infoImageContainer}>
                        <Image
                            src="/images/home/machineLearning.png"
                            alt="Machine Learning Image"
                            width={500}
                            height={500}
                            className={styles.infoImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.title}>Machine Learning</p>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod rutrum justo nec euismod. Nunc
                            congue nibh et lorem rhoncus pharetra. Sed venenatis
                            turpis at purus pharetra, vitae elementum nunc
                            condimentum. Vivamus nunc massa, dictum quis diam
                            non, dapibus aliquam ante. Nunc vitae hendrerit
                            purus. Nulla facilisi. Morbi a placerat est, ut
                            mattis libero.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.infoSection}>
                <div className={styles.rowContainer}>
                    <div className={styles.textContainer}>
                        <p className={styles.title}>Big Data</p>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod rutrum justo nec euismod. Nunc
                            congue nibh et lorem rhoncus pharetra. Sed venenatis
                            turpis at purus pharetra, vitae elementum nunc
                            condimentum. Vivamus nunc massa, dictum quis diam
                            non, dapibus aliquam ante. Nunc vitae hendrerit
                            purus. Nulla facilisi. Morbi a placerat est, ut
                            mattis libero.
                        </p>
                    </div>
                    <div className={styles.infoImageContainer}>
                        <Image
                            src="/images/home/BigData.png"
                            alt="Big Data Image"
                            width={500}
                            height={500}
                            className={styles.infoImage}
                        />
                    </div>
                </div>
            </section>
            <section className={`${styles.infoSection} ${styles.grey}`}>
                <div className={styles.rowContainer}>
                    <div className={styles.infoImageContainer}>
                        <Image
                            src="/images/home/dataMining.png"
                            alt="Data Mining Image"
                            width={500}
                            height={500}
                            className={styles.infoImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.title}>Data Mining</p>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod rutrum justo nec euismod. Nunc
                            congue nibh et lorem rhoncus pharetra. Sed venenatis
                            turpis at purus pharetra, vitae elementum nunc
                            condimentum. Vivamus nunc massa, dictum quis diam
                            non, dapibus aliquam ante. Nunc vitae hendrerit
                            purus. Nulla facilisi. Morbi a placerat est, ut
                            mattis libero.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.actionSection} id="action">
                <div className={styles.actionContainer}>
                    <p className={styles.title}>
                        ¿Te interesa lo que has visto?
                    </p>
                    <p className={styles.text}>
                        Asesórate con expertos en las tecnologías que están
                        revolucionando la industria. Asesórate con los mejores y
                        no dudes en contactarnos.
                    </p>
                    <button className={styles.actionButton}>CONTÁCTANOS</button>
                </div>
            </section>
            <section className={`${styles.workSection} ${styles.grey}`}>
                <p className={styles.title}>- ACERCA DE NOSOTROS -</p>
                <p className={styles.text}>¿Cómo trabajamos?</p>
                <div className={styles.actionCardContainer}>
                    <div className={styles.actionCard}>
                        <div className={styles.titleContainer}>
                            <i
                                className={`fas fa-vials ${styles.titleIcon}`}
                            ></i>
                            <p className={styles.titleIcon}>Experiencia</p>
                        </div>
                        <p className={styles.body}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                    <div className={styles.actionCard}>
                        <div className={styles.titleContainer}>
                            <i
                                className={`far fa-id-card ${styles.titleIcon}`}
                            ></i>
                            <p className={styles.titleIcon}>
                                Servicio Profesional
                            </p>
                        </div>
                        <p className={styles.body}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                    <div className={styles.actionCard}>
                        <div className={styles.titleContainer}>
                            <i
                                className={`fas fa-question-circle ${styles.titleIcon}`}
                            ></i>
                            <p className={styles.titleIcon}>
                                Soporte Permanente
                            </p>
                        </div>
                        <p className={styles.body}>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.contactSection} id="contact">
                <div className={styles.contactCard}>
                    <p className={styles.title}>Envía un mensaje</p>
                    <p className={styles.text}>
                        Déjanos un mensaje, nos pondremos en contacto contigo.
                    </p>
                    <div className={styles.inputContainer}>
                        <div className={styles.row}>
                            <input
                                type="text"
                                placeholder="Nombre"
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Telefono"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.row}>
                            <input
                                type="text"
                                placeholder="Asunto"
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Correo"
                                className={styles.input}
                            />
                        </div>
                        <textarea
                            placeholder="Mensaje"
                            className={styles.textarea}
                        />
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>Cancelar</button>
                            <button className={styles.button}>Enviar</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contactInfoSection} id="contactInfo">
                <p className={styles.title}>Contáctanos</p>
                <p className={styles.text}>
                    ¿Tienes dudas o quieres saber más? No dudes en contactarnos
                </p>
                <p className={styles.contactInfo}>
                    <i className={`fas fa-map-marker-alt ${styles.icon}`}></i>
                    <p>Dirección: Calle No.1 Oficina 333 Medellín.</p>
                </p>
                <p className={styles.contactInfo}>
                    <i className={`fas fa-mobile-alt ${styles.icon}`}></i>
                    <p>Teléfono: 333 333 333</p>
                </p>
                <p className={styles.contactInfo}>
                    <i className={`fas fa-envelope ${styles.icon}`}></i>
                    <p>email@gmail.com</p>
                </p>
            </section>
            <footer className={styles.footer}>
                <p className={styles.text}>© 2023 AS Research</p>
                <div className={styles.socialContainer}>
                    <i className={`fab fa-facebook-f ${styles.icon}`}></i>
                    <i className={`fab fa-instagram ${styles.icon}`}></i>
                    <i className={`fab fa-twitter ${styles.icon}`}></i>
                </div>
            </footer>
        </main>
    );
}
