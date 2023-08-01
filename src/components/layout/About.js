import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./About.module.scss";

const About = ({ onClose }) => {
    const closeBtnHandler = () => {
        onClose();
    };

    return (
        <div className={styles.about}>
            <button
                type="button"
                className={styles["about__close"]}
                onClick={closeBtnHandler}
            >
                <img src="/img/ic-close.svg" alt="icon close" />
            </button>
            <section className={styles["about__category"]}>
                <h2
                    className={`${styles["about__category--title"]} ${styles["about-logo"]}`}
                    onClick={closeBtnHandler}
                >
                    yyjjvv
                </h2>
                <div className={styles["about__category--contents"]}>
                    <h3>Jiwon Yoo based in Korea</h3>
                    <p>
                        Enthusiastic job seeker recently completed Front-end Dev
                        Bootcamp, also graduated with a B.A. in Media
                        Communication looking to apply for a Junior Front-End
                        Developer position. Proven team-player with
                        communication skill by international co-production
                        documentary projects. Hoping to utilize my understanding
                        of visual contents to make better user experience and
                        user interface.
                    </p>
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>career</h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <span>2022.06 ~ 2023.02 CNDF</span>
                        UI developer
                    </p>
                    <p>
                        <span>2020.12 ~ 2021.06 IMTV Production</span>
                        Planning Producer/ Assistant Producer
                    </p>
                    <p>
                        <span>
                            2019.12 ~ 2020.02 CJ Health Care
                            <br />
                            2018.10 ~ 2018.12 CJ Health Care
                        </span>
                        Freelance Video Editor
                    </p>
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>education</h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <span>2023.02 ~ 2023.08</span>
                        Front-end Dev Bootcamp
                    </p>
                    <p>
                        <span>2021.10 ~ 2022.04</span>
                        UX/UI Design & Web Publishing Course Completion
                    </p>
                    <p>
                        <span>2014.03 ~ 2020.02</span>
                        B.A. in Media Communication, Kwangwoon University
                    </p>
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>
                    global experience
                </h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <span>2019.07 ~ 2019.08 Laos</span>
                        International Volunteer Work/ Kwangwoon University
                    </p>
                    <p>
                        <span>2018.01 ~ 2018.06 Denmark</span>
                        International People’s College 2018 Spring term
                        Completion
                    </p>
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>contact</h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <a href="mailto:jiwonyoo66@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            &nbsp; jiwonyoo66@gmail.com &nbsp;
                            <i className="fa-solid fa-paper-plane"></i>
                        </a>
                    </p>
                    <p>
                        <a href="tel:+821040657089">
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                            &nbsp; +82 (0)10 4065 7089 &nbsp;
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/jiwonyoo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            &nbsp; LinkedIn
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://github.com/yyjjvv"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            &nbsp; Git Hub
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
