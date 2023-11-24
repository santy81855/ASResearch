"use client";
import styles from "../styles/Nav.module.css";
import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
    const [dropDownActive, setDropDownActive] = useState(false);

    const hamburgerClick = () => {
        const dropDownContainer = document.querySelector(
            `.${styles.dropDownContainer}`
        );
        const navBar = document.querySelector(`.${styles.navContainer}`);
        if (dropDownActive) {
            setDropDownActive(false);
            dropDownContainer.classList.remove(styles.dropDownContainerActive);
            dropDownContainer.classList.add(styles.dropDownContainerInactive);
            navBar.classList.remove(styles.loseGradient);
            navBar.classList.add(styles.gainGradient);
        } else {
            setDropDownActive(true);
            dropDownContainer.classList.remove(
                styles.dropDownContainerInactive
            );
            dropDownContainer.classList.add(styles.dropDownContainerActive);
            navBar.classList.remove(styles.gainGradient);
            navBar.classList.add(styles.loseGradient);
        }
    };

    const scrollIntoView = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };
    return (
        <nav className={styles.navContainer}>
            <section className={styles.navLogoContainer}>
                <Image
                    className={styles.navLogo}
                    src="/images/home/logoLg.png"
                    alt="AS Research Logo"
                    width={883}
                    height={187}
                />
            </section>
            <ul className={styles.listContainer}>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <button
                        onClick={() => {
                            scrollIntoView("about");
                        }}
                    >
                        Acerca de
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            scrollIntoView("services");
                        }}
                    >
                        Servicios
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            scrollIntoView("info");
                        }}
                    >
                        Información
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            scrollIntoView("action");
                        }}
                    >
                        Equipo
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            scrollIntoView("contact");
                        }}
                    >
                        Contacto
                    </button>
                </li>
            </ul>
            <section
                className={styles.hamburgerMenuIcon}
                onClick={hamburgerClick}
            >
                &#9776;
            </section>
            <section className={styles.dropDownContainer}>
                <ul className={styles.dropDownListContainer}>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollIntoView("about");
                            }}
                        >
                            Acerca de
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollIntoView("services");
                            }}
                        >
                            Servicios
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollIntoView("info");
                            }}
                        >
                            Información
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollIntoView("action");
                            }}
                        >
                            Equipo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollIntoView("contact");
                            }}
                        >
                            Contacto
                        </button>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Nav;
