import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, /* faLinkedin */ } from "@fortawesome/free-brands-svg-icons";
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
                        &nbsp;&nbsp;&nbsp;안녕하세요. 사용자의 관점에서 고민하는
                        프론트엔드 개발자 유지원입니다!
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;웹 퍼블리셔로 재직했던 경험을 통해
                        시멘틱 태그를 사용한 마크업 작성, CSS 선택자를 활용한
                        반응형 작업에 능숙하며, Javascript와 jQuery, 그리고 기타
                        라이브러리를 사용해 인터랙티브한 페이지를 구현했습니다.
                        퍼블리셔와 프론트엔드 개발자 역할을 맡아 현재 운영 중인
                        2개의 프로젝트에 참여하였고, 이를 계기로 프론트엔드
                        개발에 흥미가 생겨 부트캠프에 지원하게 되었습니다.
                    </p>

                    <p>
                        &nbsp;&nbsp;&nbsp;프론트엔드 부트캠프에 참여해 React를
                        중점적으로 공부했고, 2개의 백엔드/프론트엔드 협업
                        프로젝트를 완료하고 과정을 수료했습니다. 메인
                        프로젝트에서 JWT 발급 에러를 해결했으며, 재사용성을
                        위한 공통 컴포넌트 작업, 사용자 맞춤 콘텐츠 기능, 게시글
                        필터링 등을 담당했습니다. 또한 피그마 작업을 리드하여
                        통일성 있는 인터페이스를 만들어 반응형 웹 구현을
                        수월하게 했습니다.
                    </p>

                    <p>
                        &nbsp;&nbsp;&nbsp;이에 더해, 현업 경험을 살려 Github
                        이슈와 Pull Request를 적극적으로 활용하였고, 가독성
                        향상을 위해 클린 코드 및 주석 작성에 힘썼습니다. 이러한
                        방식을 통해 체계적으로 프로젝트를 관리할 수 있었고,
                        팀원의 이슈를 사전에 발견하여 도와줄 수 있었습니다.
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
                    {/* <p>
                        <a
                            href="https://www.linkedin.com/in/jiwonyoo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            &nbsp; LinkedIn
                        </a>
                    </p> */}
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
