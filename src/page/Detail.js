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
                }}
            ></div>
            <div className={styles["content__description"]}>
                <h3 className={styles.title}>{info.title}</h3>
                <p className={styles.date}>
                    {info.type} / {info.date}
                </p>
                <p className={styles["category__title"]}>프로젝트 개요</p>
                <div
                    className={styles["category__contents"]}
                    dangerouslySetInnerHTML={{ __html: info.description }}
                ></div>
                <p className={styles["category__title"]}>담당 역할 및 기능</p>
                <ul
                    className={styles["category__lists"]}
                    dangerouslySetInnerHTML={{ __html: info.detailHTML }}
                >
                    
                </ul>
                <div className={styles["category__link"]}>
                <a href={info.url} className={styles["category__link__list"]}>
                    <FontAwesomeIcon icon={faLink} />
                    <span>URL</span>
                </a>
                {info.github && (
                    <a href={info.github} className={styles["category__link__list"]}>
                        <FontAwesomeIcon icon={faGithub} />GitHub
                    </a>
                )}
                </div>
            </div>
        </main>
    );
};

export default Detail;
