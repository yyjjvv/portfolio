import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Detail.module.scss";
import { data } from "../common/data/data";

const Detail = () => {
    const params = useParams();
    const info = data.filter((list) => list.id === Number(params.id))[0];

    return (
        <main className={styles.content}>
            <div
                className={styles["content__img"]}
                style={{
                    backgroundImage: `url('/img/banner_${info.name}.png')`,
                    backgroundColor: `${info.color}`,
                }}
            ></div>
            <div className={styles["content__description"]}>
                <div className={styles["title__wrapper"]}>
                    <h2 className={styles.title}>{info.title}</h2>
                    <div className={styles["category__link"]}>
                        <a
                            href={info.url}
                            target="_blank"
                            className={styles["category__link__list"]}
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                            URL
                        </a>
                        {info.github && (
                            <a
                                href={info.github}
                                target="_blank"
                                className={styles["category__link__list"]}
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                GitHub
                            </a>
                        )}
                        {info.manual && (
                            <a
                                href={info.manual}
                                target="_blank"
                                className={styles["category__link__list"]}
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faPaperclip} />
                                서비스 매뉴얼
                            </a>
                        )}
                    </div>
                </div>
                <p className={styles.date}>
                    {info.type} / {info.date}
                </p>

                <h3 className={styles["category__title"]}>프로젝트 개요</h3>
                <div
                    className={styles["category__contents"]}
                    dangerouslySetInnerHTML={{ __html: info.description }}
                ></div>

                <h3 className={styles["category__title"]}>기술 스택</h3>
                <div className={styles["category__contents"]}>{info.stack}</div>

                <h3 className={styles["category__title"]}>기능 구현 및 역할</h3>
                <ul
                    className={styles["category__lists"]}
                    dangerouslySetInnerHTML={{ __html: info.detailRoleHTML }}
                ></ul>
                <h3 className={styles["category__title"]}>담당 페이지</h3>
                <ul
                    className={styles["category__lists"]}
                    dangerouslySetInnerHTML={{ __html: info.detailPageHTML }}
                ></ul>
            </div>
        </main>
    );
};

export default Detail;
