import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
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
                    backgroundImage: `url('/img/detail_${info.name}.png')`,
                    backgroundColor: `${info.color}`,
                }}
            ></div>
            <div className={styles["content__description"]}>
                <h2 className={styles.title}>{info.title}</h2>
                <p className={styles.date}>
                    {info.type} / {info.date}
                </p>
                <h3 className={styles["category__title"]}>프로젝트 개요</h3>
                <div
                    className={styles["category__contents"]}
                    dangerouslySetInnerHTML={{ __html: info.description }}
                ></div>
                <h3 className={styles["category__title"]}>담당 역할 및 기능</h3>
                <ul
                    className={styles["category__lists"]}
                    dangerouslySetInnerHTML={{ __html: info.detailHTML }}
                >
                    
                </ul>
                <div className={styles["category__link"]}>
                    <a
                        href={info.url}
                        target="_blank"
                        className={styles["category__link__list"]}
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} />
                        <span>URL</span>
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
                </div>
            </div>
        </main>
    );
};

export default Detail;
