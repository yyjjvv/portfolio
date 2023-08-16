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
                        안녕하세요! 소통하는 팀 플레이어, 프론트엔드 개발자
                        유지원입니다. 미디어영상학부를 졸업하고 프로듀서로
                        일하며 맨투맨 커뮤니케이션과 문서 작성 능력을 키웠고, 웹
                        퍼블리셔로 재직했던 경험으로 시멘틱 마크업과 반응형
                        작업에 자신이 있습니다.
                        <br />
                        위 경험에 프론트엔드 부트캠프에서 얻은 지식과
                        스킬을 더해 보다 더 나은 사용자 경험을 위해 고민하는
                        프론트엔드 개발자가 되겠습니다.
                    </p>
                    {/* <p>
                        Enthusiastic job seeker recently completed Front-end Dev
                        Bootcamp, also graduated with a B.A. in Media
                        Communication looking to apply for a Junior Front-End
                        Developer position. Proven team-player with
                        communication skill by international co-production
                        documentary projects. Hoping to utilize my understanding
                        of visual contents to make better user experience and
                        user interface.
                    </p> */}
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>career</h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <span>2022.06 ~ 2023.02 CNDF</span>
                        {/* UI developer */}웹 퍼블리셔
                    </p>
                    <p>
                        <span>2020.12 ~ 2021.06 IMTV Production</span>
                        {/* Planning Producer/ Assistant Producer */}
                        기획PD / 조연출
                    </p>
                    {/* <p>
                        <span>
                            2019.12 ~ 2020.02 CJ Health Care
                            <br />
                            2018.10 ~ 2018.12 CJ Health Care
                        </span>
                        Freelance Video Editor
                    </p> */}
                </div>
            </section>
            <section className={styles["about__category"]}>
                <h2 className={styles["about__category--title"]}>education</h2>
                <div className={styles["about__category--contents"]}>
                    <p>
                        <span>2023.02 ~ 2023.08</span>
                        {/* Software Engineering Frontend Bootcamp */}
                        코드스테이츠 프론트엔드 부트캠프 수료
                    </p>
                    <p>
                        <span>2021.10 ~ 2022.04</span>
                        {/* UX/UI Design & Web Publishing Course Completion */}
                        이젠아카데미 스마트 웹콘텐츠 UI/UX 디자인 & 퍼블리셔
                        과정 수료
                    </p>
                    <p>
                        <span>2014.03 ~ 2020.02</span>
                        {/* B.A. in Media Communication, Kwangwoon University */}
                        광운대학교 미디어영상학부 언론정보과
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
                        {/* International Volunteer Work/ Kwangwoon University */}
                        국제 봉사 / 광운대학교 & 월드 쉐어
                    </p>
                    <p>
                        <span>2018.01 ~ 2018.06 Denmark</span>
                        {/* International People’s College 2018 Spring term
                        Completion */}
                        국제 시민 대학 2018년 봄학기 수료
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
